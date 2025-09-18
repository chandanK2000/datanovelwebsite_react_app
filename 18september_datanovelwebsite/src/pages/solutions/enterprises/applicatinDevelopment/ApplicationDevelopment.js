import React from 'react'
import ApplicationDevelopmentBanner from './ApplicationDevelopmentBanner';
import BuildingFuture from './BuildingFuture';
import KeyBenefits from './KeyBenefits';
import ApplicationProcess from './ApplicationProcess';
import TechnologiesUsed from './TechnologiesUsed';
import LatestBlogs from '../../../home/latestBlogs/LatestBlogs';
import DigitalTransformationFaq from '../DigitalTransformation/DigitatTransformationFaq';

const ApplicationDevelopment = () => {
  return (
    <div>
        <ApplicationDevelopmentBanner/>
        <BuildingFuture/>
        <KeyBenefits/>
        <ApplicationProcess/>
        <TechnologiesUsed/>
        <LatestBlogs/>
        <DigitalTransformationFaq/>
    </div>
  )
}

export default ApplicationDevelopment;