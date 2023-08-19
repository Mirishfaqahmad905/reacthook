import React, { useState } from 'react'

const UseState_object = () => {
    const [myobject,setobject]=useState(
         {myname:'ahmad',myage:19,degree:'msc'}
    );
const Update=()=>{
     setobject({...myobject,myname:'mir'});
}
  return (
    <>
    <h1>Name {myobject.myname} age 20: degree Cs </h1>
    <button onClick={Update}>Click </button>
    </>
  )
}

export default UseState_object