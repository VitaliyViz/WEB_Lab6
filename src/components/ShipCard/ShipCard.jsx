import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ShipCard.scss';

const ShipCard = ({ ship }) => {
  const navigate = useNavigate();
  return (
    <div className="shipCard">
      <img src={ship.image} alt={`${ship.name} image`} className="shipImage" />
      <h2 className="shipName">{ship.name}</h2>
      <p className="shipInfo">Weight: {ship.weight}k tons</p>
      <p className="shipInfo">Capacity: {ship.capacity}</p>
      <p className="shipPrice">{ship.price}</p>
      <button
        className="shipMoreInfo"
        onClick={() => navigate(`/item/${ship.id}`)}
      >
        View more
      </button>
    </div>
  );
};

export default ShipCard;
