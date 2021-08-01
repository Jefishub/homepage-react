import React from 'react';

import '../../css/styles.css';

import bulletList from '../../components/bulletList'

import { school, coursesAndTraining, certificates } from './content'

function Education() {

  return (
    <div className="bordered_box">
      {bulletList(school)}
      {bulletList(coursesAndTraining)}
      {bulletList(certificates)}
    </div>
  );
}

export default Education;
