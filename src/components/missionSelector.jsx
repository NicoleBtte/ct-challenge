import React from 'react'
import { useQuery } from 'react-query'
import { getMissions } from '../api/axiosClient'

function MissionSelector({ onSelectedMission }) {
    const { data: missions, isLoading} = useQuery('missions', getMissions)
    console.log("M", missions)

    if(isLoading){
        return <p> Loading missions... </p>
    }

  return (
    <div>
        <select onChange={(e) => onSelectedMission(e.target.value)}>
            <option value="">Select a mission</option>
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