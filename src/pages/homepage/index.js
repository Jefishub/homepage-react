import React from 'react';
import CategoryBox from './CategoryBox';
import RecommendationBox from './RecommendationBox';
import ContactBox from './ContactBox'

import { education, skills, work } from './CategoryContent';
import { recommendation } from './RecommendationContent';
import { contact } from './ContactContent'

import jere from '../../images/Jere.jpg'


function Homepage() {

  return (
    <main>
      <div className="category-section"> 
        <CategoryBox content={education} />
        <CategoryBox content={skills} />
        <CategoryBox content={work} />
      </div>
      <RecommendationBox content={recommendation} />
      <ContactBox content={contact} />
      <div className="text-box">    
          <img src={jere} alt="Me posing in a picture =)"></img>
      </div>
    </main>
  );
}

export default Homepage;