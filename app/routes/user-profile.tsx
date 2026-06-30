import React from "react"
import { AnimatedTabs } from "~/components/common/aminated-tab"
import { LuCrown } from "react-icons/lu"
import { Button } from "~/components/ui/button"
import ProductOrderCard from "~/components/custom/order-card"
import UserChatHeadItem from "~/components/custom/user-caht-head-item"
import UserSubsItem from "~/components/custom/user-subs-item"
import Container from "~/components/common/container"

export default function UserProfile() {
  const [activeTab, setActiveTab] = React.useState("orders")

  return (
    <div className="bg-[#FBFBFF] px-4 py-25">
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-5 border-b px-2  py-5 md:flex-row md:items-center md:justify-between  md:py-6">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="User"
              className="h-12 w-12 rounded-full object-cover md:h-14 md:w-14"
            />

            <div>
              <h2 className="text-base font-bold text-[#1E1E24] md:text-lg">
                Virat Kohli
              </h2>

              <p className="text-xs text-gray-400 md:text-sm">
                arjun.mehta@gmail.com
              </p>

              <p className="text-xs text-gray-400">Member since January 2024</p>
            </div>
          </div>

          <Button className="w-full rounded-full border border-yellow-400 bg-transparent text-xs font-semibold text-yellow-500 hover:bg-yellow-50 md:w-fit">
            <LuCrown className="mr-2" />
            Insider Member
          </Button>
        </div>

        {/* Tabs */}
        <div className="overflow-x-auto  py-5 px-2 ">
          <div className="min-w-130 md:min-w-0">
            <AnimatedTabs
              tabs={[
                {
                  id: "orders",
                  label: "My Orders (3)",
                },
                {
                  id: "messages",
                  label: "My Messages (248)",
                },
                {
                  id: "subscriptions",
                  label: "My Subscriptions",
                },
              ]}
              onTabChange={(tabId) => setActiveTab(tabId)}
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-2">
          {activeTab === "orders" && (
            <div className="space-y-4">
              <ProductOrderCard
                product_name="Signed Cricket Bat"
                shipping_status="Delivered"
                price="12,499"
                date="12 Jun 2025"
                order_id="FG-20240812"
              />
            </div>
          )}

          {activeTab === "messages" && (
            <div className="space-y-4">
              <UserChatHeadItem
                last_message="Your personalised message is ready!"
                last_message_time="10 Jun 2025"
                name="Virat Kohli"
                image="https://avatars.githubusercontent.com/u/124599?v=4"
              />
            </div>
          )}

          {activeTab === "subscriptions" && (
            <div className="space-y-4">
              <UserSubsItem
                date="12 Jun 2025"
                image="https://avatars.githubusercontent.com/u/124599?v=4"
                name="Virat Kohli"
                price="12,499"
                status="Active"
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}
