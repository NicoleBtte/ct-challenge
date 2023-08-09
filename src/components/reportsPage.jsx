import React from 'react'
import { Navigate } from 'react-router-dom'
import { useStateContext } from '../context/contextProvider'
import MissionSelector from './missionSelector'
import ReportList from './reportList'

const ReportsPage = () => {
  const { token } =  useStateContext();

  if(!token){
    return <Navigate to="/"/>
  }

  return (
    <>
      <div>ReportsPage</div>
      <MissionSelector></MissionSelector>
      <ReportList></ReportList>
    </>

  )
}

export default ReportsPage