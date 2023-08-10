import React from 'react'
import { useQuery } from 'react-query'
import { getReports, getReportsByMission } from '../api/axiosClient'
import ReportBox from './reportBox'

const ReportList = ({ missionId }) => {
    const {data: missionReports, isLoading: isLoadingMissionReports } = useQuery(['reports', missionId], () => getReportsByMission(missionId), {
      enabled: !!missionId,
    })
    const { data: allReports, isLoading: isLoadingAllReports } = useQuery('reports', getReports)

    if(isLoadingAllReports || isLoadingMissionReports){
        return <p> Loading reports... </p>
    }

    const reportToDisplay = missionId? missionReports : allReports;

  return (
    <div className="justify-center mt-8 items-center flex flex-col">
        { reportToDisplay && reportToDisplay.map((report) => (
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