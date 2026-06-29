import type { TChatHead } from "~/types"

export default function ChatHead({
  image,
  name,
  lastMessage,
  lastMessageTime,
  unread_count,
  is_active,
  onClick,
}: TChatHead) {
  return (
    <div
      onClick={onClick}
      className={`
        relative cursor-pointer transition-all

        /* Mobile */
        flex justify-center p-2

        /* Desktop */
        md:flex md:items-center md:p-4 md:border-l-4 md:border-r-0 md:border-t-0 md:border-b-0

        ${
          is_active
            ? "md:border-[#5A38F5]/50 md:bg-[#5A38F5]/10"
            : "md:border-transparent md:bg-transparent"
        }
      `}
    >
      {/* Avatar */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className={`
            rounded-full object-cover transition-all
            h-14 w-14
            md:h-12 md:w-12
            ${is_active ? "ring-2 ring-[#5A38F5]" : ""}
          `}
        />

        {/* Mobile unread badge */}
        {unread_count && unread_count > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#5A38F5] text-[10px] font-bold text-white md:hidden">
            {unread_count}
          </span>
        )}
      </div>

      {/* Desktop Content */}
      <div className="ml-3 hidden flex-1 md:block">
        <h3 className="font-bold text-[#1A1A2E]">{name}</h3>

        <p
          className={`text-[12px] font-semibold ${
            unread_count && unread_count > 0
              ? "text-[#1A1A2E]"
              : "text-[#717182]"
          }`}
        >
          {lastMessage}
        </p>
      </div>

      {/* Desktop Right Side */}
      <div className="ml-auto hidden text-right md:block">
        <p className="text-[12px] text-[#717182]">{lastMessageTime}</p>

        {unread_count && unread_count > 0 && (
          <span className="ml-auto mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#5A38F5] text-xs font-bold text-white">
            {unread_count}
          </span>
        )}
      </div>
    </div>
  )
}