import React from 'react'

const ReportBox = ({creator, creationDate, imageURL}) => {
  return (
    <div>
        <p>{ creator.firstName + " " + creator.lastName }</p>
        <p>{ creationDate }</p>
        {imageURL && <img src={imageURL}/>}
    </div>
  )
}

export default ReportBox