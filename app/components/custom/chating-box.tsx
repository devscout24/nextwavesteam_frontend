import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { BsSend } from "react-icons/bs"

export default function Chatingbox() {
  const messages = [
    {
      image: "/images/player.png",
      name: "John Doe",
      message: "Hey, how are you?",
      time: "10:30 AM",
      is_me: true,
    },
    {
      image: "/images/player.png",
      name: "John Doe",
      message: "I'm good, thanks! How about you?",
      time: "10:31 AM",
      is_me: false,
    },
    {
      image: "/images/player.png",
      name: "John Doe",
      message:
        "I'm doing great! Just working on the new Fangram messaging feature.",
      time: "10:32 AM",
      is_me:true,
    },
    {
      image: "/images/player.png",
      name: "John Doe",
      message:
        "Awesome! Can't wait to see it live.",
      time: "10:33 AM",
      is_me:false,
    },
  ]

  return (
    <div className="flex h-[80dvh] w-full flex-col bg-white">
      {/* Header */}
      <div className="flex items-center border-b p-3 md:p-4">
        <img
          src="/images/player.png"
          alt="profile"
          className="h-10 w-10 rounded-full object-cover md:h-12 md:w-12"
        />

        <div className="ml-3">
          <h4 className="text-sm font-semibold md:text-base">John Doe</h4>
          <p className="text-xs text-green-500">Online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 md:p-5 space-y-5">
        {messages.map((message, index) =>
          message.is_me ? (
            <div
              key={index}
              className="ml-auto w-fit max-w-[85%] md:max-w-[45%]"
            >
              <div className="rounded-2xl rounded-br-md bg-[#5A38F5] px-4 py-2 text-sm text-white">
                {message.message}
              </div>

              <p className="mt-1 text-right text-[10px] text-[#717182]">
                {message.time}
              </p>
            </div>
          ) : (
            <div
              key={index}
              className="flex w-fit max-w-[85%] items-end gap-2 md:max-w-[45%]"
            >
              <img
                src={message.image}
                alt={message.name}
                className="h-7 w-7 rounded-full object-cover"
              />

              <div>
                <div className="rounded-2xl rounded-bl-md bg-[#F2F2F2] px-4 py-2 text-sm text-[#1A1A2E]">
                  {message.message}
                </div>

                <p className="mt-1 text-[10px] text-[#717182]">
                  {message.time}
                </p>
              </div>
            </div>
          )
        )}
      </div>

      {/* Input */}
      <div className="border-t bg-white p-3 md:p-4">
        <div className="relative">
          <Input
            className="rounded-full py-5 pr-14"
            placeholder="Type a message..."
          />

          <Button
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#5A38F5] hover:bg-[#4b2ee6]"
          >
            <BsSend className="text-base" />
          </Button>
        </div>
      </div>
    </div>
  )
}