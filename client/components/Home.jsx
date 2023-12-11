/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React from 'react';
import Menu from './Menu';
import '../styles/_home.scss'

const Home = () => {
  return (
    <section id="home">
      <Menu />
    </section>
  );
};

// Export out the React Component
export default Home;
