import { useEffect } from "react"
import { useSearchParams } from "react-router"
import Container from "~/components/common/container"
import PreOrderCard from "~/components/common/pre-order-card"
import ProductDetails from "~/components/custom/product-details"
import type { TPreOrder } from "~/types"

export default function Products({}: {}) {
  const [searchParams] = useSearchParams()

  const productId = searchParams.get("showing_productID")

  const preOrders: TPreOrder[] = [
    {
      id: 1,
      product_name: "Official Team Jersey",
      description:
        "Hand-signed by your choice of player from the current lineup.",
      image_url: "/images/Signed_Jersey.png",
    },
    {
      id: 2,
      product_name: "Signed Match Ball",
      description:
        "Premium red leather ball with authenticated silver signature.",
      image_url: "/images/Signed_Ball.png",
    },
    {
      id: 3,
      product_name: "Willow Grade Bat",
      description:
        "Full-size professional grade cricket bat signed on the blade.",
      image_url: "/images/Signed_Bat.png",
    },
    {
      id: 4,
      product_name: "Signed Photo Frame",
      description:
        "High-resolution action photo in a premium museum-grade frame.",
      image_url: "images/Framed_Autograph.png",
    },
  ]

  useEffect(() => {
    if (!productId) return

    const element = document.getElementById("product_details")

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }, [productId])

  return (
    <div>
      <div
        className="py-35"
        style={{
          background: `url('/images/authbg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <p className="yellowbtn mx-auto w-fit">Pre-Order Now Open</p>
          <h2 className="mt-3 text-center text-5xl font-bold text-[#1E1E24]">
            Signed Memorabilia
          </h2>

          <p className="mx-auto mt-4 max-w-140 text-center font-inter text-2xl font-normal text-[#1E1E24]">
            Authentic, player-signed collectibles with certificate of
            authenticity. Delivered within 30 days.
          </p>
        </Container>
      </div>

      <div className="bg-[#FBFBFF]">
        {/* Pre-Order Items */}
        <Container>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {preOrders.map((preOrder, index) => (
              <PreOrderCard key={index} {...preOrder} />
            ))}
          </div>

          <ProductDetails
            showing_product={
              preOrders.find(
                (p) => p.id === parseInt(productId || "0")
              ) as TPreOrder
            }
          />
        </Container>
      </div>
    </div>
  )
}
