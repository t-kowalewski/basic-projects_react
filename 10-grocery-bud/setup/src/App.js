import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [productsList, setProductsList] = useState(
    JSON.parse(localStorage.getItem('productsList')) || []
  );
  const [productInput, setProductInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '', // 'success' or 'danger'
  });

  // alert logic
  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    if (productInput.trim().length > 0 && !isEditing) {
      // add item
      const newItem = {
        id: new Date().getTime().toString(),
        name: productInput.trim(),
      };

      setProductsList((currState) => {
        return [...currState, newItem];
      });
      setProductInput('');
      showAlert(true, 'Item added', 'success');
    } else if (productInput.trim().length > 0 && isEditing) {
      // edit item
      setProductsList((currState) => {
        return currState.map((item) => {
          return item.id === editID
            ? { ...item, name: productInput.trim() }
            : item;
        });
      });

      setIsEditing(false);
      setEditID(null);
      setProductInput('');
      showAlert(true, 'Item updated', 'success');
    } else {
      showAlert(true, 'Please enter correct value', 'danger');
    }
  };

  // edit item
  const editItem = (id) => {
    const editedItem = productsList.find((item) => item.id === id);
    if (editedItem) {
      setIsEditing(true);
      setProductInput(editedItem.name);
      setEditID(editedItem.id);
    }
  };

  // delete itme
  const delItem = (id) => {
    setProductsList((currState) => {
      return currState.filter((item) => item.id !== id);
    });
    showAlert(true, 'Item removed', 'danger');
  };

  // clear list
  const clearList = () => {
    setProductsList([]);
    showAlert(true, 'List Cleared', 'danger');
  };

  // save data to local storage
  useEffect(() => {
    localStorage.setItem('productsList', JSON.stringify(productsList));
  }, [productsList]);

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={submitHandler}>
        {alert.show && <Alert alertInfo={alert} showAlert={showAlert} />}

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
          <List items={productsList} delItem={delItem} editItem={editItem} />

          <button className='clear-btn' onClick={clearList}>
            Clear list
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
