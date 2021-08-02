import React from 'react';
import CategoryBox from './Category/CategoryBox';
import RecommendationBox from './Recommendation/RecommendationBox';
import ContactBox from './Contact/ContactBox'

import { education, skills, work } from './Category/CategoryContent';
import { recommendation } from './Recommendation/RecommendationContent';
import { contact } from './Contact/ContactContent'

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
          <img src={jere} alt="Me posing =)"></img>
      </div>
    </main>
  );
}

export default Homepage;