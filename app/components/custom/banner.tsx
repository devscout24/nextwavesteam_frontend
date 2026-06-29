import { GoArrowRight } from "react-icons/go"
import { Button } from "../ui/button"
import { Link } from "react-router"
import { BsCheck2Circle } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { FcInTransit } from "react-icons/fc";



export default function Banner({}: {}) {
  return (
    <div
      className="py-35 mt-10  "
      style={{
        background: "url('/images/bannerbg.png')",
        backgroundSize: "100% 100% ",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

      }}
    >
      <div className="flex flex-col items-center justify-center">
        <Button className="yellowbtn font-inter">
          Official Pre‑Order Launch
        </Button>

        <h2 className="mt-3 max-w-180 text-center text-[72px] leading-[120%] font-bold text-[#1E1E24]">
          Own the Signature. Own the Moment.
        </h2>

        <p className="font-inter mt-4 max-w-140 text-center text-2xl font-normal text-[#1E1E24]">
          Authentic signed cricket memorabilia from India's top players.
          Delivered within 30 days.
        </p>

        <div className="mt-10.5 flex items-center gap-4">
          <Button
            style={{
              background:
                "linear-gradient(172deg,rgba(90, 56, 245, 1) 0%, rgba(154, 63, 241, 1) 100%, rgba(237, 221, 83, 1) 100%)",
            }}
            className="font-inter rounded-full px-5 py-5 text-base font-medium text-white"
          >
            Select Your Signed Item
            <GoArrowRight />
          </Button>
          <Link to={`/players`} className="font-inter font-medium text-base text-primary bg-white py-3 px-5 rounded-full ">Meet the Players</Link>
        </div>


        {/* features */}
        <div className="flex items-center gap-7.5 mt-10.5  ">
            <div className="flex items-center gap-2 font-inter text-base text-[#5F6275]  ">
                <BsCheck2Circle />
                <span className="">
                    Official Signatures
                </span>
            </div>
            <div className="flex items-center gap-2 font-inter text-base text-[#5F6275]  ">
                <CiLock />
                <span className="">
                    Secure Checkout
                </span>
            </div>
            <div className="flex items-center gap-2 font-inter text-base text-[#5F6275]  ">
                <FcInTransit />
                <span className="">
                    30-Day Delivery
                </span>
            </div>
        </div>

      </div>
    </div>
  )
}
