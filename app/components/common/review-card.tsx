import type { TReviewCard } from "~/types"
import { FaStar } from "react-icons/fa"

export default function ReviewCard({
  reviewer_name,
  review_text,
  rating,
}: TReviewCard) {
  return (
    <div className="rounded-xl bg-[#FAFAFD] p-4 max-w-75  ">
      <div className="flex items-center gap-1 text-[#F5C542]  ">
        {Array.from({ length: rating }).map((_, index) => (
          <FaStar />
        ))}
      </div>

      <p className="my-3 commonP line-clamp-2  ">
        {review_text}
      </p>
      <span className="font-inter font-bold text-[12px] text-[#1A1A2E]   ">
        {reviewer_name}
      </span>

    </div>
  )
}
