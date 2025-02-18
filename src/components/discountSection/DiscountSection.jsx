import React from "react";

const DiscountSection = () => {
  return (
    <div className="w-full min-h-[60vh] sm:h-screen  flex flex-col justify-center items-center px-3  ">
      <div className="div flex flex-col justify-center items-center gap-10 sm:flex-row  bg-[#F7F7F7] sm:min-w-[90%] sm:min-h-[70%] rounded-[10vw] sm:justify-between sm:px-[10vw] px-3">
        <div className="disc w-full  pt-10 sm:w-fit sm:h-[100%] px-2">
          <h1 className='  font-["font4"] font-[100] text-[10vw] sm:text-[4vw]  uppercase  leading-[12vw] sm:w-full w-[70%] ml-[1vw] text-start sm:justify-between '>
            get 20% off
          </h1>
         <div className=" sm:mt-[10vh] sm:flex sm:flex-col sm:gap-2 w-[90%]  sm:w-[100%] px-3 ">
         <p className="text-[12px] font-thin font-[font3] inline-block sm:block sm:text-[1.2vw] ">Your first order + future sales updates.</p>
          <p className="text-[12px] font-thin font-[font3] inline-block sm:block sm:text-[1.2vw] ">You can safely unsubscribe anytime from any email</p>
          <p className="text-[12px] font-thin font-[font3] inline-block sm:block sm:text-[1.23vw] ">footer. Here is our privacy policy</p>
         </div>
        </div>
        <div className="input flex  border-b-[1px] border-black pb-1 my-10">
          <input
            className="p-2 w-full font-[font3] rounded-md border-2 border-hidden bg-transparent  focus:outline-none"
            type="text"
            placeholder="Enter your email"
          />
          <button className="px-4 py-2">
            <img src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec8065fa_Btn%20icon.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountSection;
