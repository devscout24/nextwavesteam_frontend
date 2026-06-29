import { FaStar } from "react-icons/fa"
import { Link } from "react-router"
import type { TPlayerCard } from "~/types"

export default function PlayerCard({
  image_url,
  name,
  role,
  rating,
  id,   
}:  TPlayerCard ) {
  return (
    <div className="rounded-xl shadow-sm">
      <img src={image_url} alt={name} className="h-full max-h-50 w-full" />

      <div className="p-3">
        <div className="flex items-center justify-between ">
          <div className="">
            <h3 className="pt-2 text-lg font-semibold text-[#1E1E24]">
              {name}
            </h3>
            <p className="text-sm text-[#717182]">{role}</p>
          </div>
          <div className="flex items-center gap-2 text-[#F5C542]">
            <FaStar />
            <span className="text-lg font-bold text-[#F5C542]"> {rating}</span>
          </div>
        </div>

        <Link to={`/players/${id}`} className="inline-block w-full bg-[#5A38F5] text-white font-inter font-medium text-base py-2! text-center rounded-full mt-4       ">
          View Profile
        </Link>
      </div>
    </div>
  )
}
