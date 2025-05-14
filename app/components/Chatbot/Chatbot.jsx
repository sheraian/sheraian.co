import React, { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./ChatbotIcon";
import Chatform from "./Chatform";
import Chatmessage from "./Chatmessage";
import { companyinfo } from "./CompanyInfo";

function Chatbot({ showChatbot,onpress }) {
  const chatEndRef = useRef(null);
  const [chatHistory, setChatHistory] = useState([{
    hideInChat:true,

    role:"model",
    text:companyinfo
  }]);
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);
  const generateBotResponse = async (history,isError=false) => {
    const updateHistory = (text) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "thinking..."),
        { role: "model", text,isError },
      ]);
    };

    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };

    try {

      const response = await fetch(
        import.meta.env.VITE_API_URL,
        requestOptions
      );
      const data = await response.json();

      if (!response.ok){

        throw new Error(data.error?.message || "Something went wrong!");
        
      }
      const apiResponseText = data.candidates[0].content.parts[0].text
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .trim();
    updateHistory(apiResponseText);

     
      return data;
    } catch (error) {
      console.error("Error:", error.message);
      updateHistory(error.message,isError=true);


    }
  };

  return (
    <div
      className={`fixed inset-0 h-fully overflow-hidden lg:h-fit  flex items-center justify-center z-50 ${showChatbot ? "" : "opacity-0 pointer-events-none"}`}
    >
<div
  className={`fixed w-[100%] h-[100%] lg:h-fit lg:w-[420px] mx-auto bg-white lg:rounded-lg  lg:bottom-[90px] lg:right-20 overflow-hidden transition-all duration-500 transform ease-in-out ${
    showChatbot
      ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
      : "opacity-0 translate-y-10 scale-95 pointer-events-none"
  }`}
>
        <div className="flex items-center bg-[#4A2848] justify-between rounded-none lg:rounded-tl-lg py-[15px] px-[10px] lg:rounded-tr-lg ">
          <div className="flex items-center gap-[10px]">
            <div className="header-info cursor-pointer"
            >
              <ChatbotIcon  />
            </div>
            <h2 className="text-white text-[1.31rem] font-[600]"> Chatbot</h2>
          </div>
          <button className="h-[40px] w-[40px] border-none outline-none bg-[#4A2848] shadow-2xl text-[1.5rem] text-white mr-[0.2rem]"
            onClick={onpress}
          >
            <i className={`fas  fa-chevron-down `} />
          </button>
        </div>
        <div className=" flex flex-col  gap-[20px] py-[25px] px-[22px] h-[80%] lg:h-[420px] overflow-y-auto mb-[4rem] scrollbar-thin">
          <div className="message flex items-center gap-[10px]">
            <ChatbotIcon />
            <p className="max-w-[75%] text-sm lg:text-md py-[12px] px-[16px] bg-[#F6F2FF] rounded-[13px]">
              Hey there <br /> How can i help you today?
            </p>
          </div>
          {chatHistory.map((e, index) => (
            <Chatmessage key={index} chat={e} />
          ))}
             <div ref={chatEndRef} />
        </div>
        <div className="absolute bottom-0 w-[100%] py-[15px]  flex items-center">
          <Chatform
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
