import React from 'react'
import GenerativeAiFaq from './GenerativeAiFaq';
import GenerativeAiBanner from './GenerativeAiBanner';
import LatestBlogs from '../../../home/latestBlogs/LatestBlogs';
import GenerativeAiService from './GenerativeAiService';
import IndustryReadyAiServices from './IndustryReadyAiServices';
import IndustryAiSolutions from './IndustryAiSolutions';
import ExplorePossibilities from './ExplorePossibilities';
import ChooseGenerativeAi from './ChooseGenerativeAi';

const GenerativeAi = () => {
  return (
    <div>
      <GenerativeAiBanner />
      <GenerativeAiService />
      <IndustryReadyAiServices />
      <IndustryAiSolutions/>
      <ExplorePossibilities/>
      <ChooseGenerativeAi/>
      <LatestBlogs />
      <GenerativeAiFaq />


    </div>
  )
}

export default GenerativeAi;