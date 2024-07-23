import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Puzzle8() {
  const [answer, setAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const checkAnswer = () => {
    const correctAnswer = 'amseicoapsr';
    const normalize = (str) => str.toLowerCase().split('').sort().join('');
    
    if (normalize(answer) === normalize(correctAnswer)) {
      navigate('/puzzle9');
    } else {
      setErrorMessage("tehe, that's not the answer!");
    }
  };

  return (
    <div>
      <h1>Puzzle 8</h1>
      <p>
        Clue 8: 
        <br/>
        Your quest nears its end, and magic is at hand, I hope you know your spells and charms better than your favorite band. 
        Twenty spells in the fourth movie you’ll find, each cast a number of times, odd or even please don't guess, you're on holiday and that will only cause stress. 
        For odd counts, take the first letter bold, for even counts, the last letter you’ll hold. 
        Gather these letters and form them right, the answer to proceed is within your sight.
      </p>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={checkAnswer}>Submit</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default Puzzle8;