import { FaAward } from "react-icons/fa"
import { PiPackageThin } from "react-icons/pi"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

import Container from "../common/container"

const trustPoints = [
  {
    icon: <FaAward className="text-[#5A38F5]" />,
    title: "Official Coordination",
    description: "Direct player signing sessions",
  },
  {
    icon: <PiPackageThin className="text-[#5A38F5]" />,
    title: "Secure Packaging",
    description: "Museum-quality protection",
  },
  {
    icon: <IoMdCheckmarkCircleOutline className="text-[#5A38F5]" />,
    title: "Verified Delivery",
    description: "Tamper-proof holographic seals",
  },
]

export default function AuthenticityTrust() {
  return (
    <section className="py-14 md:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col items-start gap-12 lg:flex-row   lg:gap-16">
          {/* Image */}
          <div className="w-full max-w-md lg:max-w-120 xl:max-w-130  ">
            <img
              src="/images/authenticityimage.png"
              alt="Authenticity and Trust"
              className="w-full    object-cover   "
            />
          </div>

          {/* Content */}
          <div className="w-full lg:flex-1">
            <h2 className="max-w-xl text-center mx-auto lg:mx-0 text-3xl font-bold text-[#1E1E24] sm:text-4xl lg:text-left lg:text-5xl">
              Authenticity You Can Trust.
            </h2>

            <p className="commonP mx-auto mt-5 max-w-xl text-center lg:mx-0 lg:text-left">
              Every Fangram collectible is officially signed and verified. We
              coordinate directly to ensure every signature is genuine, every
              product is premium, and every delivery is secure.
            </p>

            <div className="mt-10 space-y-6 w-fit mx-auto lg:mx-0    ">
              {trustPoints.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#5A38F5]/5">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-primary">
                      {item.title}
                    </h4>

                    <p className="commonP mt-1 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}