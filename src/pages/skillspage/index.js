import React from 'react';

import bulletList from '../../components/bulletList/Basic'
import languageList from '../../components/bulletList/Language'
import skillList from '../../components/bulletList/SkillIndicator'

import { researcherSkills, developerSkills, languageSkills } from './content'

function Skills() {

  return (
    <div>
      <div className="bordered-box">{bulletList(researcherSkills)}</div>
      <div className="bordered-box">{skillList(developerSkills)}</div>
      <div className="bordered-box">{languageList(languageSkills)}</div>
    </div>
  );
}

export default Skills;
