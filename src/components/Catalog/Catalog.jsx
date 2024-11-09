import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Catalog.scss';
import shipsData from "../../ships.json";

const Catalog = () => {
  const navigate = useNavigate();

  const [nameQuery, setNameQuery] = useState('');
  const [filteredShips, setFilteredShips] = useState(shipsData);
  const [originalOrder, setOriginalOrder] = useState(shipsData);
  const [isWeightFiltered, setIsWeightFiltered] = useState(false);

  const applyFilters = () => {
    const filtered = shipsData.filter((ship) =>
      ship.name.toLowerCase().includes(nameQuery.toLowerCase())
    );
    setFilteredShips(filtered);
    setOriginalOrder(filtered);
    setIsWeightFiltered(false);
  };

  const sortByWeight = () => {
    if (isWeightFiltered) {
      setFilteredShips(originalOrder);
      setIsWeightFiltered(false);
    } else {
      const sortedShips = [...filteredShips].sort((a, b) => b.weight - a.weight);
      setFilteredShips(sortedShips);
      setIsWeightFiltered(true);
    }
  };

  const handleNameChange = (e) => {
    setNameQuery(e.target.value);
  };

  return (
    <main className="main">
      <h1 className="mainTitle">Shop Here!</h1>
      <menu className="mainMenu">
        <div className="mainFilter">
          <input
            className="mainSort"
            type="text"
            placeholder="Search by name"
            value={nameQuery}
            onChange={handleNameChange}
          />
          <button className="mainFilterButton" onClick={sortByWeight}>
            Filter by weight
          </button>
        </div>
        <button className="mainApplyButton" onClick={applyFilters}> Apply </button>
      </menu>
      <div className="shipCards">
        {filteredShips.map((ship) => (
          <div key={ship.id} className="shipCard">
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
        ))}
      </div>
    </main>
  );
};

export default Catalog;
