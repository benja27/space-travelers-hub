import React from 'react'
import { useDispatch } from 'react-redux'
import { joinMission, leaveMission } from '../redux/missions/missionSlice'

const MissionCard = ({name, description, member, id}) => {

  const dispatch = useDispatch()

  return (
 
      <tr>
        <td><b>{name}</b></td>
        <td className='col-9' style={{fontSize: '13px'}}>{description}</td>
        <td style={{display: 'block', margin: 'auto'}}>
            {
            member?(
            <button style={{fontSize: '10px', fontWeight: 'bold'}} className='btn btn-success btn-sm text-nowrap' type='button'>Active member</button>):(
            <button style={{fontSize: '9px', fontWeight: 'bold'}} className='btn btn-sm text-nowrap btn-secondary' type='button'>NOT A MEMBER</button>)
            }           
            
        </td>
        <td style={{margin: "auto"}}>
        {
            member?(
              
            <button style={{fontSize: '10px', fontWeight: 'bold'}} className="btn btn-outline-danger btn-sm text-nowrap"  onClick={()=>dispatch(leaveMission(id))} type='button'>Leave Mission</button>):(
            <button style={{fontSize: '10px', fontWeight: 'bold'}} className='btn btn-sm text-nowrap btn-outline-secondary' onClick={()=>dispatch(joinMission(id))} type='button'>Join Mission</button>
            )
            }   
        </td>
      </tr>
   
  )
}

export default MissionCard
