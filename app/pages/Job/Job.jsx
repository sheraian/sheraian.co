import React, { useState } from "react";
import SalaryRangeSlider from "../../components/SalaryRangeSlider";
import Btn from "../../components/Btn";

function Job() {
  const categories = [
    "Commerce",
    "Telecommunications",
    "Technology",
    "Healthcare",
  ];

  return (
    <div className="w-[100%] h-[100%] mx-auto flex flex-row bg-[#F5F5F5] py-20">
      <div className="w-[90%] mx-auto flex flex-col  lg:flex-row  gap-10">
        <div className="px-5 h-fit py-5 w-full lg:max-w-[300px] bg-white  shadow-lg rounded-md flex flex-col gap-5 ">
          <InputComponent flag={true} />
          <InputComponent flag={false} />
          <div className="w-full flex flex-col gap-2">
            <span className="text-[1rem] font-poppins font-semibold">
              Category
            </span>
            {categories.map((e) => (
              <CheckBox title={e} />
            ))}
          </div>
          <div className="w-full flex flex-col gap-2">
            <span className="text-[1rem] font-poppins font-semibold">
              Job Type
            </span>
            {categories.map((e) => (
              <CheckBox title={e} />
            ))}
          </div>
          <div className="w-full flex flex-col gap-2">
            <span className="text-[1rem] font-poppins font-semibold">
              Experience Level
            </span>
            {categories.map((e) => (
              <CheckBox title={e} />
            ))}
          </div>
          <div className="w-full flex flex-col gap-2">
            <span className="text-[1rem] font-poppins font-semibold">
              Date Posted
            </span>
            {categories.map((e) => (
              <CheckBox title={e} />
            ))}
          </div>
          <SalaryRangeSlider />
        </div>

        <div className="flex flex-col gap-10 overflow-auto">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </div>
  );
}

export default Job;
const CheckBox = ({ title }) => (
  <div className="w-full flex items-center justify-between flex-wrap">
    <label className="w-[80%] flex items-center space-x-2 ">
      <input
        type="checkbox"
        className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
      />
      <span className="w-full text-gray-700 font-poppins font-medium line-clamp-1">
        {title}
      </span>
    </label>
    <span className="text-gray-700">10</span>
  </div>
);

const InputComponent = ({ flag }) => (
  <div className=" flex flex-col gap-2">
    <span className="text-[1rem] font-poppins font-semibold">
      Search by Job Title
    </span>
    <TextInput flag={flag} />
  </div>
);

const TextInput = ({ flag }) => (
  <div className=" border border-[#D9D9D9] bg-gray-100 flex items-center  rounded-lg w-full pr-2">
    <span className="w-[35px] h-[35px] flex items-center text-gray-500 justify-center  rounded-r-md">
      <i className="fas fa-search text-[16px]"></i>
    </span>
    {flag ? (
      <input
        className="bg-transparent flex-1 px-0.5  outline-none text-gray-700 "
        placeholder="Search here..."
        type="text"
      />
    ) : (
      <select
        className="block w-full    border border-none bg-transparent rounded-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 leading-tight"
        // value={selected}
        // onChange={(e) => setSelected(e.target.value)}
      >
        <option value="">Choose an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    )}
  </div>
);
const JobCard = () => (
  <div className="w-full h-fit bg-white shadow-lg flex flex-col p-5 rounded-xl gap-10">
    <div className="w-full flex items-center  gap-3 flex-col lg:flex-row">
      <img src="/JobLogo.svg" alt="" />
      <div className="w-full flex flex-col ">
        <h1 className="text-[1.5rem] font-poppins font-semibold ">
          Designer Team Lead
        </h1>
        <span>Bauch, Schuppe and Schulist Co</span>
      </div>
    </div>
    <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
      <Artributes />
      <Artributes />
      <Artributes />
      <Artributes />
      <div className=" py-2 px-4 bg-transparent border border-[#4A2848] rounded-lg text-center">
        <span className="text-[#4A2848] font-poppins font-semibold">
          Detail
        </span>
      </div>
      <div className=" py-2 px-4 bg-[#4A2848] rounded-lg text-center">
        <span className="text-white font-poppins font-semibold">Apply</span>
      </div>
    </div>
  </div>
);
const Artributes = () => (
  <div className="flex items-center gap-2">
    <div className="w-[20px] h-[20px] text-[#4A2848] flex items-center justify-center">
      <i class="fas fa-hotel text-sm"></i>
    </div>
    <span className="text-[#6C757D]">Hotels & Tourism</span>
  </div>
);
