import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useStateContext } from '../context/contextProvider'
import MissionSelector from './missionSelector'
import ReportList from './reportList'
import { useQueryClient } from 'react-query'

const ReportsPage = () => {
  const [selectedMission, setSelectedMission] = useState('')
  const { token } =  useStateContext();
  const queryClient = useQueryClient();
  console.log(selectedMission)

  if(!token){
    return <Navigate to="/"/>
  }

  const handleSelectedMission = (missionId) => {
    setSelectedMission(missionId)
    if(missionId){
      queryClient.invalidateQueries(['reports', missionId])
    }
  }

  return (
    <>
      <div>ReportsPage</div>
      <MissionSelector onSelectedMission={handleSelectedMission}></MissionSelector>
      <ReportList missionId={selectedMission}></ReportList>
    </>

  )
}

export default ReportsPage