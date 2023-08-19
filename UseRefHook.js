import React, { useRef, useState } from 'react'

const UseRefHook = () => {
   const [userefstate,setuserestate]=useState();
  const useref=useRef('');
   const SubmitForm=(e)=>{
     e.preventDefault();
        // setuserestate(useref.current.value);
        
         if(userefstate==='' ? alert('please fill the data '):setuserestate(useref.current.value));
         console.log(userefstate)
        }   
  return (
      <>
 <form onSubmit={SubmitForm}>

 <h2>Uncontrolled compoenent </h2>
       <input type='text' name='' id='name' ref={useref}/>
        <button>Submit</button>
 </form>
      </>
  )
}

export default UseRefHook