import React from 'react';
import { useParams } from 'react-router-dom';
import shipsData from "../../ships.json";
import './Item.scss';

const Item = () => {
  const { id } = useParams();
  const ship = shipsData.find((ship) => ship.id === parseInt(id));

  if (!ship) return <p>Ship not found</p>;

  return (
    <div className="itemPage">
      <h1>{ship.name}</h1>
      <img className='itemImage' src={ship.image} alt={`${ship.name} image`} />
      <p>Weight: {ship.weight}k tons</p>
      <p>Passengers: {ship.passengers}</p>
      <p>Capacity: {ship.capacity}</p>
      <p>Price: {ship.price}</p>
      <p>Description: {ship.description}</p>
    </div>
  );
};

export default Item;
