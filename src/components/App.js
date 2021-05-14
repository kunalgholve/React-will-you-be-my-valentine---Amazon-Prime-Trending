import React, {Component, useState} from "react";
import '../styles/App.css';

const App = ({slides}) => {
  let len=slides.length;

  const[ind,setInd]=useState(0);

  return (
    <>
      <h1 data-testid="title">{slides[ind].title}</h1>
      <p data-testid="text">{slides[ind].text}</p>
      <button type="button" data-testid="button-next" disabled={ind===len-1} onClick={()=>setInd(ind+1)}>Next</button>
      <button type="button" data-testid="button-prev" disabled={ind===0} onClick={()=>setInd(ind-1)}>Prev</button>
      <button type="button" data-testid="button-restart" disabled={ind===0} onClick={()=>setInd(0)}>Restart</button>
     
    </>
  )
}



export default App;
