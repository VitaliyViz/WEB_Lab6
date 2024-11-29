import React, { useState, useEffect } from 'react';
import ShipCard from '../ShipCard/ShipCard';
import './Catalog.scss';
import axios from 'axios';

const Catalog = () => {
  const [ships, setShips] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nameQuery, setNameQuery] = useState('');
  const [isWeightFiltered, setIsWeightFiltered] = useState(false);

  const [filterValue, setFilterValue] = useState({
    name: '',
    sortByWeight: false
  })

  useEffect(() => {
    const fetchShips = async () => {
      try {
        const response = await axios.get('http://localhost:5000/ships', {
          params: {
            name: filterValue.name,
            sortByWeight: filterValue.sortByWeight ? "true" : "false"
          }
        });
        const data = response.data;

        setShips(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };
    fetchShips();
  }, [filterValue]);

  console.log(ships)

  const applyFilters = () => {
    setFilterValue({
      name: nameQuery,
      sortByWeight: isWeightFiltered
    })
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
          <label htmlFor="sortShipsByWeightCheckbox">Sort by weight</label>
          <input type="checkbox" id="sortShipsByWeightCheckbox" 
                 checked={isWeightFiltered} 
                 onChange={() => setIsWeightFiltered(!isWeightFiltered)}
                 />
        </div>
        <button className="mainApplyButton" onClick={applyFilters}>
          Apply
        </button>
      </menu>
      <div className="shipCards">
        {loading ? (
          <div className="loader"></div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          ships.map((ship) => <ShipCard key={ship._id} ship={ship} />)
        )}
      </div>
    </main>
  );
};1

export default Catalog;