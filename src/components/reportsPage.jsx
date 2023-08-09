import React from 'react'
import { Navigate } from 'react-router-dom'
import { useStateContext } from '../context/contextProvider'
import MissionSelector from './missionSelector'

const ReportsPage = () => {
  const { token } =  useStateContext();

  if(!token){
    return <Navigate to="/"/>
  }

  return (
    <>
      <div>ReportsPage</div>
      <MissionSelector></MissionSelector>
    </>

  )
}

export default ReportsPage