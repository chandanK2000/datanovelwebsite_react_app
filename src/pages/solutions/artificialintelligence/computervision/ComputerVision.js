import React from 'react'
import ComputervisionFaq from './ComputervisionFaq';
import LatestBlogs from '../../../home/latestBlogs/LatestBlogs';
import ComputerVisionBanner from './ComputerVisionBanner';

const ComputerVision = () => {
  return (
    <div>
      <ComputerVisionBanner/>
      <LatestBlogs/>
      <ComputervisionFaq />
    </div>
  )
}

export default ComputerVision;