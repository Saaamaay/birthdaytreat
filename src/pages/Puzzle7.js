import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Puzzle7() {
  const [answer, setAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const checkAnswer = () => {
    const correctAnswer = 'i love you angel';
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      navigate('/puzzle8');
    } else {
      setErrorMessage("tehe, that's not the answer!");
    }
  };

  return (
    <div>
      <h1>Puzzle 7</h1>
      <p>
        Clue 7: 
        <br/>
        Now go with your love but keep him near, then find the bench where your love became clear. 
        Kiss them there and you will find, the answer whispered in love entwined.
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

export default Puzzle7;