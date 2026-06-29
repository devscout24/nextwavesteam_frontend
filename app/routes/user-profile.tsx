import { CheckCircle } from "lucide-react"
import React from "react"
import { AnimatedTabs } from "~/components/common/aminated-tab"
import { LuCrown } from "react-icons/lu"
import { Button } from "~/components/ui/button"
import ProductOrderCard from "~/components/custom/order-card"
import UserChatHeadItem from "~/components/custom/user-caht-head-item"
import UserSubsItem from "~/components/custom/user-subs-item"

export default function UserProfile({}: {}) {
  const [activeTab, setActiveTab] = React.useState("orders")

  return (
    <div className="flex items-center justify-center bg-[#FBFBFF] py-25">
      <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white pb-8 shadow-lg">
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
              </div>

              <p className="text-xs font-medium text-gray-400">
                arjun.mehta@gmail.com
              </p>

              <p className="text-xs text-gray-400">Member since January 2024</p>
            </div>
          </div>

          <Button className="rounded-full border border-yellow-400 px-5 py-2 text-xs font-semibold text-yellow-500">
            <LuCrown />
            <span className="">Insider Member</span>
          </Button>
        </div>

        {/* Tabs */}
        <div className="max-w-3/5 px-8 py-5">
          <AnimatedTabs
            tabs={[
              { id: "orders", label: "My Orders (3)" },
              { id: "messages", label: "My Messages (248)" },
              { id: "subscriptions", label: "My Subscriptions" },
            ]}
            onTabChange={(tabId) => setActiveTab(tabId)}
          />
        </div>
        <div className="px-8">
          {activeTab === "orders" ? (
            <ProductOrderCard
              product_name="Signed Cricket Bat"
              shipping_status="Delivered"
              price="12,499"
              date="12 Jun 2025"
              order_id="FG-20240812"
            />
          ) : activeTab === "messages" ? (
            <UserChatHeadItem
              last_message="Your personalised message is ready!"
              last_message_time="10 Jun 2025"
              name="Virat Kohli"
              image="https://avatars.githubusercontent.com/u/124599?v=4"
            />
          ) : activeTab === "subscriptions" ? (
            <UserSubsItem
              date="12 Jun 2025"
              image="https://avatars.githubusercontent.com/u/124599?v=4"
              name="Virat Kohli"
              price="12,499"
              status="Active"
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}
