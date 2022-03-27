import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ACCESS_TOKEN_NAME } from '../../constants/apiConstants'

export const Register = () => {
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
   <div>
      <h1>Register Page</h1>
      <span>Email</span>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <span>Password</span>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={handleLogin}>
        Log in
      </button>
    </div>
    )
}

export default Register