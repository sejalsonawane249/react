import React, { useState } from 'react'
import './Test1.css'
function Test1() {

    //let count=0
    const [count,setCount]= useState(0) 
    const [name,setName]=useState('Sejal')

    function increment()
    {
        setCount(count+1)
        //console.log(count)
    }
    
  return (
    <>
    <button onClick={increment}>  Increment </button>
    <span> {count}</span>
    <span>{count%2==1?'sejal':'upGrad'}</span>

    </>
  )
}

export default Test1