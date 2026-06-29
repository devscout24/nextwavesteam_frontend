import type { TPreOrder } from "~/types"
import { MdStars } from "react-icons/md"
import { Button } from "../ui/button"
import { useNavigate } from "react-router"

export default function PreOrderCard({
  id,
  product_name,
  description,
  image_url,
}: TPreOrder) {
  const navigate = useNavigate()

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Badge */}
      <div className="yellowbtn absolute right-3 top-3 flex w-fit items-center gap-1 py-1! text-[11px]! sm:text-xs!">
        <MdStars className="text-sm" />
        <span>PRE-ORDER</span>
      </div>

      {/* Image */}
      <img
        src={image_url}
        alt={product_name}
        className="h-52 w-full object-cover sm:h-60 md:h-64 lg:h-72"
      />

      {/* Content */}
      <div className="flex flex-col p-4 sm:p-5">
        <h2 className="font-inter text-lg font-medium text-[#1E1E24] sm:text-xl">
          {product_name}
        </h2>

        <p className="commonP mt-2 line-clamp-2 flex-1 text-sm sm:text-base">
          {description}
        </p>

        <Button
          onClick={() =>
            navigate(`/products?showing_productID=${id}`)
          }
          className="mt-6 w-full rounded-full bg-[#5A38F5] py-5 text-sm font-medium text-white sm:text-base"
        >
          View Item
        </Button>
      </div>
    </div>
  )
}