import { GoArrowRight } from "react-icons/go"
import { BsCheck2Circle } from "react-icons/bs"
import { CiLock } from "react-icons/ci"
import { FcInTransit } from "react-icons/fc"
import { Link } from "react-router"
import { Button } from "../ui/button"

export default function Banner() {
  return (
    <section
      className="mt-10 bg-center bg-no-repeat px-4 py-20 sm:px-6 md:py-24 lg:py-32"
      style={{
        backgroundImage: "url('/images/bannerbg.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        {/* Badge */}
        <Button className="yellowbtn font-inter text-xs sm:text-sm md:text-base">
          Official Pre-Order Launch
        </Button>

        {/* Heading */}
        <h2 className="mt-5 md:max-w-140 lg:max-w-200 text-4xl leading-tight font-bold text-[#1E1E24] sm:text-5xl lg:text-6xl xl:text-[72px] xl:leading-[120%]">
          Own the Signature. Own the Moment.
        </h2>

        {/* Description */}
        <p className="font-inter mt-5 max-w-3xl text-base leading-7 text-[#1E1E24] sm:text-lg md:text-xl lg:text-2xl">
          Authentic signed cricket memorabilia from India's top players.
          Delivered within 30 days.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex w-full max-w-md flex-col gap-4 sm:w-auto sm:max-w-none sm:flex-row sm:items-center">
          <Button
            style={{
              background:
                "linear-gradient(172deg,#5A38F5 0%,#9A3FF1 100%)",
            }}
            className="font-inter rounded-full px-6 py-5.75 text-base font-medium text-white"
          >
            Select Your Signed Item
            <GoArrowRight className="ml-2 text-lg" />
          </Button>

          <Link
            to="/players"
            className="font-inter rounded-full bg-white px-6 py-3 text-base font-medium text-primary shadow-sm transition hover:shadow-md"
          >
            Meet the Players
          </Link>
        </div>

        {/* Features */}
        <div className="mt-10 flex flex-col items-center gap-5 text-[#5F6275] sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8">
          <div className="flex items-center gap-2 text-base">
            <BsCheck2Circle className="text-lg text-green-600" />
            <span>Official Signatures</span>
          </div>

          <div className="flex items-center gap-2 text-base">
            <CiLock className="text-xl text-blue-600" />
            <span>Secure Checkout</span>
          </div>

          <div className="flex items-center gap-2 text-base">
            <FcInTransit className="text-xl" />
            <span>30-Day Delivery</span>
          </div>
        </div>
      </div>
    </section>
  )
}