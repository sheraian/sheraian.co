import React from "react";
import Btn from "../../components/Btn";

function NotFound() {
  return (
    <div className="w-[100%] lg:py-16 ">
      <div className="w-full lg:w-[90%] mx-auto  h-screen flex flex-col justify-start items-center bg-[url('/404.svg')] bg-no-repeat bg-cover rounded-xl gap-10">
        <img src="/404_icon.svg" className="w-full h-[300px]" alt="" />
        <div className="text-center">
          <h1 className="lg:text-6xl font-bold text-gray-800">Opps!</h1>
          <p className="text-xl text-gray-600 mt-4">Page Not Found</p>
        </div>
        <Btn
          S_BtnText="Back To Home"
          onpress={() => {
            window.location.href = "/";
          }}
        />
      </div>
    </div>
  );
}

export default NotFound;
