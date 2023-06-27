import React from 'react'
import MissionCard from './MissionCard'
import { useSelector } from 'react-redux'

function Missions() {
  const {missions} = useSelector((store)=>store.missions)
    
  return (
    <div className='container pt-3' >
         <table className="table table-bordered table-striped">
    <thead>
      <tr>
        <th>Mission</th>
        <th className='col-9'>Description</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
            missions.map((mission)=>(
                <MissionCard name={mission.mission_name} description={mission.description} key={mission.mission_id}/>
            ))
       
}
</tbody>
  </table>
    </div>
  )
}

export default Missions