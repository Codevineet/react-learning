import React from 'react'
import { useState } from 'react';



const Counter = () => {

let [count, setCount] = useState(0);
  let incCount = () =>{ setCount(count+1);}
  let decCount = () =>{
    if(count != 0){setCount(count-1);}
    else{
      alert('Value cannot be negative');
      setCount(0);
    }
  }

  let countByFive = () =>{setCount(count+5)}
  
  return (
      <div>
      <h1 className='m-10 p-10 h-40 w-40 bg-blue-400 flex justify-center items-center font-semibold font text-8xl text-white'>{count}</h1>
      <button onClick={incCount} className='px-8 py-3 m-2 bg-gray-400 rounded-2xl font-medium'>Increase</button>
      <button onClick={decCount} className='px-8 py-3 m-2 bg-gray-400 rounded-2xl font-medium'>Decrease</button>
      <button onClick={countByFive} className='px-8 py-3 m-2 bg-gray-400 rounded-2xl font-medium'>Jump by 5</button>


    </div>
  )
}

export default Counter