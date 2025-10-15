import Counter from '../components/Counter/Counter'

function Task1() {
  return (
    <div className="task-container">
      <div className="task-header">
        <h2>🐛 Task 1: Debug Counter Component</h2>
        <div className="task-description">
          <p><strong>Objective:</strong> Find and fix the bugs in the Counter component</p>
        </div>
      </div>

      <div className="expected-behavior">
        <h3>Expected Behavior:</h3>
        <ul>
          <li>✅ Counter should increment/decrement by step value</li>
          <li>✅ Step input should control increment/decrement amount</li>
          <li>✅ Reset button should set counter to 0</li>
          <li>✅ Milestone message should show when count {'>'} 0</li>
        </ul>
      </div>

      <div className="component-demo">
        <h3>Component to Debug:</h3>
        <Counter />
      </div>
    </div>
  )
}

export default Task1