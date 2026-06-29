import Container from "~/components/common/container"
import PlayerCard from "~/components/common/player-card"
import PlayerFilters from "~/components/custom/player-filters"
import type { TPlayerCard } from "~/types"

export default function Players() {
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
    <section className="pb-14 md:pb-20 lg:pb-25">
      {/* Banner */}
      <div
        className="px-4 pt-45 pb-24 "
        style={{
          backgroundImage: "url('/images/playerbanner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative   ">
          <h2 className="mx-auto max-w-4xl text-center text-3xl font-bold text-[#1E1E24] sm:text-4xl lg:text-5xl">
            Meet your favorite players.
          </h2>

          <p className="commonP mx-auto mt-4 max-w-2xl text-center">
            Connect directly with your favorite stars.
          </p>
        </div>
      </div>

      {/* Players */}
      <Container>
        <div className="mt-8">
          <PlayerFilters />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
          {allPlayers.map((player) => (
            <PlayerCard key={player.id} {...player} />
          ))}
        </div>
      </Container>
    </section>
  )
}
