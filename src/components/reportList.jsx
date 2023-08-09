import React from 'react'
import { useQuery } from 'react-query'
import { getReports, getReportsByMission } from '../api/axiosClient'

const ReportList = ({ missionId = '2' }) => {
    const {data: reports, isLoading } = useQuery('reports', () => getReportsByMission(missionId))

    if(isLoading){
        return <p> Loading reports... </p>
    }

  return (
    <div>
        <h2>Reports</h2>
        <p>{ reports.name }</p>
        <p>{ reports.year }</p>
    </div>
  )
}

export default ReportList