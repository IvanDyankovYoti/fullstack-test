import UserCardServer from '../components/UserCardServer/UserCardServer'

function Task4() {
  return (
    <div className="task-container">
      <div className="task-header">
        <h2>🗄️ Task 4: Backend Integration</h2>
        <div className="task-description">
          <p><strong>Objective:</strong> Implement Express server with SQLite database</p>
        </div>
      </div>

      <div className="backend-tasks">
        <h3>Backend Implementation Tasks:</h3>
        <ol>
          <li><strong>Database Schema</strong> - Create users table in SQLite</li>
          <li><strong>Sample Data</strong> - Insert test user data</li>
          <li><strong>API Endpoint</strong> - Implement GET /api/user/:id</li>
          <li><strong>Error Handling</strong> - Handle 404, 500, and other edge cases</li>
        </ol>
      </div>

      <div className="server-setup">
        <h3>Server Setup Commands:</h3>
        <div className="code-block">
          <pre>{`# Install server dependencies
cd server
npm install

# Start the Express server
npm start

# Server runs on http://localhost:3001
# Health check: http://localhost:3001/api/health`}</pre>
        </div>
      </div>

      <div className="database-schema">
        <h3>Database Schema Requirements:</h3>
        <p>Create a database schema that supports the following user data structure:</p>
        <div className="code-block">
          <pre>{`{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz"
}`}</pre>
        </div>
      </div>

      <div className="component-demo">
        <h3>Component Testing Server Integration:</h3>
        <p>This UserCard component fetches data from your local server. It will show an error until the database is implemented.</p>
        <UserCardServer />
      </div>
    </div>
  )
}

export default Task4