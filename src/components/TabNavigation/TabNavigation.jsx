import { NavLink } from 'react-router-dom'
import './TabNavigation.css'

function TabNavigation() {
  return (
    <nav className="tab-navigation">
      <div className="nav-tabs">
        <NavLink
          to="/task1"
          className={({ isActive }) => `nav-tab ${isActive ? 'active' : ''}`}
        >
          <span className="tab-icon">🐛</span>
          <span className="tab-label">Task 1</span>
          <span className="tab-subtitle">Debug Counter</span>
        </NavLink>

        <NavLink
          to="/task2"
          className={({ isActive }) => `nav-tab ${isActive ? 'active' : ''}`}
        >
          <span className="tab-icon">🔧</span>
          <span className="tab-label">Task 2</span>
          <span className="tab-subtitle">Debug UserCard</span>
        </NavLink>

        <NavLink
          to="/task3"
          className={({ isActive }) => `nav-tab ${isActive ? 'active' : ''}`}
        >
          <span className="tab-icon">🧪</span>
          <span className="tab-label">Task 3</span>
          <span className="tab-subtitle">Unit Testing</span>
        </NavLink>

        <NavLink
          to="/task4"
          className={({ isActive }) => `nav-tab ${isActive ? 'active' : ''}`}
        >
          <span className="tab-icon">🗄️</span>
          <span className="tab-label">Task 4</span>
          <span className="tab-subtitle">Backend API</span>
        </NavLink>
      </div>
    </nav>
  )
}

export default TabNavigation