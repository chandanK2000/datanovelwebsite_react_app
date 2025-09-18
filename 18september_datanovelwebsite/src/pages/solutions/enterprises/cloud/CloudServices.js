import React from 'react'
import CloudServiceBanner from './CloudServiceBanner';
import CloudAdvisorySection from './CloudAdvisorySection';
import CloudOfferings from './CloudOfferings';
import AchieveSeamless from './AchieveSeamless';
import CloudPartners from './CloudPartners';
import CloudBusinessBenefits from './CloudBusinessBenefits';
import CloudTypes from './CloudTypes';
import IndustryUseCases from './IndustryUseCases';

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
    </div>
  )
}

export default CloudServices;