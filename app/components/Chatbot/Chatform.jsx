import React, { useState, useRef } from "react";

function Chatform({ chatHistory,setChatHistory ,generateBotResponse}) {
  const [message, setMessage] = useState("");
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = message.trim();
    if (!userMessage) return;
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);
    setMessage("");
       setChatHistory((history) => [
        ...history,
        { role: "model", text: "thinking..." },
      ]);
    generateBotResponse([...chatHistory, { role: "model", text: `using the details provided above, please address this query:${userMessage}` }])
    // Clear input after sending
  };

  return (
    <form
      action="#"
      className="w-[90%] flex mx-auto pl-2 pr-2 py-2 bg-white border border-[#CCCCE5] rounded-[32px] gap-2 focus-within:border-[#4A2848]"
      onSubmit={handleFormSubmit}
    >
      <input
        type="text"
        ref={inputRef}
        placeholder="Message..."
        className="border-none outline-none w-[100%] bg-transparent text-[0.92rem]"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      {/* Show button only when input has text */}
      <button
        type="submit"
        className={`${
          message ? "flex" : "hidden"
        } h-[35px] w-[35px] border-none text-[2.15rem] bg-[#4A2848] items-center justify-center text-white rounded-full`}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon-2xl"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.1918 8.90615C15.6381 8.45983 16.3618 8.45983 16.8081 8.90615L21.9509 14.049C22.3972 14.4953 22.3972 15.2189 21.9509 15.6652C21.5046 16.1116 20.781 16.1116 20.3347 15.6652L17.1428 12.4734V22.2857C17.1428 22.9169 16.6311 23.4286 15.9999 23.4286C15.3688 23.4286 14.8571 22.9169 14.8571 22.2857V12.4734L11.6652 15.6652C11.2189 16.1116 10.4953 16.1116 10.049 15.6652C9.60265 15.2189 9.60265 14.4953 10.049 14.049L15.1918 8.90615Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </form>
  );
}

export default Chatform;
