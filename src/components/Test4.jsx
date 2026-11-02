import React, { useState } from 'react'
import './Test3.css'
import Button from './Button'

const Test4 = () => {

    const[count,setCount]=useState(0)
    function modify(value){
        setCount(count+value)
    }
    

  return (
    <>
  
    <Button text="Increment By 1" handleClick={()=>modify(1)}/>
     <Button text="Increment By 2" handleClick={()=>modify(2)}/>
       <Button text="Decrement By 1" handleClick={()=>modify(-1)}/>
       <Button text="Decrement By 2" handleClick={()=>modify(-2)}/>
    <span>{count}</span>
    </>
  )
}

export default Test4