import { Minus, Plus, Lock, ArrowRight } from "lucide-react";
import Container from "~/components/common/container";
import CartItem from "~/components/custom/cart-item";
import CartSummary from "~/components/custom/cart-summary";

export default function CartPage() {
  return (
    <div className=" bg-[#faf9ff] px-6 py-25">
        <Container>

        {/* Breadcrumb */}
        <p className="text-sm text-gray-400">
          Home <span className="mx-2">/</span>
          <span className="text-indigo-600">Cart</span>
        </p>

        {/* Heading */}
        <h1 className="mt-2 text-4xl font-bold text-gray-900">
          Your Cart
        </h1>
        <p className="mt-1 text-gray-500">
          Pre-orders ship within 30 days.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[2fr_1fr]">
          {/* Cart Items */}
          <div className="rounded-3xl bg-white p-5 shadow-lg shadow-indigo-100/40 h-fit   ">
            {/* Table Header */}
            <div className="grid grid-cols-4 rounded-full bg-gray-100 px-6 py-3 text-xs font-semibold uppercase text-gray-500">
              <span>Product</span>
              <span className="text-center">Quantity</span>
              <span className="text-center">Price</span>
              <span className="text-right">Subtotal</span>
            </div>

            {/* Product Row */}
            <CartItem
              price={499}
            />

          </div>

          {/* Order Summary */}
          <CartSummary/>

        </div>
        </Container> 
    </div>
  );
}