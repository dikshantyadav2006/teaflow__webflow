import React from 'react'
import Page1_main from './page1/Page1__main'
import Page2Main from './page2/Page2Main'
import FollowUs from '../followUs/FollowUs'
import DiscountSection from '../discountSection/DiscountSection'
import FloatingTeaLeaves from './floating3D/FloatingTeaLeaves'
import TeaJourneyTimeline from './teaJourney/TeaJourneyTimeline'
import CustomerReviews from './reviews/CustomerReviews'
import TeaBenefitsShowcase from './benefits/TeaBenefitsShowcase'
import Newsletter3D from './newsletter/Newsletter3D'

const HomePage = () => {
  return (
    <div>
      <Page1_main/>
      <FloatingTeaLeaves/>
      <Page2Main/>
      <TeaJourneyTimeline/>
      <TeaBenefitsShowcase/>
      <CustomerReviews/>
      <DiscountSection/>
      <Newsletter3D/>
      <FollowUs/>
    </div>
  )
}

export default HomePage