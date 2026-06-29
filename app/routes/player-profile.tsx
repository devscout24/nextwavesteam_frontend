import { Link } from "react-router"
import Container from "~/components/common/container"
import { GoArrowLeft } from "react-icons/go"
import { FaRegStar, FaStar } from "react-icons/fa"
import { FiAward } from "react-icons/fi"
import { Button } from "~/components/ui/button"
import { ChevronDown, Crown, MessageSquare } from "lucide-react"
import type { TReviewCard } from "~/types"
import ReviewCard from "~/components/common/review-card"

export default function PlayerProfile() {
  const reviews: TReviewCard[] = [
    {
      reviewer_name: "Ankit R.",
      review_text:
        "Got my signed jersey and it's unreal. The certificate makes it so official.",
      rating: 5,
    },
    {
      reviewer_name: "Deepa M.",
      review_text:
        "My son was in tears when he saw the signed photo. Best gift I ever gave.",
      rating: 5,
    },
    {
      reviewer_name:
        "Rahul T.",
      review_text:
        "Arrived in 28 days, packaging was perfect. Will definitely order again.",
      rating: 5,
    },
  ]

  return (
    <section className="bg-[#FBFBFF] py-20 lg:py-25">
      <Container>
        <div className="rounded-xl bg-white p-4 shadow-sm sm:p-6 lg:p-8">
          <Link
            to="/players"
            className="flex items-center gap-2 font-medium text-[#888888]"
          >
            <GoArrowLeft />
            <span>Back to Players</span>
          </Link>

          <div className="mt-8 flex flex-col gap-8 xl:flex-row">
            {/* LEFT */}
            <div className="flex-1">
              {/* Profile */}
              <div className="flex flex-col gap-6 lg:flex-row">
                <img
                  src="/images/player.png"
                  alt="player"
                  className="mx-auto h-64 w-52 rounded-xl object-cover lg:mx-0"
                />

                <div className="flex-1">
                  <p className="yellowbtn w-fit px-3 py-1">Fast Bowler</p>

                  <h2 className="mt-3 text-2xl font-bold text-[#1A1A2E] lg:text-3xl">
                    Jasprit Bumrah
                  </h2>

                  <div className="mt-3 flex flex-wrap items-center gap-1 text-[#F5C542]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />

                    <span className="ml-2 text-lg font-medium text-black">
                      4.9
                    </span>

                    <span className="text-sm text-[#AAAAAA]">
                      (1.2K reviews)
                    </span>
                  </div>

                  <p className="commonP mt-3">
                    India's premier all-rounder with 150+ international
                    matches.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <Button className="border border-[#555577]/10 bg-transparent text-[#555577] hover:bg-transparent">
                      <FiAward className="mr-2 text-[#F5C542]" />
                      ICC World Cup 2023 Winner
                    </Button>

                    <Button className="border border-[#555577]/10 bg-transparent text-[#555577] hover:bg-transparent">
                      <FiAward className="mr-2 text-[#F5C542]" />
                      IPL MVP 2022
                    </Button>
                  </div>
                </div>
              </div>

              {/* About */}
              <div className="mt-8 rounded-2xl border border-primary/5 p-5">
                <h3 className="font-bold text-[#1A1A2E]">
                  About Jasprit Bumrah
                </h3>

                <p className="commonP mt-3">
                  The unplayable yorker specialist. World's best fast bowler
                  with a unique action. Jasprit Bumrah personally approves all
                  autograph merchandise before it ships.
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-8 rounded-2xl border border-primary/5 p-5">
                <h3 className="font-bold text-[#1A1A2E]">Fan Reviews</h3>

                <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {reviews.map((review, index) => (
                    <ReviewCard key={index} {...review} />
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="w-full xl:max-w-[360px]">
              {/* Message */}
              <div className="rounded-3xl border border-primary/5 bg-white p-6">
                <div className="flex items-center gap-3">
                  <MessageSquare className="text-red-400" />

                  <h2 className="text-lg font-bold text-[#1A1A2E]">
                    Direct Message
                  </h2>
                </div>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-3xl font-bold text-[#5A38F5]">
                    ₹699
                  </span>

                  <span className="text-[#AAAAAA]">/message</span>
                </div>

                <p className="commonP mt-4">
                  Message will be reviewed before delivery.
                </p>

                <Link
                  to="/message"
                  className="mt-8 flex w-full justify-center rounded-full bg-[#D40924] py-3 font-semibold text-white"
                >
                  Send Paid Message
                </Link>
              </div>

              {/* Subscribe */}
              <div className="mt-5 rounded-3xl border border-primary/5 bg-white p-6">
                <div className="flex items-center gap-2">
                  <Crown className="text-amber-400" />

                  <h2 className="text-lg font-bold text-[#1A1A2E]">
                    Subscribe
                  </h2>
                </div>

                <div className="mt-4 flex items-end gap-1">
                  <span className="text-3xl font-bold text-[#5A38F5]">
                    ₹349
                  </span>

                  <span className="text-[#AAAAAA]">/month</span>
                </div>

                <button className="mt-4 flex w-full items-center justify-center gap-2 text-gray-500">
                  View features
                  <ChevronDown size={18} />
                </button>

                <button className="mt-6 w-full rounded-full border-2 border-[#5A38F5] py-3 font-semibold text-[#5A38F5] transition hover:bg-[#5A38F5] hover:text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}