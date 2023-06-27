import React from "react";
import { useSelector } from "react-redux";

const MyProfile = () => {
  const { rockets } = useSelector((data) => data.rockets);

  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col-6">
          <h1>My Missions</h1>
        </div>

        <div className="col-6">
          <h1 className="pb-3">My Rockets</h1>

          <div>
            {rockets.map((item) => {
              if (item.reserved) {
                return (
                  <div key={item.id} className="row border border-3">
                    <h4 className="py-3">{item.name}</h4>
                  </div>
                );
              }else{
                return null
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
