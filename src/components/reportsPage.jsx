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
    <div className="p-8">
      <div className="w-full bg-cyan-900 p-5" >
        <h2 className="text-white text-5xl">Panel de reportes</h2>
      </div>
      <MissionSelector onSelectedMission={handleSelectedMission}></MissionSelector>
      <ReportList missionId={selectedMission}></ReportList>
    </div>

  )
}

export default ReportsPage