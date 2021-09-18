import React from 'react';
import CategoryBox from './Category';
import RecommendationBox from './Recommendation';
import ContactBox from './Contact'

import { education, skills, work } from './Category/CategoryContent';
import { contact } from './Contact/ContactContent'

import jere from '../../images/Jere.jpg'

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
      <RecommendationBox />
      <ContactBox content={contact} />
      <div className="text-box">    
          <img src={jere} alt="Me posing =)"></img>
      </div>
    </main>
  );
}

export default Homepage;