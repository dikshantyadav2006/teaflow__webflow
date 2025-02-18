import React from 'react'
import Page1_main from './page1/Page1__main'
import Page2Main from './page2/Page2Main'
import FollowUs from '../followUs/FollowUs'
import DiscountSection from '../discountSection/DiscountSection'

const HomePage = () => {
  return (
    <div>
      <Page1_main/>
      <Page2Main/>
      <DiscountSection/>
      <FollowUs/>
    </div>
  )
}

export default HomePage