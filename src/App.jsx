import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import TabNavigation from './components/TabNavigation/TabNavigation'
import Task1 from './pages/Task1'
import Task2 from './pages/Task2'
import Task3 from './pages/Task3'
import Task4 from './pages/Task4'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>🚀 Fullstack Developer Assessment</h1>
        </header>

        <TabNavigation />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Navigate to="/task1" replace />} />
            <Route path="/task1" element={<Task1 />} />
            <Route path="/task2" element={<Task2 />} />
            <Route path="/task3" element={<Task3 />} />
            <Route path="/task4" element={<Task4 />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
