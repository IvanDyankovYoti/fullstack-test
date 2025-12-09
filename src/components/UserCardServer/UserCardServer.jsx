import { useState, useEffect } from 'react'
import '../UserCard/UserCard.css'

// This UserCard fetches data from the local Express server
// Task: Implement the backend database and API endpoint
function UserCardServer() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch('http://localhost:3001/api/user/1')
      const userData = await response.json()

      // Handle server not implemented response
      if (response.status === 501) {
        throw new Error('Database not implemented yet - check server/README.md for implementation tasks')
      }

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`)
      }

      setUser(userData)
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  const handleRefresh = () => {
    if (user) {
      console.log(`Refreshing data for ${user.name}`)
    }
    fetchUser()
  }

  if (loading) return <div className="user-card loading">Loading user data...</div>
  if (error) return (
    <div className="user-card error">
      <h4>Error</h4>
      <p>{error}</p>
      <button onClick={handleRefresh} className="refresh-btn">
        🔄 Try Again
      </button>
    </div>
  )

  return (
    <div className="user-card">
      <h3>User Profile (Server Data)</h3>

      <div className="user-info">
        <div className="user-avatar">
          <div className="avatar-placeholder">{user.name?.[0]}</div>
        </div>

        <div className="user-details">
          <h4>{user.name}</h4>
          <p>@{user.username}</p>
          <p>📧 {user.email}</p>

          {user.company && (
            <p>🏢 {user.company.name}</p>
          )}
          {user.address && (
            <p>📍 {user.address.city}, {user.address.zipcode}</p>
          )}
          {user.website && (
            <p>🌐 {user.website}</p>
          )}
        </div>
      </div>

      <button onClick={handleRefresh} className="refresh-btn">
        🔄 Refresh Data
      </button>
    </div>
  )
}

export default UserCardServer