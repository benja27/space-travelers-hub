import React from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  const { rockets } = useSelector((data) => data.rockets);
  const { missions } = useSelector((store) => store.missions);

  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col-6">
          <h2 className="pb-3">My Missions</h2>
          {
            missions.map((mission) => {
              if (mission.member) {
                return (

                  <div key={mission.mission_id} className="row border border-3">
                    <h4 className="py-3">{mission.mission_name}</h4>
                  </div>
                );
              }
              return null;
            })
          }
        </div>

        <div className="col-6">
          <h2 className="pb-3">My Rockets</h2>

          <div>
            {rockets.map((item) => {
              if (item.reserved) {
                return (
                  <div key={item.id} className="row border border-3">
                    <h4 className="py-3">{item.name}</h4>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
