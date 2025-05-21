import { motion } from "framer-motion";
import Btn from "../Btn";

function PortfolioHero({ P_BtnText, H_Text, M_Text,links ,img}) {
  const formattedText =
    M_Text.charAt(0).toUpperCase() + M_Text.slice(1).toLowerCase();

  return (
    <motion.div
      className="w-full h-auto md:h-[550px] bg-[url(/herobg.svg)] bg-cover bg-center flex items-center justify-center py-6 md:py-8 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center gap-5 lg:gap-6 justify-between">
      <motion.div
          className="w-full md:w-[40%] flex md:hidden items-start justify-start"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src={img}
            className="max-w-full lg:h-[520px] object-contain"
            alt=""
          />
        </motion.div>
        <motion.div
          className="w-full md:w-[55%] flex flex-col items-start gap-4 text-left"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="py-2.5 px-8 bg-[#D7D5DF] rounded-full shadow-md hover:bg-[#C5C3CF] transition duration-300 cursor-pointer">
            <h1 className=" text-[#4A2848] font-bold text-lg text-center capitalize">
              {P_BtnText}
            </h1>
          </div>

          <span className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-semibold leading-[1.2] break-words capitalize">
            {H_Text}
          </span>

          <p className="w-full md:w-[80%] text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 capitalize">
            {formattedText}
          </p>
         {links&&(

          <div className="flex gap-2 md:gap-5 flex-wrap">
            <img src="/playstore.svg" alt="" />
            <img src="/playstore.svg" alt="" />
          </div>
         )
          }
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full hidden md:w-[40%] md:flex items-start justify-start bg-cayn-500"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src={img}
            className="max-w-full lg:h-[500px] object-contain rounded-md mt-10"
            alt=""
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default PortfolioHero;
