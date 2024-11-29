import React, { useState, useEffect } from 'react';
import '../Home/Home.scss';
import HomeShipCard from '../HomeShipCard/HomeShipCard';
import axios from 'axios';

const Home = () => {
  const [ships, setShips] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchShips = async () => {
      try {
        const response = await axios.get('http://localhost:5000/ships');
        const data = response.data;
        setShips(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };
    fetchShips();
  }, []);

  const displayedShips = ships.slice(0, visibleCount);

  const toggleShowMore = () => {
    if (expanded) {
      setVisibleCount(3);
      setExpanded(false);
    } else {
      setVisibleCount(ships.length);
      setExpanded(true);
    }
  };

  if (loading) {
    return <div className="loader"></div>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <main className="home">
      <div className="homeHeader">
        <div className="homeHeaderText">
          <h1>Welcome to SailBay</h1>
          <p>
            Explore our last collection of unique ships, crafted for every sea
            adventure. Discover, compare, and find the perfect vessel for your
            journey.
          </p>
        </div>
      </div>

      <div className="homeTiles">
        {displayedShips.map((ship) => (
          <HomeShipCard key={ship._id} ship={ship} />
        ))}
      </div>

      <button className="viewMoreButton" onClick={toggleShowMore}>
        {expanded ? 'Show less' : 'View more'}
      </button>
    </main>
  );
};

export default Home;
