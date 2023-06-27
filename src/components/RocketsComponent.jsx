import React from "react";
import { useSelector } from "react-redux";
import Rocket from "./Rocket";

function Rockets() {
  const { rockets, isLoading } = useSelector((data) => data.rockets);

  if (isLoading) {
    return (
      <div className="container">
        <h2 className="text-center pt-5" > Loading...</h2>
      </div>
    );
  }

  return (
    <div className="container pt-3">
      <div className="row" >
        {rockets.map((rocket, index) => {
          return <Rocket key={index} {...rocket}></Rocket>;
        })}
      </div>
    </div>
  );
}

export default Rockets;
