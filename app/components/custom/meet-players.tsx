import type { TBubblePlayers } from "~/types"
import Container from "../common/container"

export default function MeetPlayers() {
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
    <section className="py-14 md:py-20 lg:py-25">
      <Container>
        <h2 className="text-center text-3xl font-bold text-[#1E1E24] sm:text-4xl lg:text-5xl">
          Meet the Players
        </h2>

        <p className="commonP mx-auto mt-3 max-w-2xl text-center">
          Connect with India's top cricketers through direct messages.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {players.map((player) => (
            <div
              key={player.name}
              className="flex flex-col items-center text-center"
            >
              <img
                src={player.image_url}
                alt={player.name}
                className="h-32 w-32 object-contain sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 xl:h-60 xl:w-60"
              />

              <p className="mt-3 text-sm font-medium text-[#1E1E24] sm:text-base lg:text-xl">
                {player.name}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}