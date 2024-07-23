import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Puzzle5() {
  const [answer, setAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const checkAnswer = () => {
    const correctAnswer = 'pret';
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      navigate('/puzzle6');
    } else {
      setErrorMessage("tehe, that's not the answer!");
    }
  };

  return (
    <div>
      <h1>Puzzle 5</h1>
      <p>
        Clue 5: 
        <br/>
        From history grand to a modern delight, a coffee or pastry would do just right. 
        Somewhere they might be ready to eat, where they serve you and say ‘bon appetit’
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

export default Puzzle5;