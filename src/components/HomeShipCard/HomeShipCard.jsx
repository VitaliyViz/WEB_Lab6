import React from 'react';
import './HomeShipCard.scss';

const HomeShipCard = ({ ship }) => {
  return (
    <div className="homeTile">
      <img
        src={ ship.image }
        alt={`Tile ${ship.name}`}
        className="homeTileImage"
      />
      <h2>Ship №{ship.id}</h2>
      <p>{ship.name}</p>
    </div>
  );
};

export default HomeShipCard;
