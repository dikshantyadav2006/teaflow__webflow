import React from "react";
import ThreeImg from "./ThreeImg";
const Card = (product) => {
  const { name, email, gender, img } = product.product;
  return (
    <div className=" h-full w-full flex flex-col items-center justify-between p-4 bg-white/10 backdrop-blur-sm shadow-lg rounded-lg">
      <div className="h-[25vw] w-[25vw] flex-shrink-0 rounded-lg ">
        <ThreeImg img={img} />
      </div>
      <div className="mt-4 text-center w-full px-10">
        <div className="flex justify-between items-center ">
          <h3 className="text-xl font-semibold">{name}</h3>

          <h3 className="text-lg font-semibold">$50</h3>
        </div>
        <p className="text-gray-600 ">{email}</p>
      </div>
    </div>
  );
};

export default Card;
