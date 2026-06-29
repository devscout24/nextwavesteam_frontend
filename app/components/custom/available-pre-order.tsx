import type { TPreOrder } from "~/types"
import Container from "../common/container"
import PreOrderCard from "../common/pre-order-card"

export default function AvailablePreOrder() {
  const preOrders: TPreOrder[] = [
    {
      product_name: "Official Team Jersey",
      description:
        "Hand-signed by your choice of player from the current lineup.",
      image_url: "/images/Signed_Jersey.png",
      id: 1,
    },
    {
      product_name: "Signed Match Ball",
      description:
        "Premium red leather ball with authenticated silver signature.",
      image_url: "/images/Signed_Ball.png",
      id: 2,
    },
    {
      product_name: "Willow Grade Bat",
      description:
        "Full-size professional grade cricket bat signed on the blade.",
      image_url: "/images/Signed_Bat.png",
      id: 3,
    },
    {
      product_name: "Signed Photo Frame",
      description:
        "High-resolution action photo in a premium museum-grade frame.",
      image_url: "/images/Framed_Autograph.png",
      id: 4,
    },
  ]

  return (
    <section className="py-14 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#1E1E24] sm:text-4xl lg:text-5xl">
            Available for Pre-Order
          </h2>

          <p className="commonP mt-3">
            Four exclusive signed collectibles.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {preOrders.map((preOrder) => (
            <PreOrderCard key={preOrder.id} {...preOrder} />
          ))}
        </div>
      </Container>
    </section>
  )
}