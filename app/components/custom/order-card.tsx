import { ChevronRight } from "lucide-react"
import type { TOrderCard } from "~/types"

export default function ProductOrderCard({
  product_name = "",
  shipping_status = "",
  price,
  date,
  order_id,
}: TOrderCard) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4">
      {/* Left */}
      <div className="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=300"
          alt="Signed Cricket Bat"
          className="h-14 w-14 rounded-xl object-cover"
        />

        <div>
          <h3 className="text-base font-semibold text-gray-900">
            {product_name}
          </h3>

          {/* <p className="text-sm text-gray-400">
            Virat Kohli
          </p> */}

          <span className="mt-2 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
            {shipping_status}
          </span>
        </div>
      </div>

      {/* Right */}
      <div className="text-right">
        <h3 className="text-xl font-bold text-violet-600">₹{price}</h3>

        <p className="mt-1 text-xs text-gray-400">{date}</p>

        <p className="text-xs text-gray-400">{order_id}</p>

        <button className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-violet-600 hover:text-violet-700">
          Track Order
          <ChevronRight size={15} />
        </button>
      </div>
    </div>
  )
}
