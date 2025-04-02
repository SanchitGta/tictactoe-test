import React, { useState } from 'react'; // Import React and useState for managing state
import './App.css';
import GameBoard from './GameBoard'; // Import GameBoard component
import GameStatus from './GameStatus.jsx'; // Import GameStatus component

const App = () => {
  const [winner, setWinner] = useState(null); // State for winner
  const resetGame = () => setWinner(null); // Function to reset the game

  return (
    <div className="game">
      <GameStatus winner={winner} onReset={resetGame} /> {/* Render GameStatus component */}
      <h1>Tic Tac Toe</h1>
      <GameBoard setWinner={setWinner} /> {/* Pass setWinner to GameBoard */}
    </div>
  );
};

export default App;
