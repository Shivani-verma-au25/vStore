// src/pages/DashboardRedirect.jsx
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const DashboardRedirect = () => {
  const { users } = useSelector(state => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (!users) {
      navigate('/login')
    } else if (users.role === 'admin') {
      navigate('/dashboard/admin')
    } else {
      navigate('/dashboard/user')
    }
  }, [users, navigate])

  return null
}

export default DashboardRedirect
