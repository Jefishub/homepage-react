import React from 'react';

import bulletList from '../../components/bulletList/Basic'

import { school, coursesAndTraining, certificates } from './content'

function Education() {

  return (
    <div>
      <div className="bordered-box">{bulletList(school)}</div>
      <div className="bordered-box">{bulletList(coursesAndTraining)}</div>
      <div className="bordered-box">{bulletList(certificates)}</div>
    </div>
  );
}

export default Education;
