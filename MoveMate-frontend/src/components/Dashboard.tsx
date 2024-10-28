import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { format } from 'date-fns'
import { BarChartIcon, TargetIcon, RocketIcon, ScrollTextIcon } from '@radix-ui/react-icons'

interface DashboardData {
  streak: number
  longestStreak: number
  recentExercises: Array<{
    id: string
    type: string
    duration: number
    date: string
  }>
  activeGoals: Array<{
    id: string
    targetExercises: number
    targetDuration: number
    progress: number
  }>
  activeChallenges: Array<{
    id: string
    name: string
    progress: number
  }>
  recentJournalEntries: Array<{
    id: string
    content: string
    date: string
  }>
}

export default function Dashboard() {
  const { data, isLoading, error } = useQuery<DashboardData>({
    queryKey: ['dashboardData'],
    queryFn: async () => {
      const { data } = await axios.get('/api/dashboard')
      return data
    },
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>An error occurred: {(error as Error).message}</div>

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to MoveMate</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Current Streak"
          value={`${data?.streak} days`}
          icon={<BarChartIcon className="w-6 h-6" />}
        />
        <DashboardCard
          title="Longest Streak"
          value={`${data?.longestStreak} days`}
          icon={<BarChartIcon className="w-6 h-6" />}
        />
        <DashboardCard
          title="Active Goals"
          value={`${data?.activeGoals.length}`}
          icon={<TargetIcon className="w-6 h-6" />}
        />
        <DashboardCard
          title="Active Challenges"
          value={`${data?.activeChallenges.length}`}
          icon={<RocketIcon className="w-6 h-6" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentExercises exercises={data?.recentExercises || []} />
        <RecentJournalEntries entries={data?.recentJournalEntries || []} />
      </div>
    </div>
  )
}

function DashboardCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
        </div>
        <div className="text-blue-500">{icon}</div>
      </div>
    </div>
  )
}

function RecentExercises({ exercises }: { exercises: DashboardData['recentExercises'] }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Recent Exercises</h2>
      <ul className="space-y-4">
        {exercises.map((exercise) => (
          <li key={exercise.id} className="flex justify-between items-center">
            <div>
              <p className="font-medium">{exercise.type}</p>
              <p className="text-sm text-gray-600">{format(new Date(exercise.date), 'MMM d, yyyy')}</p>
            </div>
            <p className="text-blue-600 font-medium">{exercise.duration} min</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

function RecentJournalEntries({ entries }: { entries: DashboardData['recentJournalEntries'] }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Recent Journal Entries</h2>
      <ul className="space-y-4">
        {entries.map((entry) => (
          <li key={entry.id} className="border-b pb-4 last:border-b-0 last:pb-0">
            <p className="text-sm text-gray-600 mb-1">{format(new Date(entry.date), 'MMM d, yyyy')}</p>
            <p className="text-gray-800 line-clamp-2">{entry.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
