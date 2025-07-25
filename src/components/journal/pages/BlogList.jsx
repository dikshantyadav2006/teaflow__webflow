import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import blogService from "../../../services/blogService";

const BlogList = () => {
  const [blogList, setBlogList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        const blogs = await blogService.getAllBlogs();
        setBlogList(blogs);
      } catch (err) {
        setError('Failed to load blogs');
        console.error('Error loading blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  const handleBlogClick = (blog) => {
    navigate(`/journal/${blog.slug}`);
  };

  if (loading) {
    return (
      <div className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blogs...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="collection w-full  ">


      {
        blogList.map((blog, index) => (
          
      <div key={index} className="w-[90vw]  flex flex-col justify-between items-center  mx-auto mb-5  ">
        <motion.div
          className="blog relative w-full min-h-[27.5vw] pt-[5vw] flex justify-center items-center overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg cursor-pointer"
          whileHover="blogHover"
          initial="upperLine"
          animate="upperLine"
          onClick={() => handleBlogClick(blog)}
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
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBlogClick(blog);
                  }}
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
