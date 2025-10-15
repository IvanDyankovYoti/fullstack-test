# Express API Server - Database Implementation Task

## Overview

This Express server provides a local API endpoint for the UserCard component, replacing the external JSONPlaceholder API. The server is set up with SQLite but requires database schema and query implementation.

## Quick Start

```bash
# Install dependencies
cd server
npm install

# Start the server
npm start

# Or start with auto-reload (Node 18+)
npm run dev
```

The server runs on **http://localhost:3001**

## Current Status

✅ **Working:**
- Express server setup
- SQLite database connection
- CORS configuration
- Health check endpoint (`/api/health`)

❌ **TODO (Interviewee Tasks):**
- Database schema creation
- Sample data insertion
- API endpoint implementation

## 🎯 Interview Tasks

### Task 1: Database Schema Design (10-15 minutes)

**Objective:** Design and create a SQLite database schema for user data.

**Requirements:**
- Create a `users` table with appropriate columns
- Support the data structure expected by UserCard component
- Handle related data (address, company) appropriately

**Options:**
1. **Single Table Approach** (simpler) - All data in one table
2. **Normalized Approach** (better design) - Separate tables with relationships

**Files to work with:**
- `server/schema.sql` - Contains suggested schema templates
- `server/server.js` - Database initialization code

### Task 2: API Implementation (10-15 minutes)

**Objective:** Implement the GET `/api/user/:id` endpoint.

**Current behavior:** Returns 501 "Not implemented" response

**Required behavior:**
- Query the database for user by ID
- Return user data in JSON format
- Handle error cases:
  - User not found (404)
  - Database errors (500)
  - Invalid ID format (400)

**Expected response format:**
```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874"
  },
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net"
  }
}
```

### Task 3: Integration Testing (5-10 minutes)

**Objective:** Verify the complete flow works.

**Steps:**
1. Start the server: `npm start`
2. Test health endpoint: `curl http://localhost:3001/api/health`
3. Test user endpoint: `curl http://localhost:3001/api/user/1`
4. Start React app and verify UserCard component works
5. Run the unit tests: `npm test`

## API Endpoints

### GET /api/health
**Status:** ✅ Working
**Purpose:** Server health check
**Response:**
```json
{
  "status": "Server is running",
  "database": "Connected",
  "timestamp": "2025-10-13T20:30:00.000Z"
}
```

### GET /api/user/:id
**Status:** ❌ TODO - Needs implementation
**Purpose:** Fetch user data by ID
**Current Response:** 501 Not implemented
**Expected Response:** User data object (see format above)

## Database Connection

- **Type:** SQLite
- **File:** `server/users.db` (created automatically)
- **Connection:** Established on server start

## Development Tips

1. **Database Browsing:** Use SQLite browser tools to inspect data
2. **API Testing:** Use curl, Postman, or browser dev tools
3. **Logging:** Check server console for database connection status
4. **Hot Reload:** Use `npm run dev` for auto-restart on file changes

## Evaluation Criteria

**Database Design:**
- Appropriate column types and constraints
- Proper handling of related data
- Data normalization understanding

**API Implementation:**
- Correct SQL query syntax
- Proper error handling
- RESTful response format
- Async/await usage

**Integration:**
- Frontend-backend communication
- CORS understanding
- Development workflow

## Common Pitfalls

- Forgetting to handle async database operations
- Not checking for null/undefined results
- Missing error handling for edge cases
- Incorrect JSON response format
- CORS issues when connecting frontend

## Extension Ideas

- Add user creation endpoint (POST)
- Add user update endpoint (PUT)
- Add query parameters (search, pagination)
- Add data validation
- Add request logging middleware