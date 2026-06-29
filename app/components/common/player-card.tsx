import { FaStar } from "react-icons/fa"
import { Link } from "react-router"
import type { TPlayerCard } from "~/types"

export default function PlayerCard({
  image_url,
  name,
  role,
  rating,
  id,
}: TPlayerCard) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <img
        src={image_url}
        alt={name}
        className="h-52 w-full object-cover sm:h-60 md:h-64"
      />

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-lg font-semibold text-[#1E1E24] sm:text-xl">
              {name}
            </h3>

            <p className="mt-1 text-sm text-[#717182]">
              {role}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-1 rounded-full bg-[#FFF8E1] px-2 py-1">
            <FaStar className="text-sm text-[#F5C542]" />
            <span className="text-sm font-semibold text-[#F5C542] sm:text-base">
              {rating}
            </span>
          </div>
        </div>

        <Link
          to={`/players/${id}`}
          className="mt-5 flex w-full items-center justify-center rounded-full bg-[#5A38F5] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#4C2FE0] sm:text-base"
        >
          View Profile
        </Link>
      </div>
    </div>
  )
}