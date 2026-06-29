import { Link } from "react-router"
import Container from "~/components/common/container"
import { GoArrowLeft } from "react-icons/go"
import { FaStar } from "react-icons/fa"
import { FaRegStar } from "react-icons/fa"
import { FiAward } from "react-icons/fi"
import { Button } from "~/components/ui/button"
import { ChevronDown, Crown, MessageSquare } from "lucide-react"
import type { TReviewCard } from "~/types"
import ReviewCard from "~/components/common/review-card"

export default function PlayerProfile({}: {}) {
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
      reviewer_name: "Rahul T.",
      review_text:
        "Arrived in 28 days, packaging was perfect. Will definitely order again.",
      rating: 5,
    },
  ]

  return (
    <section className="bg-[#FBFBFF] py-25">
      <div className="pt-12 pb-25">
        <Container>
          <div className="rounded-xl bg-[#FFFFFF] p-8 shadow-sm">
            <Link
              to={`/players`}
              className="flex items-center gap-2 font-inter font-medium text-[#888888]"
            >
              <GoArrowLeft />
              <span className="ml-2">Back to Players</span>
            </Link>

            {/* profile image and message */}
            <div className="mt-6 flex w-full gap-8">
              <div className="">
                {/* profile */}
                <div className="flex items-center gap-7">
                  <img
                    src="/images/player.png"
                    alt="player"
                    className="h-52 w-full max-w-44 rounded-lg object-cover"
                  />

                  <div className="">
                    <p className="yellowbtn w-fit px-3 py-1">Fast Bowler</p>
                    <h2 className="mt-2 font-inter text-2xl font-bold text-[#1A1A2E]">
                      Jasprit Bumrah
                    </h2>

                    <div className="mt-2.5 flex items-center gap-0.5 text-[#F5C542]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />

                      <span className="ml-2 text-lg font-medium">4.9</span>
                      <p className="ml-2 font-inter text-sm text-[#AAAAAA]">
                        (1.2K reviews)
                      </p>
                    </div>

                    <p className="commonP">
                      India's premier all-rounder with 150+ international
                      matches.
                    </p>

                    <div className="mt-3 flex gap-4">
                      <Button className="rounded-full border border-[#555577]/10 bg-transparent py-2 hover:bg-transparent">
                        <FiAward className="text-[#F5C542]" />
                        <span className="font-inter text-lg text-[#555577]!">
                          ICC World cup 2023 Winner
                        </span>
                      </Button>
                      <Button className="rounded-full border border-[#555577]/10 bg-transparent py-2 hover:bg-transparent">
                        <FiAward className="text-[#F5C542]" />
                        <span className="font-inter text-lg text-[#555577]!">
                          IPL Most Valuable Player 2022
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* about */}
                <div className="mt-8 rounded-2xl border border-primary/5 bg-white p-5">
                  <h3 className="font-bold text-[#1A1A2E]">
                    About Jasprit Bumrah
                  </h3>
                  <p className="commonP mt-3">
                    The unplayable yorker specialist. World's best fast bowler
                    with a unique action. Jasprit Bumrah personally approves all
                    autograph merchandise before it ships.
                  </p>
                </div>

                {/* reviews */}
                <div className="mt-8 rounded-2xl border border-primary/5 bg-white p-5">
                  <h3 className="font-bold text-[#1A1A2E]">Fan Reviews</h3>
                  <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((review, index) => (
                      <ReviewCard key={index} {...review} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="ml-auto">
                {/* message box */}
                <div className="rounded-3xl border border-primary/5 bg-white p-5">
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md">
                      <MessageSquare className="h-4 w-4 text-red-400" />
                    </div>

                    <h2 className="text-lg font-bold tracking-tight text-[#1A1A2E]">
                      Direct Message
                    </h2>
                  </div>

                  {/* Price */}
                  <div className="mt-6 flex items-end gap-2">
                    <span className="text-2xl font-bold text-[#5A38F5]">
                      ₹699
                    </span>
                    <span className="pb-0.5 text-base font-normal text-[#AAAAAA]">
                      / message
                    </span>
                  </div>

                  {/* Description */}
                  <p className="commonP mt-4">
                    Message will be reviewed before delivery.
                  </p>

                  {/* Button */}
                  <Link to={`/message`} className=" inline-block text-center mt-10 w-full rounded-full bg-[#D40924] py-2.5 text-base font-semibold text-white transition hover:bg-[#D40924] active:scale-[0.99]">
                    Send Paid Message
                  </Link>
                </div>

                {/* subscribe */}
                <div className="w-full max-w-md rounded-3xl border border-primary/5 mt-5  bg-white p-6  ">
                  {/* Header */}
                  <div className="flex items-center gap-2">
                    <Crown className="h-6 w-6 text-amber-400" strokeWidth={2} />
                    <h2 className="text-lg font-bold tracking-tight text-[#1A1A2E] ">
                      Subscribe
                    </h2>
                  </div>

                  {/* Price */}
                  <div className="mt-3 flex items-end gap-1">
                    <span className="text-2xl font-bold text-[#5A38F5] ">
                      ₹349
                    </span>
                    <span className="pb-0.5 text-base font-normal text-[#AAAAAA]">/month</span>
                  </div>

                  {/* View Features */}
                  <button className="mt-4 flex w-full items-center justify-center gap-1 text-base  text-gray-400 transition hover:text-gray-600">
                    View features
                    <ChevronDown size={18} />
                  </button>

                  {/* Subscribe Button */}
                  <button className="mt-6 w-full rounded-full border-2 border-indigo-600 py-2 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-600 hover:text-white">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
