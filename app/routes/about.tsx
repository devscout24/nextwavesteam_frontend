import React from "react"
import { FaAward } from "react-icons/fa"
import { GoArrowRight, GoCheckCircle } from "react-icons/go"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { PiPackageThin } from "react-icons/pi"
import { Link } from "react-router"
import Container from "~/components/common/container"
import SimpleSecureOfficial from "~/components/custom/simple-secure-official"
import { Button } from "~/components/ui/button"
import { CiStar } from "react-icons/ci"
import { LuCrown } from "react-icons/lu"
import { IoShieldCheckmarkOutline } from "react-icons/io5"

type Props = {}

export default function about({}: Props) {
  const trustPoints = [
    {
      icon: <FaAward className="text-[#5A38F5]" />,
      title: "Official Signing Sessions",
      description: "Organised directly with player management",
    },
    {
      icon: <PiPackageThin className="text-[#5A38F5]" />,
      title: "Verified Authenticity Process",
      description: "Certificate, hologram, and photo proof on every item",
    },
    {
      icon: <IoMdCheckmarkCircleOutline className="text-[#5A38F5]" />,
      title: "Premium Packaging & Delivery",
      description: "Insured, collector-grade packaging to your door",
    },
  ]

  const whyFangramPoints = [
    {
      title: "Premium Experience",
      desc: "Every touchpoint - from checkout to unboxing - is designed to feel worthy of the item inside.",
      icon: <CiStar className="size-6 text-[#5A38F5]" />,
    },
    {
      title: "Secure Checkout",
      desc: "All payments are processed via Razorpay with PCI-DSS compliance and bank-grade encryption.",
      icon: <IoShieldCheckmarkOutline className="size-6 text-[#5A38F5]" />,
    },
    {
      title: "Fan-First Approach",
      desc: "Built by fans, for fans. Every decision we make puts the supporter's experience at the centre.",
      icon: <LuCrown className="size-6 text-[#5A38F5]" />,
    },
  ]

  return (
    <>
      {/* banner */}
      <section className="mt-10">
        {/* banner */}
        <section
          className="mt-10 bg-center bg-no-repeat px-4 pt-50 pb-20 sm:px-6 md:pb-24 lg:pb-32"
          style={{
            backgroundImage: "url('/images/aboutbg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Container>
            <div className="mx-auto flex flex-col items-center text-center">
              {/* Badge */}
              <Button className="yellowbtn font-inter text-xs sm:text-sm md:text-base">
                About Fangram
              </Button>

              {/* Heading */}
              <h2 className="mt-5 text-4xl leading-tight font-bold text-[#1E1E24] sm:text-5xl md:max-w-140 lg:max-w-200 lg:text-6xl xl:text-[72px] xl:leading-[120%]">
                Own the Signature. Own the Moment.
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-162.5 font-inter text-base leading-7 text-[#1E1E24] sm:text-lg md:text-xl lg:text-2xl">
                Connecting fans with officially signed memorabilia from India's
                top players.
              </p>
            </div>
          </Container>
        </section>
      </section>

      {/* our story */}
      <section className="py-14 md:py-20 lg:py-24">
        <Container>
          <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
            {/* Image */}
            <div className="w-full max-w-md lg:max-w-120 xl:max-w-130">
              <img
                src="/images/authenticityimage.png"
                alt="Authenticity and Trust"
                className="w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:flex-1">
              <h2 className="mx-auto max-w-xl text-center text-3xl font-bold text-[#1E1E24] sm:text-4xl lg:mx-0 lg:text-left lg:text-5xl">
                Our Story
              </h2>

              <p className="commonP mx-auto mt-2 max-w-xl text-center lg:mx-0 lg:text-left">
                Fangram was born from a single conviction: every fan deserves a
                genuine piece of the game they love. We coordinate directly with
                players and their management teams to organise official signing
                sessions - no third parties, no forgeries, no guesswork.
              </p>
              <p className="commonP mx-auto mt-2 max-w-xl text-center lg:mx-0 lg:text-left">
                From a signed match ball to a full framed jersey, every item on
                Fangram carries the full weight of authenticity - backed by a
                physical certificate, a tamper-proof hologram, and a
                high-resolution photo from the signing session itself.
              </p>

              <div className="mx-auto mt-5 w-fit space-y-4 lg:mx-0">
                {trustPoints.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#5A38F5]/5">
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-primary">
                        {item.title}
                      </h4>

                      <p className="commonP mt-1 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* how it works */}
      <SimpleSecureOfficial
        title="How It Works"
        subtitle="From browsing to your hands in three easy steps"
      />

      {/* simple secure official */}
      <section>
        <Container>
          <div className="mt-16 flex flex-col justify-between gap-10 md:mt-20 lg:mt-25 lg:flex-row lg:gap-16">
            {/* Product details text */}
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
                <p className="flex items-center gap-2">
                  <GoCheckCircle className="text-[#5A38F5]" />
                  <span>Premium 100% Breathable Mesh</span>
                </p>
                <p className="flex items-center gap-2">
                  <GoCheckCircle className="text-[#5A38F5]" />
                  <span>Hand-Signed with Archival Silver Pen</span>
                </p>
                <p className="flex items-center gap-2">
                  <GoCheckCircle className="text-[#5A38F5]" />
                  <span>Professional Display Framing Available</span>
                </p>
              </div>
            </div>

            {/* Accordion */}
            <div className="flex-1 space-y-4">
              <img
                src="/images/authenticity-cirtificates.png"
                alt="Authenticity Certificates"
                className="ml-auto w-130"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* why fangram */}
      <section className="pt-25">
        <Container>
          <h2 className="text-center text-3xl font-bold text-[#1E1E24] sm:text-4xl lg:text-5xl">
            Why Fangram?
          </h2>

          <p className="commonP mx-auto mt-3 max-w-2xl text-center">
            What sets us apart from the rest
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {whyFangramPoints.map((item, index) => {
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-primary/10 p-8"
                >
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#FCE7F3]">
                    {item.icon}
                  </div>

                  <h2 className="mt-4 text-center text-xl font-bold text-[#1E1E24]">
                    {item.title}
                  </h2>

                  <p className="mx-auto mt-2 max-w-70 text-center text-[#6B7280]">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>
 
      {/* foot banner */}
      <div className="py-14 md:py-20 lg:py-25">
        <Container>
          <div
            className="rounded-3xl px-6 py-14 sm:px-10 md:py-16 lg:px-16 lg:py-20"
            style={{
              backgroundImage: "url('/images/authbg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="mx-auto max-w-4xl text-center text-3xl font-bold text-[#1E1E24] sm:text-4xl lg:text-5xl">
              Start Your Signed Collection Today.
            </h2>

            <p className="commonP mx-auto mt-4 max-w-2xl text-center">
              Premium cricket memorabilia. Limited availability.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                to="/#"
                style={{
                  background: "linear-gradient(172deg,#5A38F5 0%,#9A3FF1 100%)",
                }}
                className="flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-center font-inter text-sm font-medium text-white transition hover:opacity-90 sm:w-auto sm:text-base"
              >
                Select Your Signed Item
                <GoArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
