import { useState } from 'react';
import './TodoList.css'
const TodoList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const updateItem = (index, newValue) => {
    const updatedItems = [...items];
    updatedItems[index] = newValue;
    setItems(updatedItems);
  };

  return (
    <div className='todo-list'>
      <h1>CRUD App</h1>
      <input className='input'
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className= 'button' onClick={addItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li className='input-container' key={index}>
            {item}
            <button className= 'button' onClick={() => removeItem(index)}>Delete</button>
            <input
              className='input'
              type="text"
              value={item}
              onChange={(e) => updateItem(index, e.target.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;