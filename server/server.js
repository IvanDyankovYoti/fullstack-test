import express from 'express'
import cors from 'cors'
import sqlite3 from 'sqlite3'
import process from 'process'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

const db = new sqlite3.Database(':memory:')

db.serialize(() => {
  // TODO: Create users table and insert sample data
});

app.get('/api/user/:id', async (req, res) => {
  // const userId = req.params.id

  try {
    res.status(501).json({
      error: 'Not implemented',
      message: 'Database schema and query implementation needed'
    })

  } catch (error) {
    console.error('Error fetching user:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Start server
app.listen(PORT, () => {
  console.log(`👤 User API: http://localhost:${PORT}/api/user/1`)
})

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\\nShutting down server...')
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err.message)
    } else {
      console.log('Database connection closed.')
    }
    process.exit(0)
  })
})
