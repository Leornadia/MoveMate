import { Link } from 'react-router-dom'
import { PersonIcon, BarChartIcon, TargetIcon, RocketIcon, ScrollTextIcon } from '@radix-ui/react-icons'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-blue-600">MoveMate</Link>
          <div className="flex space-x-4">
            <NavLink to="/" icon={<BarChartIcon />} text="Dashboard" />
            <NavLink to="/exercises" icon={<PersonIcon />} text="Exercises" />
            <NavLink to="/goals" icon={<TargetIcon />} text="Goals" />
            <NavLink to="/challenges" icon={<RocketIcon />} text="Challenges" />
            <NavLink to="/journal" icon={<ScrollTextIcon />} text="Journal" />
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link to={to} className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100">
      {icon}
      <span className="ml-2">{text}</span>
    </Link>
  )
}
