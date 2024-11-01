import React from 'react';
import './Catalog.scss';
import shipsData from "../../ships.json"

const Catalog = () => {
  return (
    <main className="main">
        <h1 className="mainTitle">Shop Here!</h1>
        <menu className='mainMenu'>
          <filter className='mainFilter'>
            <input className='mainSort' type="text" placeholder='Search by name'/>
            <input className='mainSort' type="number" placeholder='Search by weight' />
          </filter>
          <button className='mainApplyButton'>Apply</button>
        </menu>
        <div className="shipCards">
            {shipsData.map((ship) => (
                <div key={ship.id} className="shipCard">
                    <img src={ship.image} alt={`${ship.name} image`} className="shipImage" />
                    <h2 className="shipName">{ship.name}</h2>
                    <p className="shipInfo">Weight: {ship.weight}</p>
                    <p className="shipInfo">Passengers: {ship.passengers}</p>
                    <p className="shipInfo">Capacity: {ship.capacity}</p>
                    <p className="shipPrice">{ship.price}</p>
                    <button className='shipMoreInfo'>View more</button>
                </div>
            ))}
        </div>
    </main>
  );
};

export default Catalog;
