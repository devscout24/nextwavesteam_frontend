import type { TPreOrder } from "~/types"
import PreOrderCard from "../common/pre-order-card"
import Container from "../common/container"

export default function AvailablePreOrder({}: {}) {
  const preOrders: TPreOrder[] = [
    {
      product_name: "Official Team Jersey",
      description:
        "Hand-signed by your choice of player from the current lineup.",
      image_url: "/images/Signed_Jersey.png",
    },
    {
      product_name: "Signed Match Ball",
      description:
        "Premium red leather ball with authenticated silver signature.",
      image_url: "/images/Signed_Ball.png",
    },
    {
      product_name: "Willow Grade Bat",
      description:
        "Full-size professional grade cricket bat signed on the blade.",
      image_url: "/images/Signed_Bat.png",
    }, 
    {
      product_name: "Signed Photo Frame",
      description:
        "High-resolution action photo in a premium museum-grade frame.",
      image_url: "images/Framed_Autograph.png",
    },
  ]

  return (
    <div>
      <h2 className="text-center text-[48px] font-bold text-[#1E1E24]">
        Available for Pre-Order
      </h2>
      <p className="commonP text-center">Four exclusive signed collectibles.</p>

      <Container>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12   ">
          {preOrders.map((preOrder, index) => (
            <PreOrderCard key={index} {...preOrder} />
          ))}
        </div>
      </Container>
    </div>
  )
}
