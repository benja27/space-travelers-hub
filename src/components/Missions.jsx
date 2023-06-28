import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MissionCard from './MissionCard';
import { fetchMissions } from '../redux/missions/missionSlice';

function Missions() {
  const { missions, isLoading } = useSelector((store) => store.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  if (isLoading) {
    return (
      <button type="button" className="btn btn-primary">
        <span className="spinner-border spinner-border-lg" />
      </button>
    );
  }
  return (
    <div className="container pt-3">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Mission</th>
            <th className="col-9">Description</th>
            <th>Status</th>
            {/* <th />  */}
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <MissionCard
              name={mission.mission_name}
              description={mission.description}
              member={mission.member}
              id={mission.mission_id}
              key={mission.mission_id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Missions;
