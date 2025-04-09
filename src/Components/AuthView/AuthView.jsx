import React from 'react'
import { Navigate } from 'react-router-dom'

export default function AuthView(props) {

  if(localStorage.getItem("isAuthenticated")){
    return <Navigate to={'/'}/>
  }
  else{
    return props.children
  }

 
}
