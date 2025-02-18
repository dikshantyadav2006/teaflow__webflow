import React from "react";
import { motion } from "framer-motion";
import ScrollVelocity from '../../animations/marqueAnimation/ScrollVelocity'
const ContactLandingPage = () => {
  return (
    <div className=" w-full h-fit   sm:min-h-[50vh] font-[font2] font-black uppercase  leading-none    flex overflow-hidden mt-10">
   <div className="sm:my-auto my-5">
      
  <ScrollVelocity
    texts={['contact us']} 
    velocity={70} 
    className=" font-[font2] h-fit text-[10rem] sm:text-[13rem]"
  />
   </div>
    </div>
  );
};

export default ContactLandingPage;
