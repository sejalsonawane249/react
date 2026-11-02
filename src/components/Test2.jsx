import React, { useState } from 'react'
import './Test2.css'
const Test2 = () => {

    const[count,setCount]=useState(0)
    function incrementBy1(){
        setCount(count+1)
    }
    function incrementBy2(){
        setCount(count+2)
    }
    function decrementBy1(){
        setCount(count-1)
    }
    function decrementBy2(){
        setCount(count-2)
    }

  return (
    <>
    <button onClick={incrementBy1}>Increment By 1</button>
    <button onClick={incrementBy2}>Increment By 2</button>
    <button onClick={decrementBy1}>Decrement By 1</button>
    <button onClick={decrementBy2}>Decrement By 2</button>
    <span>{count}</span>
    </>
  )
}

export default Test2