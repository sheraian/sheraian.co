import React from 'react'
import ChatbotIcon from './ChatbotIcon'

function Chatmessage({chat}) {
  return chat.role=='model'?(
    <div className="message flex items-center gap-[10px]">
    <ChatbotIcon />
    <p className="max-w-[75%] text-sm lg:text-md py-[12px] px-[16px] bg-[#F6F2FF] rounded-[13px]">
      {chat.text}
    </p>
  </div>
  ):(
    <div className={`max-w-[75%]  w-fit text-white py-[12px] px-[16px]  bg-[#6D4FC2] rounded-[13px] ml-auto`}>
          


              <p className="w-fit text-sm lg:text-md">
            {chat.text}
          </p>
        </div>
  )
}

export default Chatmessage