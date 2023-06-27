import React from 'react'
import { useDispatch } from 'react-redux'
import { joinMission, leaveMission } from '../redux/missions/missionSlice'

const MissionCard = ({name, description, member, id}) => {

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
              
            <button onClick={()=>dispatch(leaveMission(id))} type='button'>Leave Mission</button>):(
            <button onClick={()=>dispatch(joinMission(id))} type='button'>Join Mission</button>
            )
            }   
        </td>
      </tr>
   
  )
}

export default MissionCard
