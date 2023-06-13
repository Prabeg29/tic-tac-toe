import { useState } from "react";

import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentBoardState = history[currentMove];

  const handlePlay = (nextBoardState) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextBoardState]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpToMove = move => {
    setCurrentMove(move);
  };

  const moves = history.map((boardState, move) => {
    let description = move === 0 ? `Go to game start` : `Go to move #${move}`;
    return (
      <li key={move}>
        <button onClick={() => jumpToMove(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentBoardState} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game