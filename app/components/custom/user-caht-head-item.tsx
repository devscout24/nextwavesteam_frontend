import type { TUserChatCard } from "~/types"
import { Button } from "../ui/button"
import { SlArrowRight } from "react-icons/sl"
import { useNavigate } from "react-router"

export default function UserChatHeadItem({
  name,
  image,
  last_message,
  last_message_time,
}: TUserChatCard) {

  const navigate = useNavigate()

  return (
    <div
      className="flex flex-col gap-4 rounded-2xl border-l-4 border-[#5A38F5] bg-white p-4 shadow-md sm:flex-row sm:items-center sm:justify-between"
      onClick={() => navigate("/message")}
    >
      {/* Left */}
      <div className="flex items-center gap-4 min-w-0">
        <img
          src={image}
          alt={name}
          className="h-12 w-12  shrink-0 rounded-full object-cover"
        />

        <div className="min-w-0 flex-1">
          <h3 className="truncate font-semibold text-[#1E1E24]">
            {name}
          </h3>

          <p className="commonP truncate text-xs">
            {last_message}
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center justify-between border-t pt-3 sm:border-none sm:pt-0 sm:flex-col sm:items-end sm:justify-center">
        <div className="flex items-center gap-2">
          <p className="commonP text-xs">{last_message_time}</p>

          <span className="h-2 w-2 rounded-full bg-[#5A38F5]" />
        </div>

        <Button className="mt-0 bg-transparent p-0 text-[#5A38F5] hover:bg-transparent sm:mt-2">
          <span>Open</span>
          <SlArrowRight className="ml-1 size-3" />
        </Button>
      </div>
    </div>
  )
}