/* eslint-disable max-len */
import React from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function PortfolioCard({ item }) {
  return (
    // eslint-disable-next-line max-len
    <a 
    href={`/portfolio/${item?.title}/${item?.id}`}
    
    className="portfoliocards w-[95%] mx-auto lg:w-[380px]  2xl:w-[450px] rounded-full relative group overflow-visible cursor-pointer">
      {/* <LazyLoadImage
        src={item?.proj_img || "/fallback.jpg"}
        alt={item?.title || "Project Image"}
        effect="blur"
        className="h-[24rem] lg:h-[27rem] rounded-lg object-cover"
      /> */}

      <div className=" absolute opacity-0 rotate-[-5deg]  bg-black w-[100%] text-white rounded-xl bottom-0 md:hover:opacity-100 group-hover:md:opacity-100 z-50">
        <div className="w-[90%] mx-auto flex flex-col py-5 gap-5">
          <div className="w-full flex items-center justify-between ">
            <div className="flex flex-col ">
              <h1 className=" font-medium text-[1.8rem] text-white line-clamp-1">
                {item?.user?.name}
              </h1>
              <p className="text-sm">{item?.user?.role}</p>
            </div>
            {item?.user?.user_img && (
              <img
                src={item?.user?.user_img}
                alt=""
                className="w-[40px] h-[40px] rounded-lg"
              />
            )}
          </div>
          <h1 className="w-full text-white font-semibold truncate">{item?.title}</h1>
          <span className="w-full flex items-center gap-2 text-white">
            {/* <img src="/location.png" className="w-[15px] h-[15px] " /> */}
            <i class="fa-solid fa-location-dot text-red-500 text-xl md:text-2xl"></i>
            {item?.location}
          </span>
          <div className="w-full flex items-center gap-3 flex-wrap">
            <span className="text-white font-bold text-sm">Skills:</span>
            {item?.skills?.map((skill) => (
              <div key={skill.id} className="flex items-center ">
                <div
                  dangerouslySetInnerHTML={{ __html: skill.icon }}
                  className="flex items-center"
                  style={{ width: "28px", height: "28px" }} // Forces icon size
                />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
          <div className="w-full flex items-center gap-5 flex-wrap">
            {item?.recommended?.length > 0 &&
              item.recommended.map((project, index) => (
                <div className="w-full flex items-center gap-2">
                  <img
                    src={project?.proj_img}
                    className="w-[30px] h-[30px] rounded-full "
                  />
                  <div className="w-[90%] flex  flex-col">
                    <h1 className="w-[100%] text-white font-semibold truncate ">
                      {project?.title}
                    </h1>
                    <p className="text-sm"> Remote, {project?.location}</p>
                  </div>
                </div>
              ))}
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
              <h1 className="font-medium text-[1.8rem] text-white leading-none">
    
                {item?.user?.name}
              </h1>
              <p className="text-sm">{item?.user?.role}</p>
            </div>
            {item?.user?.user_img && (
              <img
                src={item?.user?.user_img}
                alt=""
                className="w-[40px] h-[40px] rounded-lg"
              />
            )}
          </div>
          <h1 className="text-white font-semibold">
          {item?.title}
          </h1>
          <span className="w-full flex items-center gap-2 text-white">
            <i className="fa-solid fa-location-dot text-red-500 text-xl md:text-2xl"></i>
            {item?.location}

          </span>
          <div className="w-full flex items-center gap-3 flex-wrap">
            <span className="text-white font-bold text-sm">Skills:</span>
            {item?.skills?.map((skill) => (
              <div key={skill.id} className="flex items-center ">
                <div
                  dangerouslySetInnerHTML={{ __html: skill.icon }}
                  className="flex items-center"
                  style={{ width: "28px", height: "28px" }} // Forces icon size
                />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
     
          </div>
          <div className="w-full flex items-center gap-5 flex-wrap">
            {item?.recommended?.length > 0 &&
              item.recommended?.slice(0, 1)?.map((project, index) => (
                <div className="flex items-center gap-2">
                  <img
                    src={project?.proj_img}
                    className="w-[30px] h-[30px] rounded-full "
                  />
                  <div className="flex  flex-col flex-wrap ">
                    <h1 className="text-white font-semibold ">
                      {project?.title}
                    </h1>
                    <p className="text-sm"> Remote, {project?.location}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </a>
  );
}

export default PortfolioCard;
