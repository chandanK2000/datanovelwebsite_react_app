import React from 'react'
import PackageimplementationBanner from './PackageimplementationBanner';
import WeOffers from './WeOffers';
import PackageKeyBenefits from './PackageKeyBenefits';
import OurProcessPackage from './OurProcessPackage';
import IndustrisServe from './IndustrisServe';
import WhychoosePackage from './WhychoosePackage';
import PackageImplementConnect from './PackageImplementConnect';
import LatestBlogs from '../../../home/latestBlogs/LatestBlogs';
import DigitalTransformationFaq from '../DigitalTransformation/DigitatTransformationFaq';

const PackageImplementation = () => {
  return (
    <div>
      <PackageimplementationBanner/>
      <WeOffers/>
      <PackageKeyBenefits/>
      <OurProcessPackage/>
      <IndustrisServe/>
      <WhychoosePackage/>
      <PackageImplementConnect/>
      <LatestBlogs/>
      <DigitalTransformationFaq/>
    </div>
  )
}

export default PackageImplementation;