import React from 'react';

import workHistoryList from '../../components/bulletList/WorkHistory'
import bulletList from '../../components/bulletList/Basic'

import { workHistory, publications, secondaryOccupations, responsibilities } from './content'

function Work() {
  return (
    <div>
      <div className="bordered-box">{workHistoryList(workHistory)}</div>
      <div className="bordered-box">{bulletList(publications)}</div>
      <div className="bordered-box">{bulletList(secondaryOccupations)}</div>
      <div className="bordered-box">{bulletList(responsibilities)}</div>
    </div>
  );
}

export default Work;
