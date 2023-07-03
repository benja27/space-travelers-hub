import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missionSlice';

function MissionCard({
  name, description, member, id,
}) {
  const dispatch = useDispatch();

  return (

    <tr>
      <td><b>{name}</b></td>
      <td className="col-9" style={{ fontSize: '13px' }}>{description}</td>
      <td style={{ verticalAlign: 'middle' }}>
        {
            member ? (
              <button style={{ fontSize: '10px', fontWeight: 'bold' }} className="btn btn-danger btn-md text-nowrap" type="button">Active member</button>) : (
                <button style={{ fontSize: '9px', fontWeight: 'bold' }} className="btn btn-md text-nowrap btn-dark" type="button">NOT A MEMBER</button>)
            }

      </td>
      <td style={{ verticalAlign: 'middle' }}>
        {
            member ? (

              <button style={{ fontSize: '10px', fontWeight: 'bold' }} className="btn btn-success text-white btn-outline-danger btn-md text-nowrap" onClick={() => dispatch(leaveMission(id))} type="button">Leave Mission</button>) : (
                <button style={{ fontSize: '10px', fontWeight: 'bold' }} className="btn btn-md text-nowrap btn-outline-secondary btn-primary text-white " onClick={() => dispatch(joinMission(id))} type="button">Join Mission</button>
            )
            }
      </td>
    </tr>

  );
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  member: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};
export default MissionCard;
