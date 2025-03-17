const PriceCard = ({ imgSrc , flag = 'text-black', features = [] }) => {
    return (
      <div
        className={`w-[90%] rounded-[2rem] md:rounded-none mx-auto md:mx-0 md:w-[370px]  md:rounded-tl-[3rem] md:rounded-br-[3rem] px-12 py-10 md:py-16 bg-cover bg-center hover:scale-105 transition-transform duration-300 ease-in-out `}
        style={{ backgroundImage: `url(${imgSrc ? imgSrc : "frame1.png"})` }}
       
      >
        <h3 className={`font-semibold text-xl ${flag}`}>Starter Plan</h3>
        <p className={`text-sm pt-3 pb-7 ${flag} hover:scale-105 transition-transform duration-300 ease-in-out`}>
          Ideal for small businesses and startups looking to establish an online presence.
        </p>
        <ul className="leading-10 font-semibold">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <img src={feature.icon} className="w-4 h-4" alt="list_icon" />
              <span className={`${flag} hover:scale-105 transition-transform duration-300 ease-in-out`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
        <h1 className={`pt-6 text-3xl font-bold ${flag} hover:scale-105 transition-transform duration-300 ease-in-out`}>
          $299.00<sub className="text-sm">/Month</sub>
        </h1>
      </div>
    );
  };
  
  export default PriceCard;
  