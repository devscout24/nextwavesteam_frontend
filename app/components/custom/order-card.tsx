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
    <div className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Left */}
      <div className="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=300"
          alt={product_name}
          className="h-16 w-16 flex-shrink-0 rounded-xl object-cover sm:h-18 sm:w-18"
        />

        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-gray-900 sm:text-lg">
            {product_name}
          </h3>

          <span className="mt-2 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
            {shipping_status}
          </span>
        </div>
      </div>

      {/* Right */}
      <div className="border-t pt-4 text-left sm:border-none sm:pt-0 sm:text-right">
        <h3 className="text-2xl font-bold text-violet-600">₹{price}</h3>

        <p className="mt-1 text-sm text-gray-500">{date}</p>

        <p className="text-sm text-gray-400">{order_id}</p>

        <button className="mt-4 flex w-full items-center justify-center gap-1 rounded-full border border-violet-200 px-4 py-2 text-sm font-semibold text-violet-600 transition hover:bg-violet-600 hover:text-white sm:ml-auto sm:inline-flex sm:w-auto sm:border-0 sm:px-0 sm:py-0 sm:hover:bg-transparent sm:hover:text-violet-700">
          Track Order
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  )
}