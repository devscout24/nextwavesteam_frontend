import { ArrowRight, Lock } from "lucide-react"
import { Link } from "react-router"

export default function CartSummary({}: {}) {
  return (
    <div className="h-fit rounded-3xl bg-white p-6 shadow-xl shadow-indigo-100/40">
      <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>

      <div className="mt-6 space-y-4 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Subtotal</span>
          <span>$499.00</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Shipping</span>
          <span className="font-semibold text-green-500">Free</span>
        </div>
      </div>

      <div className="my-6 border-t" />

      <div className="flex items-center justify-between">
        <span className="font-semibold">Total</span>

        <span className="text-lg font-bold">$499.00</span>
      </div>

      <Link
        to="/checkout"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 py-4 font-medium text-white transition hover:bg-indigo-700"
      >
        Proceed to Checkout
        <ArrowRight size={18} />
      </Link>

      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
        <Lock size={12} />
        Secure encrypted checkout
      </div>
    </div>
  )
}
