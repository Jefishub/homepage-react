import React from 'react';
import CategoryBox from './Category';
import RecommendationBox from './Recommendation';
import ContactBox from './Profile'

import { education, skills, work } from './Category/CategoryContent';

const categorySection = {
  left: {
    content: work,
    align: "section-left"
  },
  center: {
    content: education,
    align: "section-center"
  },
  right: {
    content: skills,
    align: "section-right"
  }
}

const Homepage = () => {

  return (
    <main>
      <div className="category-section">
        <CategoryBox data={categorySection.left} />
        <CategoryBox data={categorySection.center} />
        <CategoryBox data={categorySection.right} />
      </div>
      <ContactBox />
      <RecommendationBox />
    </main>
  );
}

export default Homepage;