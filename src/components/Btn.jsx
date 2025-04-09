
function Btn({S_BtnText,extra="",textstyle="text-white",onpress}) {
  return (
    <div className={`flex justify-center items-center gap-[11px] pl-[23px] py-[1px] pr-[1px] bg-[#4A2848] rounded-[35px] cursor-pointer group hover:scale-105 ${extra} ` }
    onClick={onpress}
    >
      <p className={`font-inter  text-xs font-semibold md:text-[18px] lmd:eading-[18px] tracking-[0%] cursor-pointer   ${textstyle}`}>
        {S_BtnText}
      </p>
      <img
        className="h-10 md:h-auto rotate-[225deg] transition-transform duration-300 ease-in-out group-hover:rotate-0"
        src="/assets/Navbar/CallToActionArrow.svg"
        alt={S_BtnText}
      />
    </div>
  );
}

export default Btn;
