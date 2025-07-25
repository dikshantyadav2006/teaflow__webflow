import React from 'react'
import AboutHero from './sections/AboutHero'
import OurStory from './sections/OurStory'
import TeamSection from './sections/TeamSection'
import ValuesSection from './sections/ValuesSection'
import TeaJourney3D from './sections/TeaJourney3D'
import Sustainability from './sections/Sustainability'
import FollowUs from '../followUs/FollowUs'
import DiscountSection from '../discountSection/DiscountSection'

const AboutMain = () => {
  return (
    <div className="w-full">
      <AboutHero />
      <OurStory />
      <TeaJourney3D />
      <ValuesSection />
      <TeamSection />
      <Sustainability />
      <DiscountSection/>
      <FollowUs/>
    </div>
  )
}

export default AboutMain
