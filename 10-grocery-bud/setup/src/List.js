import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({ items }) => {
  return (
    <div className='grocery-list'>
      {items.map((item) => {
        const { id, name } = item;

        return (
          <article key={id} className='grocery-item'>
            <p className='title'>{name}</p>

            <div className='btn-container'>
              <button className='edit-btn' type='button'>
                <FaEdit />
              </button>

              <button className='delete-btn' type='button'>
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
