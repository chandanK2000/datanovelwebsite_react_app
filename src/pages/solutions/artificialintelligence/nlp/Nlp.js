import React from 'react'
import NlpFaq from './NlpFaq';
import LatestBlogs from '../../../home/latestBlogs/LatestBlogs';
import NlpBanner from './NlpBanner';

const Nlp = () => {
  return (
    <div>
      <NlpBanner/>
      <LatestBlogs/>
      <NlpFaq />
    </div>
  )
}

export default Nlp;