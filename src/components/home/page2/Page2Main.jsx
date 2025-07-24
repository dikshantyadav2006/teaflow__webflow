import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TeaCard from "./TeaCard";

gsap.registerPlugin(ScrollTrigger);

const teaProducts = [
  {
    id: 1,
    img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806669_featured-p-1080.jpeg",
    name: "Premium Green Tea",
    price: "$24.99",
    category: "Green Tea",
    description: "Organic premium green tea leaves"
  },
  {
    id: 2,
    img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806684_relax%20fl-min.jpg",
    name: "Relaxation Blend",
    price: "$29.99",
    category: "Herbal Tea",
    description: "Calming herbal tea blend"
  },
  {
    id: 3,
    img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806686_life%20fl-min.jpg",
    name: "Life Flow Tea",
    price: "$34.99",
    category: "Wellness Tea",
    description: "Energizing wellness tea blend"
  },
  {
    id: 4,
    img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806669_featured-p-1080.jpeg",
    name: "Earl Grey Classic",
    price: "$22.99",
    category: "Black Tea",
    description: "Traditional Earl Grey with bergamot"
  },
  {
    id: 5,
    img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806684_relax%20fl-min.jpg",
    name: "Chamomile Dreams",
    price: "$26.99",
    category: "Herbal Tea",
    description: "Pure chamomile flowers for relaxation"
  },
  {
    id: 6,
    img: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806686_life%20fl-min.jpg",
    name: "Morning Boost",
    price: "$31.99",
    category: "Energy Tea",
    description: "Energizing morning tea blend"
  }
];
const Page2Main = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    gsap.to(scrollRef.current, {
      x: `-${teaProducts.length * 36 - 100 + 20}vw `,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="w-full webColor lg:block hidden">
      <div
        ref={containerRef}
        className=" relative"
        style={{ height: `${teaProducts.length * 50}vh` }}
      >
        <div className="flex flex-col h-[100vh] overflow-hidden   sticky left-0 top-0 pt-[10vh]">
          <div className=" pl-[12vw] mb-[5vw]  ">
            <h1 className=" uppercase font-['font4'] text-[4vw] font-black ">
              choose your flow
            </h1>
          </div>
          <div
            ref={scrollRef}
            className="slide flex flex-shrink-0  w-fit px-[10vw]  "
          >
            {teaProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-shrink-0 flex-col items-center justify-center w-[32vw] h-[32vw] mx-[2vw] rounded-lg shadow-lg"
              >
                <TeaCard
                 product={product}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2Main;
