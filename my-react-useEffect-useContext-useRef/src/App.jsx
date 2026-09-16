import { useState, useEffect, useRef, useContext } from 'react'
import ContextA from './ContextA';
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('green');
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(()=>{
    document.title = `Count: ${count} ${color} ${width} x ${height}`;
  },[count,color,width,height])

  useEffect(()=>{
    window.addEventListener("resize",handleResize);
    console.log("event listener added");
    
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("event listener removed");
    };
    
  },[]);

  function handleResize(){
    console.log("resize fired!");
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

  }

  function addCount(){
    setCount(c=> c+1);
  }

  function subCount(){
    setCount(c=> c-1);
  }

  function changeColor(){
    setColor(c=> c=== 'green'? 'red':'green');
  }

  return (
    <div style={{textAlign:'center'}}>
      <h1 style={{color:color}}>{count}</h1>
      <button onClick={addCount}>Add</button>
      <button onClick={subCount}>Substract</button>
      <button onClick={changeColor}>Change color</button>

       <ResizeComp width={width} height={height}/>

       <ContextA />
    </div>
   
  )
}

function ResizeComp(props){
  return (
    <div>
      <p>Window Width: {props.width}px</p>
      <p>Window Height: {props.height}px</p>
    </div>
  )
}


