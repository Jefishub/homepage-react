import React from 'react';
import CategoryBox from './Category';
import RecommendationBox from './Recommendation';
import ContactBox from './Profile'

import { education, skills, work } from './Category/CategoryContent';

const alignments = {
  left:{
    content: work,
    align:"section-left"
  },
  center:{
    content: education,
    align:"section-center"
  },
  right:{
    content: skills,
    align:"section-right"
  }
}

const Homepage = () => {

  return (
    <main>
      <div className="category-section"> 
        <CategoryBox data={alignments.left}/>
        <CategoryBox data={alignments.center}/>
        <CategoryBox data={alignments.right}/>
      </div>
      <ContactBox/>
      <RecommendationBox />
    </main>
  );
}

export default Homepage;