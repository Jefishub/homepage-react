import React from 'react';
import CategoryBox from './CategoryBox';
import './css/styles.css';

function App() {
  return (
    <div className="App">
      <p>My homepage</p>
      <div className="category-section"> 
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
      </div>
    </div>
  );
}

export default App;
