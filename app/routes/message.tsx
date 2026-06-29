import React from "react"
import { AnimatedTabs } from "~/components/common/aminated-tab"
import Container from "~/components/common/container"
import ChatHead from "~/components/custom/chat-head"
import Chatingbox from "~/components/custom/chating-box"
import { Input } from "~/components/ui/input"
import type { TChatHead } from "~/types"

export default function Message() {
  const [selectedHeadId, setSelectedHeadId] = React.useState("")

  const chatHeads: TChatHead[] = [
    {
      id: "1",
      image: "/images/player.png",
      name: "John Doe",
      lastMessage: "Hey, how are you?",
      lastMessageTime: "10:30 AM",
      unread_count: 2,
    },
    {
      id: "2",
      image: "/images/player.png",
      name: "John Doe",
      lastMessage: "Hey, how are you?",
      lastMessageTime: "10:30 AM",
    },
    {
      id: "3",
      image: "/images/player.png",
      name: "John Doe",
      lastMessage: "Hey, how are you?",
      lastMessageTime: "10:30 AM",
    },
  ]

  return (
    <div className="bg-[#FBFBFF] py-20 lg:py-25">
      <Container>
        <div className="overflow-hidden rounded-xl bg-white shadow-sm lg:flex">
          {/* Chat List */}
          <div className="w-full border-b border-primary/10 lg:max-w-96 lg:border-r lg:border-b-0">
            <div className="space-y-4 p-4">
              <Input
                type="text"
                placeholder="Search messages..."
                className="w-full"
              />

              <AnimatedTabs
                tabs={[
                  { id: "all", label: "All" },
                  { id: "unread", label: "Unread" },
                ]}
                bg="bg-transparent"
              />
            </div>

            <div className="scrollbar-hide flex gap-2 overflow-x-auto p-2 md:block md:max-h-105 md:overflow-x-hidden md:overflow-y-auto lg:max-h-175">
              {chatHeads.map((chatHead) => (
                <ChatHead
                  key={chatHead.id}
                  {...chatHead}
                  is_active={selectedHeadId === chatHead.id}
                  onClick={() => setSelectedHeadId(chatHead.id)}
                />
              ))}
            </div>
          </div>

          {/* Chat Box */}
          <div className="min-h-125 flex-1">
            <Chatingbox />
          </div>
        </div>
      </Container>
    </div>
  )
}
