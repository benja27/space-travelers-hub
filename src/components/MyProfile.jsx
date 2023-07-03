import React from "react";
import { useSelector } from "react-redux";
import { cancelReserve } from "../redux/rockets/rocketSlice";
import { leaveMission } from "../redux/missions/missionSlice";
import { useDispatch } from "react-redux";

function MyProfile() {
  const dispatch = useDispatch();
  const { rockets } = useSelector((data) => data.rockets);
  const { missions } = useSelector((store) => store.missions);

  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col-6">
          <h2 className="pb-3">My Missions</h2>

          {missions.filter((mission) => mission.member === true).length ===
          0 ? (
            <h3>No Missions Found</h3>
          ) : (
            missions
              .filter((mission) => mission.member === true)
              .map((mission) => (
                <div key={mission.mission_id} className="row border border-3">
                  <div className="d-flex justify-content-between py-3">
                    <h4 className="py-0"> {mission.mission_name} </h4>
                    <button onClick={()=>dispatch(leaveMission(mission.mission_id))} className="btn btn-dark" >cancel mission</button>
                  </div>
                </div>
              ))
          )}
        </div>

        <div className="col-6">
          <h2 className="pb-3">My Rockets</h2>

          <div>
            {rockets.filter((rocket) => rocket.reserved === true).length ===
            0 ? (
              <h3>No Rockets Found</h3>
            ) : (
              rockets
                .filter((rocket) => rocket.reserved === true)
                .map((rocket) => (
                  <div className="border border-3 " key={rocket.id}>
                    <div className="d-flex justify-content-between py-3 px-3">
                      <h4 className=""> {rocket.name} </h4>
                      <button
                        id={rocket.id}
                        onClick={() => dispatch(cancelReserve(rocket.id))}
                        className="btn btn-success"
                      >
                        Cancel Rocket
                      </button>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
