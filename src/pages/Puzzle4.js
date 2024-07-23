import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Puzzle4() {
  const [answer, setAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const checkAnswer = () => {
    const correctAnswer = '64';
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      navigate('/puzzle5');
    } else {
      setErrorMessage("tehe, that's not the answer!");
    }
  };

  return (
    <div>
      <h1>Puzzle 4</h1>
      <p>
        Clue 4: 
        <br/>
        The famous author’s home you found, now to the next place, which is quite renowned. 
        A majestic structure, grand and tall, but how many windows sit on its west wall?
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

export default Puzzle4;