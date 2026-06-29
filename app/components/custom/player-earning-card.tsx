import { ArrowUpRight, Wallet } from "lucide-react"

export default function PlayerEarningCard() {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Total Earnings
          </p>

          <h2 className="mt-2 text-2xl font-bold text-violet-600 sm:text-3xl">
            ₹4,87,320
          </h2>

          <div className="mt-2 flex items-center gap-1 text-sm font-medium text-green-600">
            <ArrowUpRight size={15} />
            +₹23,450 this month
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:gap-8">
          <div className="sm:text-right">
            <p className="text-xs text-gray-400">Available</p>

            <h3 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
              ₹82,140
            </h3>
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 sm:w-auto">
            <Wallet size={16} />
            Withdraw
          </button>
        </div>
      </div>
    </div>
  )
}