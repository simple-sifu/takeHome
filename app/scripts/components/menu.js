/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 *
 */
import React, { useState } from 'react';
import Item from './item';

const Menu = () => {
  const [showingSearch, setShowingSearch] = useState(false);
  const [items, setItems] = useState([]);

  // to determine which page to show items
  const [page, setPage] = useState(0);

  const showSearchContainer = (e) => {
    e.preventDefault();
    setShowingSearch(!showingSearch);
  };

  const onSearch = (e) => {
    console.log(e.target.value);
    fetch(`http://localhost:3035/item?query=${e.target.value}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const arr = [];
        data.forEach((element) => {
          arr.push(
            <Item
              name={element.name}
              picture={element.picture}
              price={element.price}
              tags={element.tags}
            />
          );
        });
        setItems(arr);
      });
  };

  return (
    <header className="menu">
      <div className="menu-container">
        <div className="menu-holder">
          <h1>ELC</h1>
          <nav>
            <a href="#" className="nav-item">
              HOLIDAY
            </a>
            <a href="#" className="nav-item">
              WHAT'S NEW
            </a>
            <a href="#" className="nav-item">
              PRODUCTS
            </a>
            <a href="#" className="nav-item">
              BESTSELLERS
            </a>
            <a href="#" className="nav-item">
              GOODBYES
            </a>
            <a href="#" className="nav-item">
              STORES
            </a>
            <a href="#" className="nav-item">
              INSPIRATION
            </a>

            <a href="#" onClick={(e) => showSearchContainer(e)}>
              <i className="material-icons search">search</i>
            </a>
          </nav>
        </div>
      </div>
      <div className={(showingSearch ? 'showing ' : '') + 'search-container'}>
        <input
          type="text"
          onChange={(e) => onSearch(e)}
          placeholder="Enter text here"
        />
        <a href="#" onClick={(e) => showSearchContainer(e)}>
          <i className="material-icons close">close</i>
        </a>
        <>
          {items.length <= 4 ? (
            <>
              <p>
                Displaying {items.length} of {items.length} results
              </p>
              <div className="items-container">
                {items.slice(0,4).map((item, index) => (
                  <div key={index} className='item'>
                    {item}
                    </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <p>Displaying 4 of {items.length} results</p>
              <div className="items-container">
                {items.slice(0,4).map((item, index) => (
                  <div key={index} className="item">
                    {item}
                    </div>
                ))}
                {/* {items} */}
              </div>
            </>
          )}
        </>
      </div>
    </header>
  );
};

// Export out the React Component
export default Menu;
