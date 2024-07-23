import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Puzzle6() {
  const [answer, setAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const checkAnswer = () => {
    const correctAnswer = 'kibbled rye wrap';
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      navigate('/puzzle7');
    } else {
      setErrorMessage("tehe, that's not the answer!");
    }
  };

  return (
    <div>
      <h1>Puzzle 6</h1>
      <p>
        Clue 6: 
        <br/>
        To keep your strength and spirits high, a tasty treat, you must buy. 
        At the cafe, now you’re here, find a wrap, that's yummy and near. 
        The Chicken Satay I should think, its first ingredient, the missing link.
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

export default Puzzle6;