import React from 'react';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import Products from './Products';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
      </Routes>
    </>
  );
};

export default App;
