import Container from "../common/container"
import { FaAward } from "react-icons/fa";
import { PiPackageThin } from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";




export default function AuthenticityTrust({}: {}) {
  return (
    <Container>
      <div className="flex">
        <div className="max-w-121">
          <img
            src="/images/authenticityimage.png"
            alt="Authenticity and Trust"
          />
        </div>

        {/* authenticity text */}
        <div className="ml-13.25 ">
          <h2 className="  text-[48px] font-bold text-[#1E1E24] max-w-100  ">
            Authenticity You Can Trust.
          </h2>
          <p className="commonP mt-4 max-w-127   ">
            Every Fangram collectible is officially signed and verified. We coordinate directly to ensure every signature is genuine, every product is premium, and every delivery is secure.
          </p>

          {/* trust points */}
          <div className="mt-8 space-y-6  ">

            <div className="flex items-center gap-4 ">
                <div className="w-10 h-10 bg-[#5A38F5]/5 rounded-full grid place-items-center    ">
                    <FaAward className="text-[#5A38F5] "/>
                </div>
                <div className="">
                    <h4 className=" font-medium text-primary   ">Official Coordination</h4>
                    <p className="commonP text-[14px]!   ">Direct player signing sessions</p>
                </div>
            </div>
            <div className="flex items-center gap-4 ">
                <div className="w-10 h-10 bg-[#5A38F5]/5 rounded-full grid place-items-center    ">
                    <PiPackageThin className="text-[#5A38F5] "/>
                </div>
                <div className="">
                    <h4 className=" font-medium text-primary   ">Secure Packaging</h4>
                    <p className="commonP text-[14px]!   ">Museum-quality protection</p>
                </div>
            </div>
            <div className="flex items-center gap-4 ">
                <div className="w-10 h-10 bg-[#5A38F5]/5 rounded-full grid place-items-center    ">
                    <IoMdCheckmarkCircleOutline className="text-[#5A38F5] "/>
                </div>
                <div className="">
                    <h4 className=" font-medium text-primary   ">Verified Delivery</h4>
                    <p className="commonP text-[14px]!   ">Tamper-proof holographic seals</p>
                </div>
            </div>

          </div>



        </div>
      </div>
    </Container>
  )
}
