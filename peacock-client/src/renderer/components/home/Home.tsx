import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { DASHBOARD_REDIRECT } from '@peacock-renderer-utils'

const Home = () => {
  const location = useLocation()

  return <Navigate to={DASHBOARD_REDIRECT} replace state={{location}} />
}

export default Home