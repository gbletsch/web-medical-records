import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { ACCESS_TOKEN_NAME } from './constants/apiConstants'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

import './global.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          path='/'
          element={
            <RequireAuth redirectTo='/login'>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>  
    </BrowserRouter>
    );
}

const RequireAuth = ({ children, redirectTo }) => {
  const isAuthenticated = getAuth()

  return isAuthenticated ? children : <Navigate to={redirectTo} />
}

const getAuth = () => {
  // verify if token saved is saved in localhost
  const token = localStorage.getItem(ACCESS_TOKEN_NAME)

  return token ? true : false
}

export default App;
