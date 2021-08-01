import React from 'react';

import bulletList from '../../components/bulletList/Basic'
import languageList from '../../components/bulletList/Language'
import skillList from '../../components/bulletList/SkillIndicator'

import { researcherSkills, developerSkills, languageSkills } from './content'

function Skills() {

  return (
    <div>
      {bulletList(researcherSkills)}
      {skillList(developerSkills)}
      {languageList(languageSkills)}
    </div>
  );
}

export default Skills;
