"use client";
import { useState } from 'react';
import React from 'react'

const Home = () => {

const [count, setCount] = useState(5)

// function handleClick () {
//   setCount(state_count +1)
//   setCount(state_count +1)
//   setCount(state_count +1)
// }

function increment() {
        setCount(count + 1)          
 }

function decrement() {
     setCount(count - 1)          
 }

  return (
    
    // <>
    //  <button onClick={increment} className='bg-blue-500 px-6 py-2' >
    //    Count: {count}
    //  </button>

    // <br/>

    // <button onClick={decrement} className='bg-red-500 px-4 py-2 mt-4' >
    //   Decrement
    // </button>
    // </>

    <>
    <button
    onClick={increment}
    className='bg-blue-500 px-6 py-2'>
      Increment
    </button>

    <button
    onClick={decrement}
    className='bg-red-500 px-4 py-2 mt-4'>
      Decrement
    </button>

    <h2 className={count >= 10 ? 'text-red-500' : 'text-blue-500'}>Count: {count} </h2>
    </>
  )
}

export default Home;