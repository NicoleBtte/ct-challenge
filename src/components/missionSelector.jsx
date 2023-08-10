import React from 'react'
import { useQuery } from 'react-query'
import { getMissions } from '../api/axiosClient'

function MissionSelector({ onSelectedMission }) {
    const { data: missions, isLoading} = useQuery('missions', getMissions)

    if(isLoading){
        return <p> Cargando misiones... </p>
    }

  return (
    <div className="mt-3 flex items-center justify-center rounded-lg">
        <select
            className="bg-cyan-50 rounded-lg p-3 text-lg text-s font-semibold"
            onChange={(e) => onSelectedMission(e.target.value)}>
            <option value="">Seleccione una misión</option>
            {missions && missions.map((mission) => (
                <option key={mission.id} value={mission.id}>
                    {mission.name}
                </option>
            ))}
        </select>
    </div>
  )
}

export default MissionSelector