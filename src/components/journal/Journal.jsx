import React from 'react'
import JournalPage1 from './pages/JournalPage1'
import BlogList from './pages/BlogList'
import DiscountSection from '../discountSection/DiscountSection'

const Journal = () => {
  return (
    <div className='w-full webColor'>
      <JournalPage1/>
      <BlogList/>
      <DiscountSection/>
    </div>
  )
}

export default Journal
