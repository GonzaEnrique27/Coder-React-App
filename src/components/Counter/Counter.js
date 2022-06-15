import React from 'react'
import { useState } from 'react'
import './counter.css'

export const Counter = () => {

   
    const [counter, setCounter] = useState(1)
   
    
    const handleClick1 = () => {
      setCounter(counter + 1)
    }
     
    const handleClick2 = () => {
    setCounter(counter - 1)
    }
    
    return (
      <div className='cnt-buttons'>
        
        <div className="buttons">
        <button className='decrement' onClick={handleClick2}>-</button>
        
          <span className=''>{counter}</span>
        
        <button className='increment' onClick={handleClick1}>+</button> 
        </div>
      </div>
    )
  }