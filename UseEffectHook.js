import React, { useEffect, useState } from 'react';

const UseEffectHook = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log('hello useEffect');
    
    if (count > 1) {
      document.title = `chat (${count})`;
    } else {
      document.title = `chat ${count}`;
    }
  }, [count]);
  
  console.log('hello console');

  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default UseEffectHook;
