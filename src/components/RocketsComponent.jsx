import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from './Rocket';
import { fetchRockets } from '../redux/rockets/rocketSlice';

function Rockets() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const { rockets, isLoading } = useSelector((data) => data.rockets);

  if (isLoading) {
    return (
      <div className="container">
        <h2 className="text-center pt-5"> Loading...</h2>
      </div>
    );
  }

  return (
    <div className="container pt-3">
      <div className="row">
        {rockets.map((rocket) => (
          <Rocket
            key={Math.random()}
            id={rocket.id}
            name={rocket.name}
            img={rocket.img}
            description={rocket.description}
            reserved={rocket.reserved}
          />
        ))}
      </div>
    </div>
  );
}

export default Rockets;
