import BatBallIcon from "../icons/bat-ball-icon"
import { TfiArrowRight } from "react-icons/tfi"
import BatmanIcon from "../icons/batman-icon"
import DeliveryBusIcon from "../icons/dalivery-bus-icon"
import Container from "../common/container"

export default function SimpleSecureOfficial({}: {}) {
  return (
    <Container>
      <div className="py-25 ">

      <h2 className="text-center text-[48px] font-bold text-[#1E1E24]">
        Simple. Secure. Official.
      </h2>
      <p className="commonP text-center">
        How pre-orders work in three easy steps.
      </p>

      <div className="flex items-center justify-between mt-10  ">
        <div className="flex flex-col items-center gap-3 text-xl font-medium text-[#1E1E24]">
          <BatBallIcon />
          1. Choose Your Item
        </div>
        <TfiArrowRight className="size-12" />
        <div className="flex flex-col items-center gap-3 text-xl font-medium text-[#1E1E24]">
          <BatmanIcon />
          1. Choose Your Item
        </div>
        <TfiArrowRight className="size-12" />
        <div className="flex flex-col items-center gap-3 text-xl font-medium text-[#1E1E24]">
          <DeliveryBusIcon />
          1. Choose Your Item
        </div>
      </div>

      </div>

    </Container>
  )
}
