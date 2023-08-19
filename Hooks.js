 import React, { useState } from 'react'
 
 const Hooks = () => {
  const [initialvalue,setinitialvlaue]=useState('mir ishfaq ahmad');
   const [store,setstore]=useState();
   const value='mir ishfaq ahmad ';
   const changevalue=()=>{
     setstore(value);
   }
   return (
     <div>

              <h2>{store}</h2>
           <button onClick={changevalue}>Change</button>
     </div>
   )
 }
 
 export default Hooks