import React from 'react'
import Page1_text from './Page1_text'
import Page1__img from './Page1__img'
import Page2Main from '../page2/Page2Main'
const Page1__main = () => {
  return (
    <div className='w-full min-h-[85vh]  flex  overflow-hidden ' >
      <Page1_text/>
      <Page1__img/>
      
    </div>
  )
}

export default Page1__main
