import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

// Placeholder components
const Home = () => <h2>Welcome to MoveMate</h2>
const Dashboard = () => <h2>Your Fitness Dashboard</h2>
const Exercises = () => <h2>Exercise Library</h2>
const Goals = () => <h2>Your Fitness Goals</h2>

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>MoveMate</h1>
          <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/dashboard">Dashboard</Link> |{" "}
            <Link to="/exercises">Exercises</Link> |{" "}
            <Link to="/goals">Goals</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Workout count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </Router>
  )
}

export default App
