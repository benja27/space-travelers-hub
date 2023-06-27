import React from 'react'
import { useDispatch } from 'react-redux'
import { joinMission } from '../redux/missions/missionSlice'

const MissionCard = ({name, description, member}) => {

  const dispatch = useDispatch()

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
            <button onClick={()=>dispatch(joinMission())} type='button'>Join Mission</button>
            )
            }   
        </td>
      </tr>
   
  )
}

export default MissionCard
