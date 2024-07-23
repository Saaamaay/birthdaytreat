import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Puzzle2() {
  const [answer, setAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const checkAnswer = () => {
    const correctAnswer = 'guildhall';
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      navigate('/puzzle3');
    } else {
      setErrorMessage("tehe, that's not the answer!");
    }
  };

  return (
    <div>
      <h1>Puzzle 2</h1>
      <p>
        Clue 2: 
        <br/>
        Your journey takes you to a hill that’s grand, climb to the top where views are planned. 
        Look around and take your time, find the building with a green, pointy spine.
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

export default Puzzle2;