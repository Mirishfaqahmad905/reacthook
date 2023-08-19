import React, { useState } from 'react';

const ArryUseState = () => {
   
     const myname=[
         {name:'ahmad', age: 21, fathername: 'mir ishfaq ahmad'},
         {name:'ahmad', age: 21, fathername: 'mir ishfaq ahmad'},
         {name:'mir', age: 12, fathername: 'mir ishfaq ahmad'}
     ];
     
    const [clear, setclear] = useState(myname);
    
    const Cleardata = () => {
        setclear([]);
    }
    
    return (
        <>
            {clear.map((item, index) => (
                <h2 key={index}>{item.name}, {item.age}, {item.fathername}</h2>
            ))}
            <button onClick={Cleardata}>clear</button>
        </>
    )
}

export default ArryUseState;
