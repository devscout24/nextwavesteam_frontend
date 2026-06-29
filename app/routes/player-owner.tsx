import { CheckCircle, ChevronRight } from "lucide-react"
import React from "react"
import { AnimatedTabs } from "~/components/common/aminated-tab"
import PlayerProfileMessageItem from "~/components/custom/player-profile-message-item"
import type { TPlayerProfileMessageItem } from "~/types"
import { RiGroupLine } from "react-icons/ri"
import PlayerEarning from "~/components/custom/player-earning"
import PlayerEarningCard from "~/components/custom/player-earning-card"

const messages: TPlayerProfileMessageItem[] = [
  {
    id: 1,
    name: "Arjun Mehta",
    avatar: "A",
    message: "Congrats on the century! Huge fan",
    amount: "₹1,499",
    date: "20 Jun 2025",
    status: "Replied",
  },
  {
    id: 2,
    name: "Priya Sharma",
    avatar: "P",
    message: "Can I get a shoutout for my birthday",
    amount: "₹2,999",
    date: "18 Jun 2025",
    status: "Pending",
  },
  {
    id: 3,
    name: "Rahul Verma",
    avatar: "R",
    message: "Loved your last match performance!",
    amount: "₹799",
    date: "15 Jun 2025",
    status: "Replied",
  },
]

export default function PlayerOwner({}: {}) {
  const [activeTab, setActiveTab] = React.useState("messages")

  return (
    <div className="flex items-center justify-center bg-[#FBFBFF] py-25">
      <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-8 py-6">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt=""
              className="h-14 w-14 rounded-full object-cover"
            />

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold">Virat Kohli</h2>

                <CheckCircle size={16} className="fill-indigo-600 text-white" />
              </div>

              <p className="text-xs font-medium text-indigo-600">
                Official Fangram Player
              </p>

              <p className="text-xs text-gray-400">Member since March 2023</p>
            </div>
          </div>

          <button className="rounded-full border border-yellow-400 px-5 py-2 text-xs font-semibold text-yellow-500">
            Verified Player
          </button>
        </div>

        {/* Tabs */}
        <div className="px-8 py-5 max-w-3/5  ">
          <AnimatedTabs
            tabs={[
              { id: "messages", label: "Messages (3)" },
              { id: "subscribers", label: "Subscribers (248)" },
              { id: "earnings", label: "Earnings" },
            ]}
            onTabChange={(tabId) => setActiveTab(tabId)}
          />
        </div>

        {/* List */}
        {activeTab === "messages" ? (
          <div className="space-y-4 px-8 pb-8">
            {messages.map((item) => (
              <PlayerProfileMessageItem key={item.id} {...item} />
            ))}
          </div>
        ) : activeTab === "subscribers" ? (
          <div className="mx-8 mb-8 grid place-items-center rounded-xl border border-primary/10 p-8">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-[#00A63E]/10 text-[#00A63E]">
              <RiGroupLine className="size-6" />
            </div>
            <p className="py-4 text-xl font-semibold text-primary">248</p>
            <p className="commonP">Active subscribers across all fan tiers</p>
          </div>
        ) : activeTab === "earnings" ? (
          <div className="mx-8 mb-8   ">
            <PlayerEarningCard/>
            <div className="border border-primary/10 rounded-xl mt-4    ">
              <PlayerEarning />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
