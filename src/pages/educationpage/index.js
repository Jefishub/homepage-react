import React from 'react';

import '../../css/styles.css';

import { school, coursesAndTraining, certificates } from './content'

function Education() {

  const education = (content) => {
    const listItems = content.map((item, i) => {
      const header = <h2>{item.header}</h2>
      const bullets = item.bullets.map((bullet, i) => {
        return <p key={i}>{bullet}</p>
    })
      return (
        <div className="text_box" key={i}>
          {header}
          {bullets}
        </div>
      )
    })
    return listItems
  }

  return (
    <div className="bordered_box">
      <div className="text_box">
          <h1>Education</h1>
      </div>
      {education(school)}
      {education(coursesAndTraining)}
      {education(certificates)}
    </div>
  );
}

export default Education;
