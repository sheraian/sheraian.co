const PriceCard = ({ imgSrc , flag = 'text-black', features ,icon }) => {
    return (
      <div
        className={`w-[100%] rounded-[2rem] lg:rounded-none mx-auto lg:mx-0 lg:w-[370px]  lg:rounded-tl-[3rem] lg:rounded-br-[3rem] px-12 py-10 lg:py-16 bg-cover bg-center lg:hover:scale-105 transition-transform duration-300 ease-in-out `}
        style={{ backgroundImage: `url(${imgSrc ? imgSrc : "frame1.png"})` }}
       
      >
        <h3 className={`font-semibold text-xl ${flag}`}>{features?.type}</h3>
        <p className={`text-sm pt-3 pb-7 ${flag} hover:scale-105 transition-transform duration-300 ease-in-out`}>
          {features?.short_desc}
        </p>
        <ul className="leading-10 font-semibold">
          {features?.price_points.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <img src={icon} className="w-4 h-4" alt="list_icon" />
              <span className={`${flag} hover:scale-105 transition-transform duration-300 ease-in-out`}>
                {feature.point}
              </span>
            </li>
          ))}
        </ul>
        <h1 className={`pt-6 text-3xl font-bold ${flag} hover:scale-105 transition-transform duration-300 ease-in-out`}>
          {features?.currency_type}
          {features?.price}
          {/* <sub className="text-sm">/Month</sub> */}
        </h1>
      </div>
    );
  };
  
  export default PriceCard;
  