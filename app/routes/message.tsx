import React from "react"
import { AnimatedTabs } from "~/components/common/aminated-tab"
import Container from "~/components/common/container"
import ChatHead from "~/components/custom/chat-head"
import Chatingbox from "~/components/custom/chating-box"
import { Input } from "~/components/ui/input"
import type { TChatHead } from "~/types"

export default function Message({}: {}) {
    const [selectedHeadId , setSelectedHeadId] = React.useState<string>(""); 

    const chatHeads : TChatHead[] = [
        {
            id: "1",
            image: "/images/player.png",
            name: "John Doe",
            lastMessage: "Hey, how are you?",
            lastMessageTime: "10:30 AM",
            unread_count: 2,
        } ,
        {
            id: "2",
             image: "/images/player.png",
            name: "John Doe",
            lastMessage: "Hey, how are you?",
            lastMessageTime: "10:30 AM", 
        } ,
        {
            id: "3",
             image: "/images/player.png",
            name: "John Doe",
            lastMessage: "Hey, how are you?",
            lastMessageTime: "10:30 AM", 
        } ,

    ]



  return (
    <div className="bg-[#FBFBFF] py-25">
      <Container>
        <div className="flex rounded-xl bg-white shadow-sm overflow-hidden    "> 

            {/* head section */}
          <div className="max-w-100 w-full border-r border-primary/10  ">
            {/* search chat */}
            <div className="space-y-2 p-4">
              <Input type="text" placeholder="Search messages..." />

              <AnimatedTabs
                tabs={[
                  { id: "all", label: "All" },
                  { id: "unread", label: "Unread" },
                ]}
                bg="bg-transparent"
              />
            </div>

            <div className="space-y-2    ">
                {chatHeads.map((chatHead) => (
                    <ChatHead
                        key={chatHead.id}
                        onClick={() => setSelectedHeadId(chatHead.id)}
                        is_active={selectedHeadId === chatHead.id}
                        {...chatHead}
                    />
                ))}
            </div> 
          </div> 


          {/* chat inbox section */}
          <Chatingbox
             
           />


        </div>
      </Container>
    </div>
  )
}
