import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const [categories, setCategories] = useState([
    'all',
    ...new Set(menuItems.map((item) => item.category)),
  ]);

  const filterByCategory = (category) => {
    if (category === 'all') {
      setMenuItems(items);
    } else {
      setMenuItems(items.filter((item) => item.category === category));
    }
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>

        <Categories
          categories={categories}
          filterByCategory={filterByCategory}
        />

        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
