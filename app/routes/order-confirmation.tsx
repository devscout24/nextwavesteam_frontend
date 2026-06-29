import { Link } from "react-router"
import Container from "~/components/common/container"
import AuthIcon from "~/components/icons/auth-icon"
import CheckIcon from "~/components/icons/check-icon"

export default function OrderConfirmation() {
  return (
    <section className="bg-[#FBFBFF]  py-30">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <CheckIcon />

          <h2 className="mt-6 text-3xl font-bold text-[#1E1E24] sm:text-4xl lg:text-5xl">
            Your Pre-Order is Confirmed.
          </h2>

          <p className="commonP mt-3">
            Your item will be delivered within 30 days.
          </p>

          {/* Certificate */}
          <div className="mt-8 w-full rounded-2xl bg-white p-5 shadow-md sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-left">
                <p className="commonP">ORDER ID</p>

                <h3 className="text-xl font-bold text-[#1E1E24] sm:text-2xl">
                  #FG-82941
                </h3>
              </div>

              <div className="self-start sm:self-auto">
                <span className="yellowbtn py-1!">PRE-ORDER</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 border-t border-primary/10 pt-6 sm:flex-row sm:items-start">
              <div className="shrink-0">
                <AuthIcon />
              </div>

              <div className="text-left">
                <h3 className="text-lg font-bold text-[#1E1E24]">
                  Certificate of Authenticity
                </h3>

                <p className="commonP mt-2">
                  Your cricket memorabilia includes a verified digital twin and
                  physical holographic seal.
                </p>
              </div>
            </div>
          </div>

          <Link
            to="/"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-[#5B39F5] px-8 py-3 text-base font-semibold text-white transition hover:bg-[#4d2de5] sm:px-12 sm:text-lg"
          >
            Back to Home
          </Link>

          <p className="commonP mt-6 max-w-2xl text-center">
            A confirmation email has been sent to your registered address. For
            any queries, please contact{" "}
            <a
              href="mailto:support@fangram.com"
              className="break-all text-blue-500 underline"
            >
              support@fangram.com
            </a>
          </p>
        </div>
      </Container>
    </section>
  )
}