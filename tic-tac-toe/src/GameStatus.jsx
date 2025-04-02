import React from 'react';
import './GameStatus.css'; // Importing CSS for styling

const GameStatus = ({ winner, onReset }) => {
  return (
    <div className="game-status">
      {winner ? (
        <h2>Winner: {winner}</h2>
      ) : (
        <h2>Next Player: X</h2>
      )}
      <button onClick={onReset}>Reset Game</button>
    </div>
  );
};

export default GameStatus;
