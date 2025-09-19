import React from 'react'
import AgenticAiFaq from './AgenticAiFaq';
import LatestBlogs from '../../../home/latestBlogs/LatestBlogs';
import AgenticBanner from './AgenticBanner';

const AgenticAi = () => {
  return (
    <div>
      <AgenticBanner/>
      <LatestBlogs/>
      <AgenticAiFaq/>
    </div>
  )
}

export default AgenticAi;