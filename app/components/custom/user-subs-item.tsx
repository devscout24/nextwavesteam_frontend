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
    <div className="flex flex-col gap-4 rounded-2xl border border-primary/10 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Left */}
      <div className="flex items-center gap-4 min-w-0">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 flex-shrink-0 rounded-full object-cover"
        />

        <div className="min-w-0">
          <h3 className="truncate font-semibold text-[#1E1E24]">
            {name}
          </h3>

          <p className="commonP text-xs">
            {date}
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center justify-between border-t pt-4 sm:border-none sm:pt-0 sm:flex-col sm:items-end sm:justify-center">
        <div className="flex flex-col items-start sm:items-end">
          <p className="font-semibold text-primary">
            {price}
          </p>

          <span className="mt-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
            {status}
          </span>
        </div>

        <Button className="bg-transparent p-0 text-[#717182] hover:bg-transparent hover:text-red-500 sm:mt-2">
          Cancel
        </Button>
      </div>
    </div>
  )
}