import { ChevronRight } from "lucide-react";
import type { TPlayerProfileMessageItem } from "~/types";

export default function PlayerProfileMessageItem(
    
    {
        date ,
        id, 
        avatar,
        name,
        message,
        amount,
        status
    
    }: TPlayerProfileMessageItem
) {
  return (
    <div
      key={id}
      className="flex items-center justify-between rounded-2xl border bg-white px-6 py-5 transition hover:shadow-md"
    >
      {/* Left */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-600">
          {avatar}
        </div>

        <div>
          <h3 className="font-semibold text-gray-800">{name}</h3>

          <p className="mt-1 text-sm text-gray-500">{message}</p>

          <span
            className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-medium ${
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
      <div className="text-right">
        <h3 className="text-xl font-bold text-indigo-600">{amount}</h3>

        <p className="mt-1 text-xs text-gray-400">{date}</p>

        <button className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700">
          Open
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  )
}
