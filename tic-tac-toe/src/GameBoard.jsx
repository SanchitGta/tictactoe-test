import React, { useState } from 'react';
import './App.css'; // Assuming styles are defined in App.css

const GameBoard = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const handleCellClick = (index) => {
    if (board[index]) return; // Ignore if cell is already filled

    const newBoard = board.slice();
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'); // Switch player
  };

  return (
    <div className="game-board">
      {board.map((cell, index) => (
        <div
          key={index}
          className="cell"
          onClick={() => handleCellClick(index)}
        >
          {cell}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
