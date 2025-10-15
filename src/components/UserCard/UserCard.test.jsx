import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import UserCard from './UserCard'

const mockUser = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496'
    }
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets'
  }
}

// Mock fetch globally
globalThis.fetch = vi.fn()

// eslint-disable-next-line no-unused-vars
const clickRefreshButton = () => {
  const button = screen.getByRole('button', { name: /Refresh Data/i })
  fireEvent.click(button)
}

describe('UserCard', () => {
  beforeEach(() => { })

  it('should display loading state initially', () => {
    fetch.mockImplementation(() => new Promise(() => {}))
    render(<UserCard />)
    expect(screen.getByText('Loading user data...')).toBeInTheDocument()
  })

  it('should display user data after successful fetch', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUser,
    })

    render(<UserCard />)

    await waitFor(() => {
      expect(screen.getByText('Leanne Graham')).toBeInTheDocument()
    })

    expect(screen.getByText('@Bret')).toBeInTheDocument()
    expect(screen.getByText('📧 Sincere@april.biz')).toBeInTheDocument()
  })

  it('should display avatar placeholder with first letter of name', async () => {
    expect.fail('Not implemented yet');
  })

  it('should display error state when fetch fails', async () => {
    render(<UserCard />)
    await waitFor(() => {
      expect(screen.getByText(/Error: Failed to fetch/)).toBeInTheDocument()
    })
  })

  it('should refetch data when refresh button is clicked', async () => {
    // TODO: Implement this test
    // Assert: Check that fetch was called again
    expect(fetch).toHaveBeenCalledTimes(2)
  })
})