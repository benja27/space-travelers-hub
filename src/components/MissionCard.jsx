import React from 'react'

const MissionCard = ({name, description}) => {
  return (
 
      <tr>
        <td>{name}</td>
        <td className='col-9'>{description}</td>
        <td></td>
        <td></td>
      </tr>
   
  )
}

export default MissionCard
