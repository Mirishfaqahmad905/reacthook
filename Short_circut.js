import React, { useState } from 'react'

const Short_circut = () => {
     const [demo,setdeomo]=useState('');
  return (
    <>
     <h3 className='style'> {demo || <> <h2>its are very must </h2></>} </h3>
     <h4 className='style'> {demo && 'ishfaq'} </h4>
     {/* <h3 className='style'>Short Circut Evalution </h3> */}
    </>
  )
}

export default Short_circut