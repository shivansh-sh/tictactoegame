import { useState } from 'react'
import './App.css'
import Block from './components/block'

function App() {
 const [position, setPosition] = useState(Array(9).fill(null));
  // turns means either its of x or 0
 const [currentTurn, setCurrentTurn] = useState("X");
 const [winningMsg, setWinningMsg] = useState("");

 const checkWhoWon = (position : any[]) => {
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for(let i=0; i< win.length; i++){
    const [a, b, c] = win[i];
    if(position[a]!== null && position[a] === position[b]&& position[a] === position[c]) return true;
  }
    return false;
 }

  const handleOnClick = (index : number) => {
    const positionCopy = Array.from(position);

    // to prevent the overwrite of x or o 
    if(positionCopy[index]!== null) return;

    // lets say you are first position and we have x on it  
    positionCopy[index] = currentTurn;
    setPosition(positionCopy);


    // winning logic implemented here 
    const win = checkWhoWon(positionCopy);
    if(win){
      setWinningMsg(`${currentTurn} wins`);
    }else if(!positionCopy.includes(null)){
      setWinningMsg(`Its a draw`)
    }

    setCurrentTurn(currentTurn === "X" ? "O" : "X");

  
  }
  console.log(position);
  return (
    
    <div className='board'>
    <h1>TIC TAC TOE</h1>
      <div className='row row1'>
        <Block onclick={() => handleOnClick(0)} value={position[0]}/>
        <span className='rowmid'>
        <Block onclick={() => handleOnClick(1)} value={position[1]}/>
        </span>
        <Block onclick={() => handleOnClick(2)} value={position[2]}/>
      </div>
      <div className='row row2'>
        <Block onclick={() => handleOnClick(3)} value={position[3]}/>
        <span className='rowmid'>
        <Block onclick={() => handleOnClick(4)} value={position[4]}/>
        </span>
        <Block onclick={() => handleOnClick(5)} value={position[5]}/>
      </div> <div className='row row3'>
        <Block onclick={() => handleOnClick(6)} value={position[6]}/>
        <span className='rowmid'>
        <Block onclick={() => handleOnClick(7)} value={position[7]}/>
        </span>
        <Block onclick={() => handleOnClick(8)} value={position[8]}/>
      </div>
      {winningMsg && 
      <>
      <h2>
        {winningMsg}
      </h2>
      <button onClick={() =>window.location.reload()}>Play again</button>
      </>
      }
     
    </div>
    
  )
}

export default App
