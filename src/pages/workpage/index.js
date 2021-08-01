import React from 'react';

import workHistoryList from '../../components/bulletList/WorkHistory'
import bulletList from '../../components/bulletList/Basic'

import { workHistory, publications, secondaryOccupations, responsibilities } from './content'

function Work() {
  return (
    <div>
      {workHistoryList(workHistory)}
      {bulletList(publications)}
      {bulletList(secondaryOccupations)}
      {bulletList(responsibilities)}
    </div>
  );
}

export default Work;
