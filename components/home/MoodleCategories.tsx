import React from 'react'
import MoodleTitleBlock from '../common/MoodleTitleBlock'
import WrapperBody from '../wrappers/WrapperBody'

const MoodleCategories = () => {
  return (
    <div className='flex flex-col items-center pt-[80px]'>
      <WrapperBody>

      <MoodleTitleBlock viewMore viewMoreTitle='View All' viewMoreLink='/categories'  title='Bemoodle Categories' subtitle='Explore the different categories of artisan works.' badge='CATEGORIES' position='left'/>

      </WrapperBody>
    </div>
  )
}

export default MoodleCategories
