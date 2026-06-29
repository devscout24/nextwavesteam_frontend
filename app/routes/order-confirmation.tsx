import { Link } from "react-router"
import Container from "~/components/common/container"
import AuthIcon from "~/components/icons/auth-icon"
import CheckIcon from "~/components/icons/check-icon"

export default function OrderConfirmation({}: {}) {
  return (
    <div className="bg-[#FBFBFF] py-30">
      <Container>
        <div className="mx-auto flex max-w-162.5 flex-col items-center">
          <CheckIcon />

          <h2 className="mt-8 text-[40px] font-bold text-[#1E1E24]">
            Your Pre‑Order is Confirmed.
          </h2>
          <p className="commonP">Your item will be delivered within 30 days.</p>

          {/* cirtificate */}
          <div className="mt-8 w-full rounded-2xl bg-white p-4 shadow-md">
            <div className="flex justify-between">
              <div className="">
                <p className="commonP">ORDER ID</p>
                <h2 className="text-xl font-bold text-[#1E1E24]">#FG-82941</h2>
              </div>
              <p className="yellowbtn h-fit py-1!">PRE-ORDER</p>
            </div>

            {/*  */}
            <div className="mt-4 flex gap-2 border-t border-primary/10 pt-4">
              <AuthIcon />
              <div className="">
                <h3 className="font-bold text-[#1E1E24]">
                  Certificate of Authenticity
                </h3>
                <p className="commonP">
                  Your cricket memorabilia includes a verified digital twin and
                  physical holographic seal.
                </p>
              </div>
            </div>
          </div>

          <Link
            to="/"
            className="mt-10 rounded-full bg-[#5B39F5] px-15 py-3 font-inter text-lg font-bold text-white"
          >
            Back to Home
          </Link>

          <p className="commonP text-center mt-4   ">
            A confirmation email has been sent to your registered address. For
            any queries, please contact <a href="mailto:support@fangram.com" className="text-blue-500 underline" >
              support@fangram.com
            </a>
          </p>
        </div>
      </Container>
    </div>
  )
}
