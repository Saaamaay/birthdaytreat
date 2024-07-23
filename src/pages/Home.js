import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure you have a separate CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <h1 className="title">Molly's Birthday Treasure Hunt!</h1>
      <div className="gif-container">
        <iframe
          src="https://giphy.com/embed/g5R9dok94mrIvplmZd"
          width="480"
          height="398"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
          title="Happy Birthday GIF"
        ></iframe>
      </div>
      <Link to="/puzzle1">
        <button className="start-button">Start</button>
      </Link>
    </div>
  );
}

export default Home;