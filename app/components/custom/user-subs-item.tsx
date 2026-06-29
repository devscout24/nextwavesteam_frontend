import type { TUserSubscription } from "~/types"
import { Button } from "../ui/button"

export default function UserSubsItem({
  image,
  name,
  date,
  price,
  status,
}: TUserSubscription) {
  return (
    <div className="flex items-center  rounded-2xl border border-primary/10 p-4 ">
      <img src={image} alt="User Avatar" className="h-12 w-12 rounded-full" />

      <div className="ml-5">
        <h3 className="">{name}</h3>
        <p className="commonP text-[12px]">{date}</p>
      </div>

      <div className="ml-auto flex flex-col items-end   ">
        <p className="commonP text-[12px]">{price}</p>
        <p className="rounded-full bg-primary/20 px-3 py-1 text-primary">
          {status}
        </p>
        <Button className="bg-transparent text-right text-[#717182] hover:bg-transparent">
          <span className="">Cancel</span>
        </Button>
      </div>
    </div>
  )
}
