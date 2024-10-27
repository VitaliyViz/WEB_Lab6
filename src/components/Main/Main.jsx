import React from 'react';
import './Main.scss';
import shipsData from "../../ships.json"

const Main = () => {
  return (
    <main className="main">
        <h1 className="mainTitle">Shop Here!</h1>
        <div className="shipCards">
            {shipsData.map((ship) => (
                <div key={ship.id} className="shipCard">
                    <img src={ship.image} alt={`${ship.name} image`} className="shipImage" />
                    <h2 className="shipName">{ship.name}</h2>
                    <p className="shipInfo">Weight: {ship.weight}</p>
                    <p className="shipInfo">Passengers: {ship.passengers}</p>
                    <p className="shipInfo">Capacity: {ship.capacity}</p>
                    <p className="shipPrice">{ship.price}</p>
                </div>
            ))}
        </div>
    </main>
  );
};

export default Main;
