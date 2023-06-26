
import MissionCard from './MissionCard'

const Missions = () => {

  return (
    <div className='container'>
 <table class="table table-bordered">
    <thead>
      <tr>
        <th>Mission</th>
        <th className='col-9'>Description</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    <MissionCard/>  
    </tbody>
  </table>

      
    </div>
  )
}

export default Missions
