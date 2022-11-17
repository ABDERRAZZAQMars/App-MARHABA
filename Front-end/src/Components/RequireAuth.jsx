import React from 'react'
import { Navigate, Outlet,useLocation } from 'react-router-dom'
import Access_denied from './Access_denied'





const RequireAuth = ({Role}) => {
    const location = useLocation()

    const role = localStorage.getItem('role')

    if(!role){
       return  <Navigate to='/login' state={{ from: location }} replace/>
    }

    if (Role.indexOf(role) < 0) {
        return <Access_denied />
    }


    return <Outlet />
  
    
}

export default RequireAuth