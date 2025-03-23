import Btn from "../Btn";

function HeroBlog({
  P_BtnText,
  H_Text,
  M_Text,
  isSBtnShow = false,
  S_BtnText = "",
}) {
  const formattedText = M_Text.charAt(0).toUpperCase() + M_Text.slice(1).toLowerCase();

  return (
    <div className="w-full h-auto md:h-[500px] bg-[url(/herobg.svg)] bg-cover bg-center flex flex-col items-center justify-center gap-4 py-6 md:py-8 md:gap-5 px-4">
      <div className="py-2.5 px-8 bg-[#D7D5DF] rounded-full shadow-md hover:bg-[#C5C3CF] transition duration-300 cursor-pointer">
        <h1 className="text-[#4A2848] font-bold text-lg text-center capitalize">
          {P_BtnText}
        </h1>
      </div>

      <span className="w-[90%] md:w-[70%] lg:w-[60%] text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-semibold text-center leading-[2.5rem] sm:leading-[3rem] md:leading-[4rem] lg:leading-[4.5rem] break-words capitalize">
        {H_Text}
      </span>

      <p className="w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]  mx-auto text-center font-inter text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 capitalize">
        {formattedText}
      </p>

      {isSBtnShow ? <Btn S_BtnText={"Explore More"} /> : null}
    </div>
  );
}

export default HeroBlog;
