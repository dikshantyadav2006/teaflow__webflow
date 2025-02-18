// 

const Nav = ({ showNav, navCardToggleButton, spanRefs}) => { 
  return (
    <>
      <nav className="">
        <div
          onClick={() => {
            navCardToggleButton()
          }}
          className={`flex  justify-between min-h-[26px] transition-all items-center gap-1   px-2 py-2`}
        >
          <div
            className={`flex  items-center  flex-col ${
              showNav ? " gap-[0px]" : " gap-[4px]"
            }`}
          >
            <span
              ref={(el) => (spanRefs.current[0] = el)}
              className={`w-8 h-[4px] inline-block bg-black  ${
                showNav ? "rounded-full" : "rounded-none"
              } `}
            ></span>
            <span
              ref={(el) => (spanRefs.current[1] = el)}
              className={`w-8 h-[4px] inline-block bg-black  ${
                showNav ? "rounded-full" : "rounded-none"
              } `}
            ></span>
            <span
              ref={(el) => (spanRefs.current[2] = el)}
              className={`w-8 h-[4px] inline-block bg-black  ${
                showNav ? "rounded-full" : "rounded-none"
              } `}
            ></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
