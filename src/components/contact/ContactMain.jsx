import React from 'react'
import ContactLandingPage from './contactPages/ContactLandingPage'
import FollowUs from '../followUs/FollowUs'
import DiscountSection from '../discountSection/DiscountSection'

const ContactMain = () => {
  return (
    <main className='w-full'>
      <ContactLandingPage/>
      <DiscountSection/>
      <FollowUs/>
    </main>
  )
}

export default ContactMain
