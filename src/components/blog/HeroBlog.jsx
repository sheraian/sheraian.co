function HeroBlog({ P_BtnText, H_Text, M_Text, isSBtnShow = false, S_BtnText = "" }) {
  return (
    <div className="w-screen h-[500px] bg-[url(/herobg.svg)] bg-cover bg-center flex flex-col items-center justify-center gap-2 md:gap-5">
      <div className="py-2.5 px-20 bg-[#D7D5DF] rounded-full ">
        <h1 className="text-[#4A2848] font-bold ">{P_BtnText}</h1>
      </div>
      <span className="text-[3.5rem] font-semibold text-center leading-[60px]">{H_Text}</span>
      <p className="w-[90%] md:w-[39%] mx-auto text-center font-inter">{M_Text}</p>
      {isSBtnShow ? (
        <div className="flex justify-center items-center gap-[11px] pl-[23px] py-[1px] pr-[1px] bg-[#4A2848] rounded-[35px] cursor-pointer group">
          <p className="font-inter font-semibold text-[18px] leading-[18px] tracking-[0%] align-middle text-white">{S_BtnText}</p>
          <img
            className="rotate-[225deg] transition-transform duration-300 ease-in-out group-hover:rotate-0"
            src="/assets/Navbar/CallToActionArrow.svg"
            alt="Get In Touch"
          />
        </div>
      ) : null}
    </div>
  );
}

export default HeroBlog;
