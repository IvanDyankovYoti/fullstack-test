import UserCard from '../components/UserCard/UserCard'

function Task2() {
  return (
    <div className="task-container">
      <div className="task-header">
        <h2>🐛 Task 2: Debug UserCard Component</h2>
        <div className="task-description">
          <p><strong>Objective:</strong> Find and fix the bugs in the UserCard component</p>
        </div>
      </div>

      <div className="expected-behavior">
        <h3>Expected Behavior:</h3>
        <ul>
          <li>✅ Should fetch and display user data from API</li>
          <li>✅ Improve component reliability, what will happen if the user data is not available?</li>
        </ul>
      </div>

      <div className="component-demo">
        <h3>Component to Debug:</h3>
        <UserCard />
      </div>
    </div>
  )
}

export default Task2