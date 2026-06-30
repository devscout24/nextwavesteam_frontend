import { CheckCircle } from "lucide-react"
import React from "react"
import { RiGroupLine } from "react-icons/ri"

import { AnimatedTabs } from "~/components/common/aminated-tab"
import PlayerProfileMessageItem from "~/components/custom/player-profile-message-item"
import PlayerEarning from "~/components/custom/player-earning"
import PlayerEarningCard from "~/components/custom/player-earning-card"
import type { TPlayerProfileMessageItem } from "~/types"
import Container from "~/components/common/container"

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

export default function PlayerOwner() {
  const [activeTab, setActiveTab] = React.useState("messages")

  return (
    <section className="bg-[#FBFBFF] px-4 py-25">
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-5 border-b p-5 sm:flex-row sm:items-center sm:justify-between md:p-8">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt=""
              className="h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16"
            />

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold sm:text-xl">Virat Kohli</h2>

                <CheckCircle size={18} className="fill-indigo-600 text-white" />
              </div>

              <p className="text-sm font-medium text-indigo-600">
                Official Fangram Player
              </p>

              <p className="text-xs text-gray-400">Member since March 2023</p>
            </div>
          </div>

          <button className="self-start rounded-full border border-yellow-400 px-4 py-2 text-xs font-semibold text-yellow-500 sm:self-auto">
            Verified Player
          </button>
        </div>

        {/* Tabs */}
        <div className="overflow-x-auto px-4 py-5 md:px-8">
          <div className="min-w-max md:max-w-3/5">
            <AnimatedTabs
              tabs={[
                { id: "messages", label: "Messages (3)" },
                { id: "subscribers", label: "Subscribers (248)" },
                { id: "earnings", label: "Earnings" },
              ]}
              onTabChange={(tabId) => setActiveTab(tabId)}
            />
          </div>
        </div>

        {/* Content */}
        {activeTab === "messages" ? (
          <div className="space-y-4 px-4 pb-6 md:px-8 md:pb-8">
            {messages.map((item) => (
              <PlayerProfileMessageItem key={item.id} {...item} />
            ))}
          </div>
        ) : activeTab === "subscribers" ? (
          <div className="mx-4 mb-6 grid place-items-center rounded-xl border border-primary/10 p-6 text-center md:mx-8 md:mb-8 md:p-8">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-[#00A63E]/10 text-[#00A63E]">
              <RiGroupLine className="size-7" />
            </div>

            <p className="py-4 text-3xl font-semibold text-primary">248</p>

            <p className="commonP">Active subscribers across all fan tiers</p>
          </div>
        ) : (
          <div className="mx-4 mb-6 md:mx-8 md:mb-8">
            <PlayerEarningCard />

            <div className="mt-4 overflow-x-auto rounded-xl border border-primary/10">
              <PlayerEarning />
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
