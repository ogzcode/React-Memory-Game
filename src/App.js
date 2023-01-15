import './App.css';
import React, { useEffect, useState } from 'react';
import data from "./utils/data";
import getRandomImage from './utils/getRandomImage';
import createBoard from "./utils/createBoard";
import Clock from './component/Clock';
import Card from './component/Card';


function App() {
  const [board, setBoard] = useState(createBoard(getRandomImage(data), data));
  const [firstSelect, setFirstSelect] = useState(null);
  const [secondSelect, setSecondSelect] = useState(null);
  const [moves, setMoves] = useState(0);

  const handleSelect = (i) => {
    if (firstSelect !== null && secondSelect !== null) {
      return;
    }

    if (board[i].isOpen){
      return;
    }

    if (firstSelect === null) {
      setFirstSelect(i);
    }
    else if (!secondSelect) {
      setSecondSelect(i);
      setMoves(moves + 1);
    }

    let boardCopy = board.slice();
    boardCopy[i].isOpen = true;
    setBoard(boardCopy);
  };

  const handleRestart = () => {
    setBoard(createBoard(getRandomImage(data), data));
    setFirstSelect(null);
    setSecondSelect(null);
    setMoves(0);
  };

  useEffect(() => {
    if (firstSelect !== null && secondSelect !== null) {
      if (board[firstSelect].image === board[secondSelect].image) {
        setFirstSelect(null);
        setSecondSelect(null);
      }
      else {
        let timeOut = setTimeout(() => {
          let boardCopy = board.slice();
          boardCopy[firstSelect].isOpen = false;
          boardCopy[secondSelect].isOpen = false;
          setBoard(boardCopy);
          setFirstSelect(null);
          setSecondSelect(null);
        }, 1000);

        return () => clearTimeout(timeOut);
      }
    }
  });

  return (
    <div className='App'>
      <div className='header'>
        <p>Moves: {moves}</p>
        <Clock />
      </div>
      <div className='board'>
        {
          board.map((d, i) =>
            <Card image={d.image} active={d.isOpen} index={d.index} key={i} onClick={handleSelect} />
          )
        }
      </div>
      <div style={{textAlign: "center"}}>
      <button className='restart' onClick={() => handleRestart()}>Restart</button>
      </div>
    </div>
  );
}

export default App;
