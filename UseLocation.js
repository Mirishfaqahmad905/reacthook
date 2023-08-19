import React from 'react';
import { useLocation } from 'react-router-dom';
import useL_about from './useL_about';
const UseLocation = () => {
     const location=useLocation();
      console.log(location);
  return (
     <>
       {location.pathname==='/'?<p>hello Mir</p>:<p>welcom to paragraph page of react js </p>}
     </>
    // <div>hello Home Page {location.pathname.replace('/about')}</div>
  )
}

export default UseLocation