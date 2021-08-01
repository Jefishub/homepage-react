import React from 'react';
import '../../css/styles.css';

import bulletList from '../../components/bulletList'

import { researcherSkills, developerSkills, languageSkills } from './content'

function Skills() {

  return (
    <div>
      {bulletList(researcherSkills)}
    </div>
  );
}

export default Skills;
