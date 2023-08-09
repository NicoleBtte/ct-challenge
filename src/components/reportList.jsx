import React from 'react'
import { useQuery } from 'react-query'
import { getReports } from '../api/axiosClient'

const ReportList = ({ missionId }) => {
    const {data: reports, isLoading } = useQuery('allReports', getReports)

    if(isLoading){
        return <p> Loading reports... </p>
    }

  return (
    <div>
        <h2>Reports</h2>
        <ul>
            {reports.map((report) => (
                <p key={report.id}> {report.name} </p>
            ))}
        </ul>
    </div>
  )
}

export default ReportList