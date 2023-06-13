import { useState } from "react";

import Board from "./Board";

const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentBoardState = history[history.length - 1];

  const handlePlay = (nextBoardState) => {
    setXIsNext(!xIsNext);
    setHistory([...history, nextBoardState])
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentBoardState} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{/* Todo */}</ol>
      </div>
    </div>
  );
}

export default Game