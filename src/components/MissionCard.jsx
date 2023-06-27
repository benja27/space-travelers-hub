import React from 'react'

const MissionCard = ({name, description, member}) => {

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
            member?(
              
            <button type='button'>Leave Mission</button>):(
            <button type='button'>Join Mission</button>
            )
            }   
        </td>
      </tr>
   
  )
}

export default MissionCard
