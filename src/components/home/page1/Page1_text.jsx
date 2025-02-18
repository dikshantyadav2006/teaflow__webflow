import React from "react";

const page1_text = () => {
  return (
    <div className=" relative z-10 w-[50vw] p-[5vw] pointer-events-none	 ">
      <div className='font-["font2"] uppercase font-black text-[#222020]  text-[6vw]  leading-tight w-[55vw] '>
        <h1>
          <span className="w-[10vw] inline-block">
            </span>
            Green Tea #4 perfect
          start to your day
        </h1>
      </div>
      <div className=" w-[25vw] absolute bottom-[15vh] left-[50%] -translate-x-1/2 translate-y-1/2  ">
        <p className="font-['font1']  leading-6  text-m font-black ">
          Discover the refreshing taste of Green Tea with Jasmine - a perfect
          blend to soothe your senses
        </p>
        <div className="flex items-center justify-start mt-2 gap-5 ">
          <h2 className=" uppercase font-['font1'] font-bold  ">shop now</h2>
          <button className="w-[4vw] h-[2vw] rounded-full border-black border-2   ">
            ---
          </button>
        </div>
      </div>
    </div>
  );
};

export default page1_text;
