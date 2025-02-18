import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "../../fiber3d/Card";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    img:"https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806669_featured-p-1080.jpeg",
    name: "Emma Thompson",
    email: "emma.t@flowergarden.com",
    gender: "Female",
    title: "Rose Garden Expert"
  },{
    id: 11,
    img:"https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806684_relax%20fl-min.jpg",
    name: "Emma Thompson",
    email: "emma.t@flowergarden.com",
    gender: "Female",
    title: "Rose Garden Expert"
  },
  {
    id: 2,
    img:"https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806686_life%20fl-min.jpg",
    name: "Michael Chen",
    email: "m.chen@botanica.org",
    gender: "Male",
    title: "Botanical Photographer"
  },
  {
    id: 3,
    img:"https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806688_awareness%20fl-min-1.jpg",
    name: "Sofia Rodriguez",
    email: "sofia.r@flowerart.com",
    gender: "Female",
    title: "Floral Designer"
  },
  {
    id: 4,
    img:"https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068e8_%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B8%CC%86%D1%82%D0%B0-min.jpg",
    name: "James Wilson",
    email: "j.wilson@bloomscape.net",
    gender: "Male",
    title: "Garden Architect"
  },
  {
    id: 5,
    img:"https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069f4_gaba-oolong1-1200-min.jpg",
    name: "Aisha Patel",
    email: "aisha.p@floraldesign.com",
    gender: "Female",
    title: "Color Specialist"
  },
  {
    id: 6,
    img:"https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069ba_green-3-min.jpg",
    name: "Lucas Schmidt",
    email: "l.schmidt@wildflowers.de",
    gender: "Male",
    title: "Botanical Researcher"
  },
  {
    id: 7,
    img:"https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806697_%D0%94%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B8%CC%86%D1%82%D0%B0-min.jpg",
    name: "Nina Kowalski",
    email: "nina.k@gardenart.com",
    gender: "Female",
    title: "Garden Designer"
  }
];
const Page2Main = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollWidth = scrollRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    gsap.to(scrollRef.current, {
      x: `-${products.length * 36 - 100 + 20}vw `,
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
        style={{ height: `${products.length * 50}vh` }}
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
            {products.map((product, index) => (
              <div
                key={index}
                className="flex flex-shrink-0 flex-col items-center justify-center w-[32vw] h-[32vw] mx-[2vw]  rounded-lg shadow-lg"
              >
                <Card
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
