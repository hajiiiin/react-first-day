import React from 'react';

function Box(props) {
  const clickMe = ()=>{
    count += 1;
    alert(count)
    
  }
  return (
    <div className="box">
      Box {props.num} <br></br>
      {props.name} <br></br>
      <button onClick={clickMe}>❤️</button>
    </div>
  )
}

export default Box