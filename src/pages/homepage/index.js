import React from 'react';
import CategoryBox from './CategoryBox';
import '../../css/styles.css';

import { education, skills, work } from './CategoryContent'

function Homepage() {

  return (
    <div className="App">
      <p>My homepage</p>
      <div className="category-section"> 
        <CategoryBox content={education} />
        <CategoryBox content={skills} />
        <CategoryBox content={work} />
      </div>
    </div>
  );
}

export default Homepage;