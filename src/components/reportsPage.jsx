import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useStateContext } from '../context/contextProvider'
import MissionSelector from './missionSelector'
import ReportList from './reportList'
import { useQueryClient } from 'react-query'

const ReportsPage = () => {
  const [selectedMission, setSelectedMission] = useState('')
  const { token , setToken, setTribe, setUser} =  useStateContext();
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

  const handleLogout = () => {
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('USER_ID');
    localStorage.removeItem('TRIBE_ID');
    setToken(null);
    setTribe(null);
    setUser(null);
  }

  return (
    <div className="p-8">
      <div className="w-full bg-cyan-900 p-5  flex items-center justify-between" >
        <h2 className="text-white text-5xl">Panel de reportes</h2>
        <button className="bg-neutral-200 p-3 rounded-lg opacity-40" onClick={handleLogout}>Cerrar sesión</button>
      </div>
      <MissionSelector onSelectedMission={handleSelectedMission}></MissionSelector>
      <ReportList missionId={selectedMission}></ReportList>
    </div>

  )
}

export default ReportsPage