import React, { useState } from 'react'

const Custome_hook = () => {
    const [count,setcount]=useState(0);
     console.log('useefect hooks in react js ');

  return (
         <>
          
         <div className='useefect'>
             <h2>{count}</h2>
            <h2>Click Me</h2>
            <button onClick={()=>setcount(count+1)}>Click Me </button>
         </div>
         </>
  )
}

export default Custome_hook