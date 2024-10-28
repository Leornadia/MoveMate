import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Exercises from './pages/Exercises'
import Goals from './pages/Goals'
import Challenges from './pages/Challenges'
import Journal from './pages/Journal'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/exercises" element={<Exercises />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/journal" element={<Journal />} />
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  )
}
