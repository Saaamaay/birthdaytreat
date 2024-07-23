import React from 'react';
import './Congratulations.css'; // Ensure you have a separate CSS file for styling

function Congratulations() {
  return (
    <div className="congrats-container">
      <h1 className="title">Congratulations!</h1>
      <div className="gif-container">
        <iframe
          src="https://giphy.com/embed/d5ZX6ifuesoS0OU2cJ"
          width="480"
          height="374"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
          title="Congratulations GIF"
        ></iframe>
      </div>
      <p className="congrats-message">You have completed Molly's Birthday Treasure Hunt!</p>
    </div>
  );
}

export default Congratulations;