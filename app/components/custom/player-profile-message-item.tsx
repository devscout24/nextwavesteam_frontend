import { ChevronRight } from "lucide-react"
import { useNavigate } from "react-router"
import type { TPlayerProfileMessageItem } from "~/types"

export default function PlayerProfileMessageItem({
  date,
  avatar,
  name,
  message,
  amount,
  status,
}: TPlayerProfileMessageItem) {

  const navigate = useNavigate()

  return (
    <div
     onClick={() => navigate("/message")}
    className="flex flex-col gap-5 rounded-2xl border bg-white p-4 transition hover:shadow-md sm:flex-row sm:items-center sm:justify-between sm:p-6">
      {/* Left */}
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-indigo-100 font-semibold text-indigo-600">
          {avatar}
        </div>

        <div className="min-w-0">
          <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
            {name}
          </h3>

          <p className="mt-1 line-clamp-2 text-sm text-gray-500">
            {message}
          </p>

          <span
            className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-medium ${
              status === "Pending"
                ? "bg-orange-100 text-orange-600"
                : "bg-purple-100 text-purple-600"
            }`}
          >
            {status}
          </span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center justify-between gap-4 border-t pt-4 sm:block sm:border-0 sm:pt-0 sm:text-right">
        <div>
          <h3 className="text-lg font-bold text-indigo-600 sm:text-xl">
            {amount}
          </h3>

          <p className="mt-1 text-xs text-gray-400">{date}</p>
        </div>

        <button className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 transition hover:text-indigo-700">
          Open
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  )
}