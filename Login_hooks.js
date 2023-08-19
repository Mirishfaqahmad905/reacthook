import React, { useState } from 'react'

const Login_hooks = () => {
     const [email,setemail]=useState();
      const [pass,setpass]=useState();
       const [entry,setnewentry]=useState([]);
        
     const ChangeHandler=(e)=>{  }     
      const SubmiForm=(e)=>{
         e.preventDefault();
          if(email && pass){

          
         const formdata={ email:email,pass:pass};
         setnewentry([...entry,formdata]);
          console.log(entry);
        
           
      }
      setemail('');
      setpass('');
    }
  return (
 <>
   <form  action=''  onSubmit={SubmiForm}>
    
     <div>
         <label htmlFor='email'>email</label>
         <input type='email' name='email'value={email} onChange={((e)=>setemail(e.target.value))} id='email'/>
     </div>
     <div>
         <label htmlFor='password'>password</label>
         <input type='password' value={pass} name='password' onChange={((e)=>setpass(e.target.value))} id='password'/>
         
         
     </div>
        <button type='submit'>Submit</button>
      
   </form>
    <div>
         {entry.map((item,index)=>{
             const [id,email,password]=item;
             return (<>
              
                 <h2 key={index}> {item.email}</h2>
                  <h2 key={index}>{item.pass}</h2>
              </>)
         })}
    </div>
 </>
  )
}

export default Login_hooks