import './App.css'
import Box from "./Box"
import React, { useState } from 'react';

export default function App() {
  let count = 0;
  const [count2, setCount2] = useState(0)
  const increase = () => {
    count = count + 1;
    setCount2(count2 + 1)
    console.log(count); 
    console.log("count2 : ", count2); //비동기적임 -> 함수가 끝난 뒤 반영됨
  }
  return (
    <main>
      <div>{count}</div>
      <div>state:{count2}</div>
      <button onClick={increase}>❤️</button>
    </main>
  )
}
