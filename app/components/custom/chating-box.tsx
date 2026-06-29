import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { BsSend } from "react-icons/bs";

 

export default function Chatingbox({}: {}) {

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
            time: "10:30 AM",
            is_me: false,
        }
    ]

  return (
    <div className="w-full   ">

        <div className="bg-white p-4 rounded-xl flex items-center border-b w-full     ">

            <img 
                src="/images/player.png"
                alt="profile"
                className="w-10 h-10 rounded-full object-cover"
            />
            <div className="ml-3">
                <h4 className="text-sm font-semibold">John Doe</h4>
                <p className="text-xs text-gray-500">Online</p>
            </div>

        </div>


        <div className="h-[70dvh] p-4 ">

            {messages.map((message , index)=> {
                
                if(message.is_me) {

                    return (
                        <div className="max-w-1/3 ml-auto  ">

                            <p className="bg-[#5A38F5] text-white p-2 rounded-lg ">
                                {message.message}
                            </p>

                            <p className="text-[10px] text-right text-[#717182]  ">
                                {message.time}
                            </p>
    
    
                        </div>
                    )
                }else{
                    return (
                        <div className="max-w-1/3">

                            <div className="flex items-end   ">
                              <img 
                                src={message.image}
                                alt="profile"
                                className="w-6 h-6 rounded-full object-cover"
                                />

                                <div className="ml-2">
                                    <p className="bg-[#F0F0F0] text-gray-800 p-2 rounded-lg ">
                                        {message.message}
                                    </p>
                                    <p className="text-[10px] text-left text-[#717182]  ">
                                        {message.time}
                                    </p>
                                </div>


                            </div>
    
    
                        </div>
                    )

                }

            })}

            

        </div>


        {/* send input box */}
        <div className="relative p-4 ">
            <Input
                className="py-5 rounded-full  "
                placeholder="Type a message..." 
            />

            <Button
              className="  border border-primary/10 rounded-full absolute top-1/2 -translate-y-1/2 right-5 z-2 text-primary hover:text-white bg-transparent hover:bg-[#5A38F5] cursor-pointer     "
            >
                <BsSend />
                
            </Button>

        </div>







    </div>
  )
}