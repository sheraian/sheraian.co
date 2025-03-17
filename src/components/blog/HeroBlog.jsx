function HeroBlog() {
  return (
     <div className="w-full h-[250px] md:h-[500px] bg-[url(/herobg.svg)] bg-cover bg-center flex flex-col items-center justify-center gap-5 md:gap-10" >
      <div className="py-2.5 px-16 md:px-18 bg-[#D7D5DF] rounded-full ">
        <h1 className="text-[#4A2848] text-sm md:text-[1rem] font-bold ">Blog</h1>
      </div>
      <span className="text-lg md:text-[3.5rem] font-semibold">Blog</span>
      <p className="w-[80%]  text-xs md:text-lg md:w-[39%] mx-auto text-center  font-inter">our company blogs cover a wide range of topics, including new technologies, consumer gadgets, and industry trends</p>
    </div>
  );
}

export default HeroBlog;
