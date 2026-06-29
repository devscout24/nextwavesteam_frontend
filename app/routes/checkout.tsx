import { BsPatchCheckFill } from "react-icons/bs"
import { ArrowRight, Lock } from "lucide-react"
import { Link } from "react-router"

import Container from "~/components/common/container"
import ShippingInfo from "~/components/custom/shiping-info"

export default function Checkout() {
  return (
    <section className="bg-[#FBFBFF]  py-25">
      <Container>
        {/* Breadcrumb */}
        <p className="text-sm text-gray-400">
          Home <span className="mx-2">/</span>
          Cart <span className="mx-2">/</span>
          <span className="text-indigo-600">Checkout</span>
        </p>

        {/* Heading */}
        <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
          Checkout
        </h1>

        <p className="mt-2 text-sm text-gray-500 sm:text-base">
          Complete your pre-order for this exclusive collectible.
        </p>

        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-start">
          {/* Shipping */}
          <div className="flex-1">
            <ShippingInfo />
          </div>

          {/* Order Summary */}
          <div className="w-full rounded-2xl bg-white p-5 shadow-sm lg:w-105 lg:sticky lg:top-28">
            <h2 className="text-xl font-semibold text-[#1E1E24]">
              Order Summary
            </h2>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row">
              <img
                src="/images/cartitem.png"
                alt="cart item"
                className="h-32 w-full rounded-xl object-cover sm:h-28 sm:w-28"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-[#1E1E24]">
                  Official Signed Jersey
                </h3>

                <p className="mt-1 text-lg font-semibold">$499</p>

                <p className="mt-1 text-[#5C3AF5]">
                  Rohit Sharma
                </p>

                <p className="mt-2 flex items-center gap-2 text-sm text-[#F5C542]">
                  <BsPatchCheckFill />
                  <span>100% Authenticity Guaranteed</span>
                </p>

                <p className="mt-4 text-xs leading-6 text-[#474651]">
                  "This jersey is personally signed by Rohit Sharma and comes
                  with a digital Certificate of Authenticity (COA) recorded on
                  the blockchain."
                </p>
              </div>
            </div>

            <div className="mt-7 flex items-center justify-between border-t border-primary/10 pt-6">
              <span className="font-medium">Total</span>

              <span className="text-2xl font-bold text-[#1E1E24]">
                $499.00
              </span>
            </div>

            <Link
              to="/order-confirmation"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-center font-medium text-white transition hover:bg-indigo-700"
            >
              Complete Pre-Order
              <ArrowRight size={18} />
            </Link>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
              <Lock size={14} />
              Secure encrypted checkout
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}