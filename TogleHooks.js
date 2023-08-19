import React, { useState } from 'react'

const TogleHooks = () => {
     const [myname,setmyname]=useState('welcom');
   
     const Clickme=()=>{
        let va=myname;  
                 va==='welcom'? setmyname('mir'):setmyname('how are you ')
        }
     return (
    <>
       <h4>{myname}</h4>
       <button onClick={Clickme}>Click me </button>
    
    </>
  )
}

export default TogleHooks