import { Minus, Plus } from "lucide-react"
import React from "react"
import { FaStar } from "react-icons/fa"

export default function CartItem({ tag , price }: { tag?: string; price: number }) {
  const [count, setCount] = React.useState(1)

  const handleQuantityChange = (clickType: string) => {
    if (clickType === "increment") {
      setCount(count + 1)
    }

    if (clickType === "decrement") {
      if (count > 1) {
        setCount(count - 1)
      }
    }
  }

  return (
    <div className="grid grid-cols-4 items-center gap-4 px-4 py-6">
      {/* Product */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src="/images/cartitem.png"
            alt="Jersey"
            className="h-16 w-16 rounded-lg border object-cover"
          />
        </div>

        <div>
          <h3 className="line-clamp-2 font-semibold text-primary">
            Official Signed Jersey
          </h3>

          <p className="flex items-center gap-1 text-sm text-indigo-600">
            <FaStar />
            Virat Kohli
          </p>
        </div>
      </div>

      {/* Quantity */}
      <div className="flex justify-center">
        <div className="flex items-center gap-4 rounded-full border px-4 py-2">
          <button onClick={() => handleQuantityChange("decrement")}>
            <Minus size={16} />
          </button>

          <span>{count}</span>

          <button onClick={() => handleQuantityChange("increment")}>
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Price */}
      <p className="text-center text-gray-500">${price.toFixed(2)}</p>

      {/* Subtotal */}
      <p className="text-right text-xl font-bold text-gray-900">
        ${(price * count).toFixed(2)}
      </p>
    </div>
  )
}
