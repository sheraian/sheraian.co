import React from "react";

function PortfolioCard() {
  return (
    <div className="portfoliocards w-[95%] mx-auto lg:w-[405px]  bg-cyan-300 rounded-full relative group">
      <img src="/portfolio.png" alt="" className=" rounded-lg" />
      <div className=" absolute opacity-0 rotate-[-5deg]  bg-black w-[100%] text-white rounded-xl bottom-0 md:hover:opacity-100 group-hover:md:opacity-100">
        <div className="w-[90%] mx-auto flex flex-col py-5 gap-5">
          <div className="w-full flex items-center justify-between ">
            <div className="flex flex-col ">
              <h1 className=" font-medium text-[1.8rem] text-white">Aaron</h1>
              <p className="text-sm">Stack Software Engineer</p>
            </div>
            <img
              src="/portfolio.png"
              alt=""
              className="w-[40px] h-[40px] rounded-lg"
            />
          </div>
          <h1 className="text-white font-semibold">
            Python and JS full-stack software engineer with 3 years experience
          </h1>
          <span className="w-full flex items-center gap-2 text-white">
            {/* <img src="/location.png" className="w-[15px] h-[15px] " /> */}
            <i class="fa-solid fa-location-dot text-red-500 text-xl md:text-2xl"></i>
            New York, NY
          </span>
          <div className="w-full flex items-center gap-3 flex-wrap">
            <span className="text-white font-bold text-sm">Skills:</span>
            <span className="flex items-center gap-1.5">
              <i class="fa-brands fa-python text-blue-500 text-2xl"></i>
              Python
            </span>
            <span className="flex items-center gap-1.5">
              <i class="fa-brands fa-js text-yellow-500 text-2xl "></i>
              Javascript
            </span>
            <span className="flex items-center gap-1.5">
              <i class="fa-brands fa-c text-blue-500 text-2xl"></i>C
            </span>
          </div>
          <div className="w-full flex items-center gap-5 flex-wrap">
            <div className="flex items-center gap-2">
              <img
                src="/portfolio.png"
                className="w-[30px] h-[30px] rounded-full "
              />
              <div className="flex  flex-col flex-wrap ">
                <h1 className="text-white font-semibold ">Web Developer</h1>
                <p className="text-sm">OGM Digital, Remote, US</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/portfolio.png"
                className="w-[30px] h-[30px] rounded-full "
              />
              <div className="flex  flex-col flex-wrap ">
                <h1 className="text-white font-semibold ">Web </h1>
                <p className="text-sm">OGM Digital, </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full bg-black text-white rounded-xl 
       opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 
       transition-all duration-500 ease-in-out 
       md:opacity-0 md:translate-y-0 group-hover:md:opacity-0"
      >
        <div className="w-[90%] mx-auto flex flex-col py-5 gap-5">
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="font-medium text-[1.8rem] text-white">Aaron</h1>
              <p className="text-sm">Stack Software Engineer</p>
            </div>
            <img
              src="/portfolio.png"
              alt=""
              className="w-[40px] h-[40px] rounded-lg"
            />
          </div>
          <h1 className="text-white font-semibold">
            Python and JS full-stack software engineer with 3 years experience
          </h1>
          <span className="w-full flex items-center gap-2 text-white">
            <i className="fa-solid fa-location-dot text-red-500 text-xl md:text-2xl"></i>
            New York, NY
          </span>
          <div className="w-full flex items-center gap-3 flex-wrap">
            <span className="text-white font-bold text-sm">Skills:</span>
            <span className="flex items-center gap-1.5">
              <i className="fa-brands fa-python text-blue-500 text-2xl"></i>
              Python
            </span>
            <span className="flex items-center gap-1.5">
              <i className="fa-brands fa-js text-yellow-500 text-2xl"></i>
              JavaScript
            </span>
            <span className="flex items-center gap-1.5">
              <i className="fa-brands fa-c text-blue-500 text-2xl"></i>C
            </span>
          </div>
          <div className="w-full flex items-center gap-5 flex-wrap">
            <div className="flex items-center gap-2">
              <img
                src="/portfolio.png"
                className="w-[30px] h-[30px] rounded-full"
              />
              <div className="flex flex-col flex-wrap">
                <h1 className="text-white font-semibold">Web Developer</h1>
                <p className="text-sm">OGM Digital, Remote, US</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
