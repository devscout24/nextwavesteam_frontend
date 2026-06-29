import type { TUserChatCard } from "~/types"
import { Button } from "../ui/button"
import { SlArrowRight } from "react-icons/sl"

export default function UserChatHeadItem({
  name,
  image,
  last_message,
  last_message_time,
}: TUserChatCard) {
  return (
    <div className="flex rounded-2xl border-l-3 border-[#5A38F5] p-4 shadow-md">
      <img src={image} alt="User Avatar" className="h-12 w-12 rounded-full" />

      <div className="ml-5">
        <h3 className="">{name}</h3>
        <p className="commonP text-[12px]">{last_message}</p>
      </div>

      <div className="ml-auto">
        <p className="commonP text-[12px]">{last_message_time}</p>
        <p className="mt-1 ml-auto h-2 w-2 rounded-full bg-[#5A38F5]" />
        <Button className="bg-transparent text-right text-[#5A38F5] hover:bg-transparent">
          <span className="">Open</span>
          <SlArrowRight className="size-2" />
        </Button>
      </div>
    </div>
  )
}
