import React from 'react'

const MissionCard = ({name, description}) => {
    const member = false
    const join = false
  return (
 
      <tr>
        <td>{name}</td>
        <td className='col-9'>{description}</td>
        <td>
            {
            member?(
            <button type='button'>Active member</button>):(
            <button type='button'>NOT A MEMBER</button>)
            }           
            
        </td>
        <td>
        {
            join?(
            <button type='button'>Join Mission</button>):(
            <button type='button'>Leave Mission</button>)
            }   
        </td>
      </tr>
   
  )
}

export default MissionCard
