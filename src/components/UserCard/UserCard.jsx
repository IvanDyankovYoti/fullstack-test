import { useState, useEffect } from 'react'
import './UserCard.css'

function UserCard() {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchUser()
  })

  const fetchUser = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
      const userData = await response.json()

      setUser(userData)
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  const handleRefresh = () => {
    console.log(`Refreshing data for ${user.name}`)
    fetchUser()
  }

  if (loading) return <div className="user-card loading">Loading user data...</div>
  if (error) return <div className="user-card error">Error: {error}</div>

  return (
    <div className="user-card">
      <h3>User Profile</h3>

      <div className="user-info">
        <div className="user-avatar">
          <div className="avatar-placeholder">{user.name[0]}</div>
        </div>

        <div className="user-details">
          <h4>{user.name}</h4>
          <p>@{user.userName || '⚠️'}</p>
          <p>📧 {user.email}</p>
        </div>
      </div>

      <button onClick={handleRefresh} className="refresh-btn">
        🔄 Refresh Data
      </button>
    </div>
  )
}

export default UserCard