import type { TChatHead } from "~/types"
import { AnimatedTabs } from "../common/aminated-tab"
import { Input } from "../ui/input"
import React from "react";

export default function ChatHead({
  id,
  image,
  name,
  lastMessage,
  lastMessageTime,
  unread_count,
  is_active,
  onClick,
}: TChatHead) {

 

  return (
    <div onClick={onClick} className={`flex p-4 border-l-4 border-r-0 border-t-0 border-b-0    ${is_active ? "border-[#5A38F5]/50 bg-[#5A38F5]/10  " : "border-transparent bg-transparent "  }     `}>
      <img
        src={image}
        alt={name}
        className="h-12 w-12 rounded-full object-cover"
      />

      <div className="ml-3">
        <h3 className="font-bold text-[#1A1A2E]">{name}</h3>
        <p
          className={`text-[12px] font-semibold ${unread_count && unread_count > 0 ? "text-[#1A1A2E]" : "text-[#717182]"} `}
        >
          {lastMessage}
        </p>
      </div>

      <div className="ml-auto text-right">
        <p className="text-[12px] text-[#717182]">{lastMessageTime}</p>
        {unread_count && unread_count > 0 && (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5A38F5] text-xs font-bold text-white ml-auto  ">
            {unread_count}
          </span>
        )}
      </div>
    </div>
  )
}
