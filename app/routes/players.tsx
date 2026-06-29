import Container from "~/components/common/container"
import PlayerCard from "~/components/common/player-card"
import PlayerFilters from "~/components/custom/player-filters"
import type { TPlayerCard } from "~/types"

export default function players() {
  const allPlayers: TPlayerCard[] = [
    {
      image_url: "/images/player.png",
      name: "Virat Kohli",
      role: "Batsman",
      rating: 4.8,
      id: "1",
    },
    {
      image_url: "/images/player.png",
      name: "Virat Kohli",
      role: "Batsman",
      rating: 4.8,
      id: "2",
    },
    {
      image_url: "/images/player.png",
      name: "Virat Kohli",
      role: "Batsman",
      rating: 4.8,
      id: "3",
    },
    {
      image_url: "/images/player.png",
      name: "Virat Kohli",
      role: "Batsman",
      rating: 4.8,
      id: "4",
    },
    {
      image_url: "/images/player.png",
      name: "Virat Kohli",
      role: "Batsman",
      rating: 4.8,
      id: "5",
    },
    {
      image_url: "/images/player.png",
      name: "Virat Kohli",
      role: "Batsman",
      rating: 4.8,
      id: "6",
    },
    {
      image_url: "/images/player.png",
      name: "Virat Kohli",
      role: "Batsman",
      rating: 4.8,
      id: "7",
    },
    {
      image_url: "/images/player.png",
      name: "Virat Kohli",
      role: "Batsman",
      rating: 4.8,
      id: "8",
    },
    {
      image_url: "/images/player.png",
      name: "Virat Kohli",
      role: "Batsman",
      rating: 4.8,
      id: "9",
    },
    {
      image_url: "/images/player.png",
      name: "Virat Kohli",
      role: "Batsman",
      rating: 4.8,
      id: "10",
    },
  ]

  return (
    <section className="pb-25">
      {/* banner */}
      <div
        className="py-17"
        style={{
          background: "url('/images/authbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="pt-17 text-center text-[48px] font-bold text-[#1E1E24]">
          Meet your favorite players.
        </h2>
        <p className="commonP text-center">
          Connect directly with your favorite stars.
        </p>
      </div>

      {/* player s */}
      <Container>
        <PlayerFilters />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {allPlayers.map((player, index) => (
            <PlayerCard key={index} {...player} />
          ))}
        </div>
      </Container>
    </section>
  )
}
