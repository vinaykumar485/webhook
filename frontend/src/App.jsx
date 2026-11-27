
import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = (event) => {
    event.preventDefault()
    alert('Login UI is working! Authentication will be implemented in the next feature.')
  }

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="login-header">
          <div className="company-logo">EM</div>
          <h1>Employee Management</h1>
          <p>Welcome back! Please sign in to continue.</p>
        </div>

        <form onSubmit={handleLogin}>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>

        </form>

        <div className="login-footer">
          © 2026 Employee Management System
        </div>

      </div>
    </div>
  )
}

export default App

