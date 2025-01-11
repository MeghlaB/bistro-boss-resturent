import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'
import userAdmin from '../CustomHook/UserAdmin'

export default function AdminRoute({children}) {
    const {user,loading} = useContext(AuthContext)
    const [isAdmin,isAdminLoading] =  userAdmin()
    const location =  useLocation()

    if(loading || isAdminLoading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

if(user && isAdmin){
    return children
}

  return (
    <Navigate to={'/login'} state={{from: location.pathname }}></Navigate>
  )
}
