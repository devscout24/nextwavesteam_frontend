import type { TPreOrder } from "~/types"
import Container from "../common/container"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import { Button } from "../ui/button"
import { LuMinus } from "react-icons/lu"
import { FiPlus } from "react-icons/fi"
import React from "react"
import { HiOutlineInformationCircle } from "react-icons/hi2"
import { FaAward } from "react-icons/fa"
import { BsPatchCheckFill } from "react-icons/bs" 
import CustomAccordion from "./custom-accordian"
import { GoCheckCircle } from "react-icons/go";

export default function ProductDetails({
  showing_product,
}: {
  showing_product: TPreOrder
}) {
  const [quantity, setQuantity] = React.useState(1)

  const handleCountChange = (type: "increment" | "decrement") => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1)
    }
    if (type === "decrement") {
      setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
    }
  }

  return (
    <div className="py-25" id="product_details"  >
      <Container>
        <div className="flex gap-16">
          <div className="relative">
            <img
              src={showing_product.image_url}
              alt={showing_product.product_name}
              className="h-full max-h-167 w-full max-w-125 rounded-lg border-8 border-white object-cover shadow-sm"
            />
            <div className="yellowbtn absolute top-4 right-4 py-1!">
              <BsPatchCheckFill />
              <span className="">AUTHENTIC</span>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#1E1E24]">
              {showing_product.product_name}
            </h2>

            <div className="mt-3 flex items-center gap-4">
              <p className="text-xl font-semibold text-[#1E1E24]">$ {499.99}</p>
              <p className="yellowbtn py-1! text-base">
                PRE‑ORDER – SHIPS IN 30 DAYS
              </p>
            </div>

            {/* player selection and quantity */}
            <div className="mt-8 rounded-lg bg-[#F3F3F8] p-8">
              <p className="">SELECT PLAYER SIGNATURE</p>
              <Select>
                <SelectTrigger className="w-full rounded-full bg-white py-5">
                  <SelectValue placeholder="Select Player" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Virat Kohli">Virat Kohli</SelectItem>
                    <SelectItem value="Sourav Ganguly">
                      Sourav Ganguly
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <p className="mt-6">QUANTITY</p>
              <div className="flex gap-2">
                <div className="flex items-center rounded-full border border-primary/20 bg-white py-1">
                  <Button
                    onClick={() => handleCountChange("decrement")}
                    className="bg-transparent text-primary hover:bg-transparent"
                  >
                    <LuMinus />
                  </Button>
                  <p className="">{quantity}</p>
                  <Button
                    onClick={() => handleCountChange("increment")}
                    className="bg-transparent text-primary hover:bg-transparent"
                  >
                    <FiPlus />
                  </Button>
                </div>

                <Button className="flex-1 rounded-full bg-[#5A38F5] py-5 text-xl font-medium hover:bg-[#5A38F5]">
                  Place Pre‑Order
                </Button>
              </div>

              <div className="mt-6 flex items-center gap-2 text-[#474651]">
                <HiOutlineInformationCircle className="size-6" />
                <p className="">
                  All items are officially signed and delivered within 30 days.
                </p>
              </div>
            </div>

            {/* authenticity */}
            <div className="mt-8 flex rounded-lg border-l-4 border-[#5A38F5] bg-[#F3F3F8] p-8">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#F5C542]">
                <FaAward />
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-medium">GUARANTEED AUTHENTICITY</h2>
                <p className="commonP text-base">
                  Includes PSA/DNA Hologram and Certificate
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* details */}
        <div className="mt-25 flex gap-16">
          <div className="max-w-140 flex-1">
            <h2 className="text-xl font-semibold text-[#1E1E24]">
              Product Details
            </h2>

            <p className="commonP mt-6 text-sm">
              This premium cricket jersey represents the pinnacle of sporting
              memorabilia. Each piece is crafted from high-performance,
              moisture-wicking micro-mesh fabric, identical to the
              specifications worn by professional players on the pitch.
            </p>

            <p className="commonP mt-4 text-sm">
              The signature is applied by the player themselves during an
              official private signing session. We utilize archival-grade
              archival ink that is guaranteed never to fade or bleed, ensuring
              your investment maintains its value for decades to come.
            </p>


            <div className="mt-4 space-y-2">
                
                <p className=" flex items-center gap-2   ">
                    <GoCheckCircle className="text-[#5A38F5]" />
                    <span className="">Premium 100% Breathable Mesh</span>
                </p>
                <p className=" flex items-center gap-2   ">
                    <GoCheckCircle className="text-[#5A38F5]" />
                    <span className="">Hand-Signed with Archival Silver Pen</span>
                </p>
                <p className=" flex items-center gap-2   ">
                    <GoCheckCircle className="text-[#5A38F5]" />
                    <span className="">Professional Display Framing Available</span>
                </p>

            </div>
          </div>

          {/* accordian */}
          <div className="flex-1 space-y-4">
            <CustomAccordion title="Delivery Timeline">
              Every collectible is carefully prepared and securely packaged
              before dispatch. Delivery typically takes 7–14 business days.
              You'll receive a tracking number as soon as your order ships.
            </CustomAccordion>
            <CustomAccordion title="Authenticity Guarantee" defaultOpen>
              Every Fangram item undergoes a rigorous 3-step authentication
              process. Each jersey features a tamper- evident holographic serial
              number which can be verified in our online database alongside its
              PSA/DNA certification.
            </CustomAccordion>
            <CustomAccordion title="Refund Policy">
              All sales are final. Due to the personalized and limited-edition
              nature of our products, refunds or cancellations are not available
              once an order has been confirmed. If your order arrives damaged,
              defective, or you receive the wrong item, please contact our
              support team within 7 days of delivery. We'll review your request
              and arrange a replacement or refund where applicable. For any
              questions regarding your order, our customer support team is
              always happy to help.
            </CustomAccordion>
          </div>
        </div>
      </Container>
    </div>
  )
}
