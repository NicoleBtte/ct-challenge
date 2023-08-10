import React from 'react'
import { useQuery } from 'react-query'
import { getReports, getReportsByMission } from '../api/axiosClient'
import ReportBox from './reportBox'

const ReportList = ({ missionId = '2' }) => {
    //const {data: reports, isLoading } = useQuery('reports', () => getReportsByMission(missionId))
    const { data: reports, isLoading } = useQuery('reports', getReports)
    console.log("R", reports)

    if(isLoading){
        return <p> Loading reports... </p>
    }

  return (
    <div>
        <h2>Reports</h2>
        { reports && reports.map((report) => (
          <ReportBox
            creator={report.creator}
            creationDate={report.created}
            imageURL={report.mainMedia && report.mainMedia.urls.or}
          />
        ))}
    </div>
  )
}

export default ReportList