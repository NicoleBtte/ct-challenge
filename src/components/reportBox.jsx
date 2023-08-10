import React from 'react'

const ReportBox = ({creator, creationDate, imageURL}) => {
  return (
    <div className="p-2 w-1/2">
      <div className="flex w-full items-center p-4 border-cyan-300 bg-white rounded-lg">
          {imageURL && <img src={imageURL} className="h-20 rounded"/>}
          <div className="ml-8">
            <p>Fecha de creación: { creationDate }</p>
            <p>Creador: { creator.firstName + " " + creator.lastName }</p>              
          </div>
      </div>
    </div>
  )
}

export default ReportBox