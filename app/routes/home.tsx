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
      <div className="py-25">
        <Container>
          <div
            className="rounded-3xl py-20"
            style={{
              background: "url('/images/authbg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="text-center text-[48px] font-bold text-[#1E1E24]">
              Start Your Signed Collection Today.
            </h2>
            <p className="commonP text-center">
              Premium cricket memorabilia. Limited availability.
            </p>

            <div className="flex justify-center mt-6   ">
              <Link
                to="/#"
                style={{
                  background:
                    "linear-gradient(172deg,rgba(90, 56, 245, 1) 0%, rgba(154, 63, 241, 1) 100%, rgba(237, 221, 83, 1) 100%)",
                }}
                className="rounded-full px-5 py-3 font-inter text-base font-medium text-white flex items-center gap-2    "
              >
                Select Your Signed Item
                <GoArrowRight className="size-6" />
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
