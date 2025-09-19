import React from 'react'
import ApplicationDevelopmentBanner from './ApplicationDevelopmentBanner';
import BuildingFuture from './BuildingFuture';
import KeyBenefits from './KeyBenefits';
import ApplicationProcess from './ApplicationProcess';
import TechnologiesUsed from './TechnologiesUsed';
import LatestBlogs from '../../../home/latestBlogs/LatestBlogs';
import ApplicationDevelopmentFaq from './ApplicationDevelopmentFaq';

const ApplicationDevelopment = () => {
  return (
    <div>
        <ApplicationDevelopmentBanner/>
        <BuildingFuture/>
        <KeyBenefits/>
        <ApplicationProcess/>
        <TechnologiesUsed/>
        <LatestBlogs/>
        <ApplicationDevelopmentFaq/>
    </div>
  )
}

export default ApplicationDevelopment;