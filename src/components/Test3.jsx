import React, { useState } from 'react'
import './Test3.css'
const Test3 = () => {

    const[count,setCount]=useState(0)
    function modify(value){
        setCount(count+value)
    }
    

  return (
    <>
    <button onClick={()=>modify(1)}>Increment By 1</button>
    <button onClick={()=>modify(2)}>Increment By 2</button>
    <button onClick={()=>modify(-1)}>Decrement By 1</button>
    <button onClick={()=>modify(-2)}>Decrement By 2</button>
    <span>{count}</span>
    </>
  )
}

export default Test3