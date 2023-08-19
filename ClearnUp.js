import React, { useState } from 'react'

const ClearnUp = () => {
      const [widthcount,setwidthcount]=useState(window.screen.width);
     const actualwidth=()=>{
         console.log('actual width ');
          setwidthcount(window.innerWidth);
     }
      React.useEffect(() => {
      window.addEventListener('resize',actualwidth)
    return(()=>{
         console.log('remove ')
        window.addEventListener('resize',actualwidth);
    })
    }, [])
    
      
     
  return (
   <>
    <h4>{widthcount}</h4>
    <h2>cleanup</h2>
   </>
  )
}

export default ClearnUp