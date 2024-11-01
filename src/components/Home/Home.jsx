import React from 'react';
import '../Home/Home.scss';
import placeholderImage from '../../assets/shipLogo.webp'; // Update this path based on where you store images

const Home = () => {
  return (
    <main className="home">
      <div className="homeHeader">
        <div className="homeHeaderText">
          <h1>Welcome to SailBay</h1>
          <p>Explore our last collection of unique ships, crafted for every sea adventure. Discover, compare, and find the perfect vessel for your journey.</p>
        </div>
      </div>

      <div className="homeTiles">
        {[1, 2, 3].map((ship) => (
          <div key={ship.id} className="homeTile">
            <img src={"https://images.unsplash.com/photo-1527685609591-44b0aef2400b?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={`Tile ${ship}`} className="homeTileImage" />
            <h2>Ship №{ship}</h2>
            <p>Best ship ever</p>
          </div>
        ))}
      </div>

      <button className="viewMoreButton">View more</button>
    </main>
  );
};

export default Home;
