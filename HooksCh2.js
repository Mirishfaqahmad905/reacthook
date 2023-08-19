import React, { useState } from 'react';

const useState_hooksChallange2 = () => {
  const myBiodData = [
    { id: 0, name: 'ahmad', age: 20 },
    { id: 1, name: 'talha', age: 22 },
    { id: 2, name: 'mir', age: 23 }
  ];

  const [name, setName] = useState(myBiodData);

  const clearData = () => {
    setName([]);
  }

  const removeItem = (id) => {
    const myNewArray = name.filter((curItem) => curItem.id !==id);
    setName(myNewArray);
  }

  return (
    <>
      {name.map((item) => (
        <div key={item.id}>
          <h2>{item.name}&nbsp;{item.age} 
            <button className='btn' onClick={() => removeItem(item.id)}>Remove</button>
          </h2>
        </div>
      ))}
      <button onClick={clearData}>Clear Data</button>
    </>
  );
}

export default useState_hooksChallange2;
