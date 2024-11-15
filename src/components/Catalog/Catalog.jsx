import React, { useState, useEffect } from 'react';
import ShipCard from '../ShipCard/ShipCard'; // Імпорт нового компонента
import './Catalog.scss';

const Catalog = () => {
  const [ships, setShips] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nameQuery, setNameQuery] = useState('');
  const [filteredShips, setFilteredShips] = useState([]);
  const [originalOrder, setOriginalOrder] = useState([]);
  const [isWeightFiltered, setIsWeightFiltered] = useState(false);

  useEffect(() => {
    const fetchShips = async () => {
      try {
        const response = await fetch('http://localhost:5000/ships');
        if (!response.ok) {
          throw new Error('Failed to fetch ships');
        }
        const data = await response.json();
        setShips(data);
        setFilteredShips(data);
        setOriginalOrder(data);
      } catch (error) {
        setError(error.message);
      } finally {
        // setLoading(false);
        setTimeout(() => setLoading(false), 1500);
      }
    };
    fetchShips();
  }, []);

  const applyFilters = () => {
    const filtered = ships.filter((ship) =>
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
          filteredShips.map((ship) => <ShipCard key={ship.id} ship={ship} />)
        )}
      </div>
    </main>
  );
};

export default Catalog;
