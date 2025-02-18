import React from "react";

const FollowUs = () => {
  return (
    <div className="h-fit w-full  py-[10vh] overflow-hidden">
      <div className="followUsText uppercase font-['font2'] font-black text-[13vw]  sm:text-[8vw] h-[15vw] pl-[10vw]  ">
        Follow us
      </div>
    <div className="div  sm:flex sm:justify-end  ">
    <div className="images transform sm:translate-x-[10%] flex flex-col justify-center items-center w-full gap-2 h-full mt-[10vh]  sm:flex-row sm:w-fit">
      <div className="upper h-[40vw] w-full flex justify-center items-center gap-2 sm:h-[20vw] ">
          <div className=" w-[50vw] h-full bg-[url(https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806672_follow-us-6-p-500.jpg)] bg-cover     rounded-md sm:w-[20vw]"></div>
          <div className=" w-[40vw] min-h-full bg-[url(https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806680_follow-us-2-p-500.jpg)] bg-cover rounded-md sm:w-[20vw]"></div>
        </div>
        <div className="upper h-[40vw] w-full flex justify-center items-center gap-2 sm:h-[20vw]">
          <div className=" w-[40vw] min-h-full bg-[url(https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec80667d_follow-us-3-p-500.jpg)] bg-cover rounded-md sm:w-[20vw]"></div>
          <div className=" w-[50vw] h-full bg-[url(https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec80666d_follow-us-4-p-500.jpg)] bg-cover rounded-md sm:w-[20vw]"></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FollowUs;
