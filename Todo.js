import React, { useEffect, useState } from 'react';
import './Todo.css';

const getLocalItem = () => {
  let list = localStorage.getItem('lists');
  if (list) {
    return JSON.parse(list); // Corrected: Change 'list' to 'lists'
  } else {
    return [];
  }
};

const Todo = () => {
  const [data, setData] = useState('');
  const [item, setItem] = useState(getLocalItem());
  const Add = () => {
    setItem([...item, data]);
    setData('');
  };
  const Delete = (index) => {
    const updatedItems = item.filter((_, i) => i !== index);
    setItem(updatedItems);
  };

  const RemoveAll = () => {
    setItem([]);
  };

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(item));
  }, [item]);

  return (
    <>
      <h2>Todo app in React</h2>
      <input
        type='text'
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder='Enter item'
      />
      <button onClick={Add}>Add</button>
      <div className='list'>
        <ul>
          {item.map((value, index) => (
            <li key={index}>
              {value}
              <button onClick={() => Delete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={RemoveAll}>Remove all</button>
    </>
  );
};

export default Todo;
