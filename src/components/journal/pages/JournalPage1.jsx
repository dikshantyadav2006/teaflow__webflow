import { motion } from 'framer-motion'
import React from 'react'

const JournalPage1 = () => {
  
  return (
    <motion.div className='w-full lg:h-[80vh]  flex items-center justify-start p-[5.3vw] overflow-hidden selection:bg-slate-600 '
    
    whileInView="inView"
    viewport="viewport"
    >
      <div className="div  h-fit  overflow-hidden">
      <motion.h1 className='font-[font2] font-bold uppercase text-[13.5vw]   '
       variants={{
       
       
        inView:{ y: [ "100%", 0], opacity: [1,0.8] },
        viewport: {  amount: 0.8,   }// Animate to visible and in position
      }}
      transition={{ duration: 0.4, ease: "easeInOut", delay:.41}}
      
      >
        Journal
      </motion.h1>
      </div>
    </motion.div>
  )
}

export default JournalPage1
