import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [productsList, setProductsList] = useState([]);
  const [productInput, setProductInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  console.log(productsList);

  const submitHandler = (e) => {
    e.preventDefault();

    if (productInput.trim().length > 0 && !isEditing) {
      // show alert - added

      const newItem = {
        id: new Date().getTime().toString(),
        name: productInput.trim(),
      };

      setProductsList((currState) => {
        return [...currState, newItem];
      });
      setProductInput('');
    } else if (productInput.trim().length > 0 && isEditing) {
      // deal with edit
    } else {
      // show alert
      setAlert({ show: true, msg: 'Please enter correct value', type: '' });
    }
  };

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={submitHandler}>
        {alert.show && <Alert />}

        <h3>Grocery list</h3>

        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='Bread'
            value={productInput}
            onChange={(e) => setProductInput(e.target.value)}
          />

          <button type='submit' className='submit-btn'>
            {isEditing ? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>

      {productsList.length > 0 && (
        <div className='grocery-container'>
          <List items={productsList} />
          <button className='clear-btn'>Clear list</button>
        </div>
      )}
    </section>
  );
}

export default App;
