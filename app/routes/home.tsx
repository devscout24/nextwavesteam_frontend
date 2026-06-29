import Banner from "~/components/custom/banner"
import MeetPlayers from "~/components/custom/meet-players"
import AvailablePreOrder from "~/components/custom/available-pre-order"
import SimpleSecureOfficial from "~/components/custom/simple-secure-official"
import AuthenticityTrust from "~/components/custom/authenticity-tust"
import Container from "~/components/common/container"
import { Button } from "~/components/ui/button"
import { GoArrowRight } from "react-icons/go"
import { Link } from "react-router"

export default function Home() {
  return (
    <section className="mt-15">
      <Banner />
      <MeetPlayers />
      <AvailablePreOrder />
      <SimpleSecureOfficial />
      <AuthenticityTrust />

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
    </section>
  )
}
