import { TfiArrowRight } from "react-icons/tfi"

import Container from "../common/container"
import BatBallIcon from "../icons/bat-ball-icon"
import BatmanIcon from "../icons/batman-icon"
import DeliveryBusIcon from "../icons/dalivery-bus-icon"

const steps = [
  {
    icon: <BatBallIcon />,
    title: "Choose Your Item",
  },
  {
    icon: <BatmanIcon />,
    title: "Select Your Player",
  },
  {
    icon: <DeliveryBusIcon />,
    title: "Delivered to Your Door",
  },
]

export default function SimpleSecureOfficial() {
  return (
    <section className="py-14 md:py-20 lg:py-25">
      <Container>
        <h2 className="text-center text-3xl font-bold text-[#1E1E24] sm:text-4xl lg:text-5xl">
          Simple. Secure. Official.
        </h2>

        <p className="commonP mx-auto mt-3 max-w-2xl text-center">
          How pre-orders work in three easy steps.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-6 xl:gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex w-full items-center justify-center lg:w-auto"
            >
              {/* Step */}
              <div className="flex flex-col items-center text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#F7F6FD] sm:h-28 sm:w-28">
                  {step.icon}
                </div>

                <h3 className="mt-4 text-lg font-semibold text-[#1E1E24] sm:text-xl">
                  {index + 1}. {step.title}
                </h3>
              </div>

              {/* Arrow */}
              {index !== steps.length - 1 && (
                <TfiArrowRight className="mx-8 hidden text-4xl text-[#5A38F5] lg:block" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
