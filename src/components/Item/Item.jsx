import React from 'react';
import { useParams } from 'react-router-dom';
import shipsData from "../../ships.json";
import './Item.scss';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/CartSlice';
const Item = () => {
  const { id } = useParams();
  const ship = shipsData.find((ship) => ship.id === parseInt(id));

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItem({ ...ship, quantity: 1 }));
  };
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
      <button className='AddToCartButton' onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Item;
