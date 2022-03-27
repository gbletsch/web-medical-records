import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ACCESS_TOKEN_NAME } from '../../constants/apiConstants'

import './style.css'

export const Login = () => {
  localStorage.removeItem(ACCESS_TOKEN_NAME)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    const users = {
      'gui@email.com': '123'
    }
    if (users[email] === password) {
      localStorage.setItem(ACCESS_TOKEN_NAME, 'my_super_token')
    }
    navigate('/')
  }

  return (
    <div className="container">
   <div className="wrapper">
      <h1>Login Page</h1>
      <form>
        <div className="form-row">
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-row">
          <button type="submit" onClick={handleLogin}>
            Login
          </button>
        </div>

      </form>
    </div>

    </div>
    )
}

export default Login