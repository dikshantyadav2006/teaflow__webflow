import React from 'react'
import ContactHero from './sections/ContactHero'
import ContactForm from './sections/ContactForm'
import ContactInfo from './sections/ContactInfo'
import FAQ from './sections/FAQ'
import FollowUs from '../followUs/FollowUs'
import DiscountSection from '../discountSection/DiscountSection'

const ContactMain = () => {
  return (
    <main className='w-full'>
      <ContactHero/>
      <ContactForm/>
      <ContactInfo/>
      <FAQ/>
      <DiscountSection/>
      <FollowUs/>
    </main>
  )
}

export default ContactMain
