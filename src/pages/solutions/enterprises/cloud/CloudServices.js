import React from 'react'
import CloudServiceBanner from './CloudServiceBanner';
import CloudAdvisorySection from './CloudAdvisorySection';
import CloudOfferings from './CloudOfferings';
import AchieveSeamless from './AchieveSeamless';
import CloudPartners from './CloudPartners';
import CloudBusinessBenefits from './CloudBusinessBenefits';
import CloudTypes from './CloudTypes';
import IndustryUseCases from './IndustryUseCases';
import Quickassessment from './Quickassessment';
import CloudTechnology from './CloudTechnology';
import DamcoDifferentiators from './DamcoDifferentiators';
import LatestBlogs from '../../../home/latestBlogs/LatestBlogs';
import DigitalTransformationFaq from '../DigitalTransformation/DigitatTransformationFaq';
import CloudFaqs from './CloudFaqs';

const CloudServices = () => {
  return (
    <div>
      <CloudServiceBanner/>
      <CloudAdvisorySection/>
      <CloudOfferings/>
      <AchieveSeamless/>
      <CloudPartners/>
      <CloudBusinessBenefits/>
      <CloudTypes/>
      <IndustryUseCases/>
      <Quickassessment/>
      <CloudTechnology/>
      <DamcoDifferentiators/>
      <LatestBlogs/>
      <CloudFaqs/>
    </div>
  )
}

export default CloudServices;