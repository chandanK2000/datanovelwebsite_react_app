import React from 'react'
import DigitalTransformationBanner from './DigitalTransformationBanner';
import DigitalTransformation from './DigitalTransformation';
import DataTransferTechnique from './DataTransferTechnique';
import ResultOrientedBenefits from './ResultOrientedBenefits';
import BusinessImportance from './BusinessImportance';
import LatestBlogs from '../../../home/latestBlogs/LatestBlogs';
import DigitatTransformationFaq from './DigitatTransformationFaq';

const DigitalTransformationTechniques = () => {
  return (
    <div style={{ marginTop: '' }}>
      <DigitalTransformationBanner />
      <DigitalTransformation />
      <DataTransferTechnique />
      <ResultOrientedBenefits />
      <BusinessImportance />
      <LatestBlogs />
      <DigitatTransformationFaq />

    </div>
  )
}

export default DigitalTransformationTechniques;