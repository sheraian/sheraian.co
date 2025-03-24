import Btn from "../Btn";

function PortfolioHero({
  P_BtnText,
  H_Text,
  M_Text,
  isSBtnShow = false,
  S_BtnText = "",
}) {
  const formattedText =
    M_Text.charAt(0).toUpperCase() + M_Text.slice(1).toLowerCase();

  return (
    <div className="w-full h-auto md:h-[550px] bg-[url(/herobg.svg)] bg-cover bg-center flex items-center justify-center py-6 md:py-8 px-4">
    <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center gap-5 lg:gap-6">
      
      <div className="w-full md:w-[60%] flex flex-col items-start gap-4 text-left">
        
        <div className="py-2.5 px-8 bg-[#D7D5DF] rounded-full shadow-md hover:bg-[#C5C3CF] transition duration-300 cursor-pointer">
          <h1 className="text-[#4A2848] font-bold text-lg text-center capitalize">
            {P_BtnText}
          </h1>
        </div>
  
        <span className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-semibold leading-[1.2] break-words capitalize">
          {H_Text}
        </span>
  
        <p className="w-full md:w-[80%] text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 capitalize">
          {formattedText}
        </p>
      </div>
  
      <div className="w-full md:w-[40%] flex items-start justify-start ">
        <img src="/ptf_logo.png" className="max-w-full lg:h-[520px] object-contain" alt="" />
      </div>
  
    </div>
  </div>
  
  );
}

export default PortfolioHero;
