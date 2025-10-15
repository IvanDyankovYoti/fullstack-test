import '@testing-library/jest-dom'
import { beforeEach, vi } from 'vitest'

// Mock fetch globally for tests
globalThis.fetch = vi.fn()

// Setup function to reset mocks before each test
beforeEach(() => {
  fetch.mockClear()
})