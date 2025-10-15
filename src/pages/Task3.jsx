function Task3() {
  return (
    <div className="task-container">
      <div className="task-header">
        <h2>🧪 Task 3: Unit Testing</h2>
        <div className="task-description">
          <p><strong>Objective:</strong> Work with unit tests for the UserCard component</p>
        </div>
      </div>

      <div className="testing-tasks">
        <h3>Testing Tasks:</h3>
        <ol>
          <li>Understand test structure in <code>src/components/UserCard/UserCard.test.jsx</code></li>
          <li>Tests may fail due to bugs in UserCard component</li>
          <li>Handle null/undefined data scenarios</li>
        </ol>
      </div>

      <div className="test-commands">
        <h3>Commands to Run:</h3>
        <div className="code-block">
          <pre>{`# Run all tests
npm test

# Run tests in watch mode
npm run test

# Run specific test file
npm test UserCard.test.jsx`}</pre>
        </div>
      </div>

      <div className="test-coverage">
        <h3>Current Test Coverage:</h3>
        <ul>
          <li>✅ <strong>Loading state</strong> - Component shows loading message</li>
          <li>✅ <strong>Success state</strong> - Displays user data after API call</li>
          <li>✅ <strong>Error state</strong> - Shows error message when API fails</li>
          <li>✅ <strong>Refresh functionality</strong> - Button triggers new API call</li>
          <li>✅ <strong>Avatar display</strong> - Shows first letter placeholder</li>
        </ul>
      </div>
    </div>
  )
}

export default Task3