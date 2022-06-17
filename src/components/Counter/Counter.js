import React from 'react'
import './counter.css'

const Counter = ( {max, setCounter, counter, handleAgregar} ) => {

  const handleSumar = () => {
      counter < max && setCounter(counter + 1)
  }

  const handleRestar = () => {
      counter > 1 && setCounter(counter - 1)
  }

    
    return (
      <div className='cnt-buttons'>
        
        <div className="buttons">
        <button className='increment' onClick={handleRestar}>-</button> 
        
        
          <span className=''>{counter}</span>

          <button className='decrement' onClick={handleSumar}>+</button>
        
        
        </div>
      </div>
    )
  }

  export default Counter