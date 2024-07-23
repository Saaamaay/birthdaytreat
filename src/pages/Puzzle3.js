import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Puzzle3() {
  const [answer, setAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const checkAnswer = () => {
    const correctAnswer = '8';
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      navigate('/puzzle4');
    } else {
      setErrorMessage("tehe, that's not the answer!");
    }
  };

  return (
    <div>
      <h1>Puzzle 3</h1>
      <p>
        Clue 3: 
        <br/>
        Now your quest takes you where stories start, where tales and books fill up their cart. 
        Seek the home of a famed author, the number of which will be your answer.
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

export default Puzzle3;