import React from "react";

function CareerCard() {
  return (
    <div className="bg-white w-[330px] xl:w-[400px] 2xl:w-[350px] rounded-lg flex flex-col items-center py-4 relative">
      <div className="w-[90%] mx-auto flex flex-col items-center">
        <div className="-mt-12 p-1 w-fit bg-transparent rounded-full border border-[#4A2848] flex items-center">
          <div className="w-[2.5rem] h-[2.5rem] md:w-[3.5rem] md:h-[3.5rem] bg-[#4A2848] rounded-full flex items-center justify-center">
            <img
              src="requirements-svgrepo-com.svg"
              alt="Dynamic Icon"
              className="w-2/4 h-2/4 invert"
            />
          </div>
        </div>
        <span
          className="text-[1rem] sm:text-[1.5rem] md:text-[1.5rem] font-semibold text-center 
leading-[2.5rem] sm:leading-[3rem] xl:leading-[4rem]  
break-words text-[#17012C] truncate overflow-hidden whitespace-nowrap w-full leadin"
        >
          Our Latest Projects
        </span>
        <p className="text-[#726B7D] text-center text-[0.875rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.1rem] line-clamp-3">
          Fronting occurs when sounds that should be made at the back of the
          mouth, such as /g/, are instead made at the front, like /d/.
        </p>
      </div>
    </div>
  );
}

export default CareerCard;
