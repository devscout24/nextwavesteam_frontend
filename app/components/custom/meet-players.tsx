 
import type { TBubblePlayers } from "~/types"
import Container from "../common/container" 

export default function MeetPlayers({}: {}) {
  const players: TBubblePlayers[] = [
    { name: "Virat Kohli", image_url: "/images/Virat_Kohli.png" },
    { name: "Rohit Sharma", image_url: "/images/Rohit_Sharma.png" },
    { name: "Jasprit Bumrah", image_url: "/images/Jasprit_Bumrah.png" },
    { name: "Ravindra Jadeja", image_url: "/images/Ravindra_Jadeja.png" },
    { name: "KL Rahul", image_url: "/images/KL_Rahul.png" },
    { name: "Hardik Pandya", image_url: "/images/Hardik_Pandya.png" },
    { name: "Shubman Gill", image_url: "/images/Shubman_Gill.png" },
    { name: "Rishabh Pant", image_url: "/images/Rishabh_Pant.png" },
    { name: "Suryakumar Yadav", image_url: "/images/Suryakumar_Yadav.png" },
    { name: "Mohammed Siraj", image_url: "/images/Mohammed_Siraj.png" },
  ]

  return (
    <div className="py-25">
      <h2 className="text-center text-[48px] font-bold text-[#1E1E24]">
        Meet the Players
      </h2>
      <p className="commonP text-center">
        Connect with India's top cricketers through direct messages.
      </p>

      <Container>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {players.map((player, index) => (
            <div key={index} className=" flex items-center flex-col     "  >
              <img
                src={player.image_url}
                alt={player.name}
                className="h-59.5 w-59.5"
              />
              <p className="font-medium text-xl  text-[#1E1E24]   ">{player.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
