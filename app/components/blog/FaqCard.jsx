
const FaqCard = ({ keyId, title, description,selected,onPress }) => {
  return (
    <div className="w-[95%] md:w-[80%] mx-auto flex flex-col bg-white rounded-lg py-5 px-4 border-2 border-[#A8A8A8] transition-all duration-500 ease-in-out">
      <div className="w-full flex items-center justify-between cursor-pointer gap-3" onClick={onPress}>
        <span className="font-poppins text-sm font-bold md:text-[1.2rem]">{title}</span>
        <img
          className={`w-[20px] h-[20px] md:w-[35px] md:h-[35px] cursor-pointer transition-transform duration-300 ${selected==keyId ? "rotate-180" : "rotate-0"}`}
          src={selected==keyId ? "/Closer.png" : "/Opener.png"}
          alt="faq-icon"
        />
      </div>

      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${selected==keyId ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-[0.9rem] font-poppins font-normal mt-2 text-left">{description}</p>
      </div>
    </div>
  );
};

export default FaqCard;
