import React from "react"
import { Minus, Plus } from "lucide-react"
import { FaStar } from "react-icons/fa"

export default function CartItem({
  tag,
  price,
}: {
  tag?: string
  price: number
}) {
  const [count, setCount] = React.useState(1)

  const handleQuantityChange = (type: "increment" | "decrement") => {
    if (type === "increment") {
      setCount((prev) => prev + 1)
    } else {
      setCount((prev) => (prev > 1 ? prev - 1 : 1))
    }
  }

  return (
    <div className="grid gap-6 border-b border-gray-100 py-6 md:grid-cols-4 md:items-center md:px-4">
      {/* Product */}
      <div className="flex items-center gap-4">
        <img
          src="/images/cartitem.png"
          alt="Official Signed Jersey"
          className="h-20 w-20 shrink-0 rounded-xl border object-cover"
        />

        <div className="min-w-0 flex-1">
          <h3 className="line-clamp-2 text-base font-semibold text-primary">
            Official Signed Jersey
          </h3>

          <p className="mt-1 flex items-center gap-1 text-sm text-indigo-600">
            <FaStar className="text-yellow-400" />
            Virat Kohli
          </p>

          {tag && (
            <span className="mt-2 inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
              {tag}
            </span>
          )}
        </div>
      </div>

      {/* Quantity */}
      <div className="flex items-center justify-between md:justify-center">
        <span className="text-sm font-medium text-gray-500 md:hidden">
          Quantity
        </span>

        <div className="flex items-center gap-5 rounded-full border px-4 py-2">
          <button
            onClick={() => handleQuantityChange("decrement")}
            className="text-gray-600 transition hover:text-indigo-600"
          >
            <Minus size={16} />
          </button>

          <span className="min-w-5 text-center font-medium">{count}</span>

          <button
            onClick={() => handleQuantityChange("increment")}
            className="text-gray-600 transition hover:text-indigo-600"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between md:block md:text-center">
        <span className="text-sm font-medium text-gray-500 md:hidden">
          Price
        </span>

        <p className="text-gray-600">${price.toFixed(2)}</p>
      </div>

      {/* Subtotal */}
      <div className="flex items-center justify-between md:block md:text-right">
        <span className="text-sm font-medium text-gray-500 md:hidden">
          Subtotal
        </span>

        <p className="text-xl font-bold text-gray-900">
          ${(price * count).toFixed(2)}
        </p>
      </div>
    </div>
  )
}