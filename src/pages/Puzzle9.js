import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Puzzle9() {
  const [answer, setAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const checkAnswer = () => {
    const correctAnswer = 'airspaces';
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      navigate('/congratulations');
    } else {
      setErrorMessage("tehe, that's not the answer!");
    }
  };

  return (
    <div className="container">
      <h1>Puzzle 9</h1>
      <p>
        Clue 9: 
        <br/>
        Planes fly through me, yet I’m unseen,
        I span the skies, vast and serene.
        I’m divided, charted, and often traced,
        Keeping journeys safe in my embrace.
        With no walls or floors, I’m open and free,
        What am I, where aircraft navigate with glee?
        <br/><br/>
        … just remember there's multiple of me ;)
      </p>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="form-control"
      />
      <button className="btn btn-primary mt-2" onClick={checkAnswer}>Submit</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default Puzzle9;