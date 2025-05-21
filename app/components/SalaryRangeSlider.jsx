import React, { useState } from "react";
import ReactSlider from "react-slider";

const SalaryRangeSlider = ({
  initialRange = [30000, 120000],
  minLimit = 20000,
  maxLimit = 150000,
  step = 5000,
  currency = "$",
  className = "",
}) => {
  const [salary, setSalary] = useState(initialRange);

  const formatCurrency = (value) => {
    return `${currency}${value.toLocaleString()}`;
  };

  const handleSliderChange = (value) => {
    if (Array.isArray(value)) {
      setSalary(value);
    }
  };

  return (
    <div className={`w-full flex flex-col gap-4 ${className}`}>
      <h3 className="text-base font-semibold text-gray-800">Salary Range</h3>

      <ReactSlider
        className="w-full h-2 bg-gray-200 rounded-full"
        thumbClassName="w-5 h-5 bg-blue-600 border-2 border-white shadow-md rounded-full cursor-grab focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 active:cursor-grabbing"
        trackClassName="h-2 bg-blue-500 rounded-full"
        value={salary}
        min={minLimit}
        max={maxLimit}
        step={step}
        onChange={handleSliderChange}
        minDistance={step}
        ariaLabel={["Minimum salary", "Maximum salary"]}
        ariaValuetext={(value) => `${value} dollars`}
        pearling
      />

      <div className="flex justify-between text-gray-700 font-medium">
        <span aria-label="Minimum salary">
          💰 Min: {formatCurrency(salary[0])}
        </span>
        <span aria-label="Maximum salary">
          💰 Max: {formatCurrency(salary[1])}
        </span>
      </div>
    </div>
  );
};

export default SalaryRangeSlider;
