import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Puzzle1() {
  const [answer, setAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const checkAnswer = () => {
    const correctAnswer = 'Camera';
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      navigate('/puzzle2');
    } else {
      setErrorMessage("tehe, that's not the answer!");
    }
  };

  return (
    <div>
      <h1>Puzzle 1</h1>
      <p>
        Clue 1: 
        <br/>
        Start your quest with a view that’s grand, where cyclists rest and caffeine’s in demand. 
        What image do you see on the far right of my sign? For that is the answer to the very first rhyme…
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

export default Puzzle1;