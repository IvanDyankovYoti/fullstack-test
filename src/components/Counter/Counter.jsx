import { useState } from 'react'
import './Counter.css'

// HINT: This component has 3 bugs - check state management, event handlers, and rendering logic
function Counter() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  // BUG 1: Incorrect increment logic - closure issue
  const increment = () => {
    setCount(count + step) // This won't work as expected in strict mode
  }

  // BUG 2: Missing event parameter
  const handleStepChange = () => {
    setStep(event.target.value) // 'event' is not defined
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div className="container">
      <h3>Interactive Counter</h3>
      <div className="counter-display">
        <span className="count-value">{count}</span>
      </div>

      <div className="counter-controls">
        <button onClick={increment} className="btn btn-primary">
          +{step}
        </button>

        <button onClick={() => setCount(prev => prev - step)} className="btn btn-secondary">
          -{step}
        </button>

        <button onClick={reset} className="btn btn-danger">
          Reset
        </button>
      </div>

      <div className="step-control">
        <label htmlFor="step">Step size:</label>
        <input
          id="step"
          type="number"
          min="1"
          max="10"
          value={step}
          onChange={handleStepChange}
          className="step-input"
        />
      </div>

      {/* BUG 3: Incorrect conditional rendering - shows when count is 0 instead of > 0 */}
      {!count && (
        <p className="milestone">🎉 You've reached a milestone!</p>
      )}
    </div>
  )
}

export default Counter