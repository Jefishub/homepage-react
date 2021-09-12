import React from 'react';
import CategoryBox from './Category';
import RecommendationBox from './Recommendation';
import ContactBox from './Contact'

import { education, skills, work } from './Category/CategoryContent';
import { recommendation } from './Recommendation/RecommendationContent';
import { contact } from './Contact/ContactContent'

import jere from '../../images/Jere.jpg'

function Homepage() {

  return (
    <main>
      <div className="category-section"> 
        <CategoryBox content={work} />
        <CategoryBox content={education} />
        <CategoryBox content={skills} />
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