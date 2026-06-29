import Container from "~/components/common/container"
import ShippingInfo from "~/components/custom/shiping-info"
import { BsPatchCheckFill } from "react-icons/bs"
import { Link } from "react-router"
import { ArrowRight, Link2, Lock } from "lucide-react"
import { Button } from "~/components/ui/button"

export default function Checkout({}: {}) {
  return (
    <div className="bg-[#FBFBFF] py-25">
      <Container>
        {/* Breadcrumb */}
        <p className="text-sm text-gray-400">
          Home <span className="mx-2">/</span>
          Cart <span className="mx-2">/</span>
          <span className="text-indigo-600">Checkout</span>
        </p>

        {/* Heading */}
        <h1 className="mt-2 text-4xl font-bold text-gray-900">Checkout</h1>
        <p className="mt-1 text-gray-500">
          Complete your pre-order for this exclusive collectible.
        </p>

        <div className="mt-8 flex items-start gap-8">
          <ShippingInfo />

          {/* order summary */}
          <div className="w-120 rounded-xl bg-white p-4 shadow-sm">
            <h2 className="text-xl text-[#1E1E24]">Order Summary</h2>

            <div className="mt-4 flex gap-2">
              <img
                src="/images/cartitem.png"
                alt="cart item"
                className="w-30"
              />

              <div className="">
                <p className=" ">Official Signed Jersey</p>
                <p className="">$499</p>
                <p className="text-[#5C3AF5]">Rohit Sharma</p>
                <p className="flex items-center gap-1 text-[#F5C542]">
                  <BsPatchCheckFill />
                  <span className="">100% Authenticity Guaranteed</span>
                </p>

                <p className="mt-4 font-inter text-[12px] text-[#474651]">
                  "This jersey is personally signed by Rohit Sharma and comes
                  with a digital Certificate of Authenticity (COA) recorded on
                  the blockchain."
                </p>
              </div>
            </div>
            <div className="mt-7 flex items-center justify-between border-t border-primary/10 pt-7">
              <p className="">Total : </p>
              <p className="text-2xl font-bold text-[#1E1E24]">$499.00</p>
            </div>
            <Link
              to="/order-confirmation"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 py-3! font-medium text-white transition hover:bg-indigo-700"
            >
              Complete Pre-Order
              <ArrowRight size={18} />
            </Link>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
              <Lock size={12} />
              Secure encrypted checkout
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
