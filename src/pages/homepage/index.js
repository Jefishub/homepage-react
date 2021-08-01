import React from 'react';
import CategoryBox from './CategoryBox';
import RecommendationBox from './RecommendationBox';
import ContactBox from './ContactBox'
import '../../css/styles.css';

import { education, skills, work } from './CategoryContent';
import { recommendation } from './RecommendationContent';
import { contact } from './ContactContent'

function Homepage() {

  return (
    <div className="App">
      <div className="category-section"> 
        <CategoryBox content={education} />
        <CategoryBox content={skills} />
        <CategoryBox content={work} />
      </div>
      <RecommendationBox content={recommendation} />
      <ContactBox content={contact} />
    </div>
  );
}

export default Homepage;