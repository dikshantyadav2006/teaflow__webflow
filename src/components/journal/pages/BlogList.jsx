import { motion } from "framer-motion";
import React from "react";
const BlogList = () => {
  const blogList = [
    {
      date: "Jun 8, 2023",
      title: "What is matcha?",
      image:
        "https://cdn.prod.website-files.com/64899c647bc07ddd2ccf0cf5/64899c647bc07ddd2ccf1250_000.jpeg",
    },
    {
      date: "May 4, 2023",
      title: "How to make tea on fire, lazy cooking",
      image:
        "https://cdn.prod.website-files.com/64899c647bc07ddd2ccf0cf5/6740ab6f3506ad1939defb32_teapot-is-fireproof-glass-1-new.jpeg",
    },
    {
      date: "Mar 6, 2023",
      title:
        "Chaban (Tea Tray), hucheng, chachuan, and other variants of tea trays",
      image:
        "https://cdn.prod.website-files.com/64899c647bc07ddd2ccf0cf5/6740e8c3c7d3940b089ee0be_Chaban%20%231-new-1.jpeg",
    },
    {
      date: "Jan 16, 2023",
      title: "How to brew Shu (ripe) Pu-erh tea correctly",
      image:
        "https://cdn.prod.website-files.com/64899c647bc07ddd2ccf0cf5/673cb7471749f53e6b571bf6_white-min.jpg",
    },
  ];

  return (
    <div className="collection w-full  ">


      {
        blogList.map((blog, index) => (
          
      <div key={index} className="w-[90vw]  flex flex-col justify-between items-center  mx-auto mb-5  ">
        <motion.div
          className="blog relative w-full min-h-[27.5vw] pt-[5vw] flex justify-center  items-center overflow-hidden  "
          whileHover="blogHover"
          initial="upperLine"
          animate="upperLine"
        >
          <motion.div
            className="absolute top-0 left-1/2 h-[1px] bg-black w-full "
            variants={{
              upperLine: { opacity: 0.2, x: "-50%" },
              blogHover: { opacity: 1, x: "-50%" },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />

          <motion.div whileInView="inView" viewport="viewport" className="w-full">
            <motion.div
              className=" relative w-full  min-h-[27vw]  flex justify-between items-center  lg:flex-row flex-col "
              variants={{
                inView: { y: ["20%", 0], opacity: [1, 0.8] },
                viewport: { amount: 0.5 }, 
              }}
              transition={{ duration: 0.4, ease: "easeInOut", delay: 0.3 }}
            >
              <div className="date   lg:h-[27vw] self-start text-sm  lg:text-[1.5vw] capitalize lg:mx-1  mx-[10vw]  "> 
                {/*   date ------------------------------ */}
               {blog.date}
              </div>
              <div className="  lg:min-h-[27vw] flex justify-between flex-col  lg:w-1/2 sm:w-2/3 w-[60vw] leading-none ">
                <div className="heading font-[font2] uppercase text-[4vw] overflow-hidden h-fit ">
                  {/* title ------------------------------- */}
                  <h1>{blog.title}</h1>
                </div>
                <motion.div
                  className="article relative  w-fit cursor-pointer  font-thin lg:text-[1.2vw] text-sm  mt-[2.5vw] mb-[5vw]"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  Read article
                  <motion.div
                    className="absolute bottom-0 left-1/2 h-[.1vh] bg-black"
                    variants={{
                      rest: { width: 0, x: "-50%" },
                      hover: { width: "100%", x: "-50%" },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </motion.div>
              </div>
              <div className=" lg:h-[22vw] lg:w-[22vw] sm:h-[35vw]  rounded-[5.5vw] lg:rounded-[2vw] overflow-hidden lg:mr-[5vw]  ">
                {/* image ----------------------------------------------=========== */}
                <img
                  className="h-full object-cover "
                  src={blog.image}
                  alt=""
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
    ))
  }
    </div>
  );
};

export default BlogList;
