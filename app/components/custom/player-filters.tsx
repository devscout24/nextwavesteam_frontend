import { CiSearch } from "react-icons/ci"
import { Input } from "../ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import { AnimatedTabs } from "../common/aminated-tab"

export default function PlayerFilters() {
  const tabs = [
    { id: "", label: "All" },
    { id: "batsman", label: "Batsman" },
    { id: "all_rounder", label: "All-Rounder" },
    { id: "fast_bowler", label: "Fast Bowler" },
    { id: "spinner", label: "Spinner" },
    { id: "wicket_keeper", label: "Wicket-Keeper" },
  ]

  return (
    <div className="  ">
      {/* Search + Sort */}
      <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 p-4 sm:flex-row sm:items-center sm:gap-5">
        {/* Search */}
        <div className="relative flex-1">
          <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-500" />

          <Input
            placeholder="Search players..."
            className="h-12 rounded-full pl-11"
          />
        </div>

        {/* Sort */}
        <Select>
          <SelectTrigger className="h-12 w-full rounded-full sm:w-56">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectItem value="most">Most Popular</SelectItem>
              <SelectItem value="least">Least Popular</SelectItem>
              <SelectItem value="default">Default</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Tabs */}
      <div className="mt-6 w-full overflow-x-auto">
        <div className="min-w-max">
          <AnimatedTabs
            tabs={tabs}
            bg="bg-white"
            aminatebg="bg-[#F5C542]"
            activeTxt="text-primary"
            onTabChange={(id) => console.log(id)}
          />
        </div>
      </div>
    </div>
  )
}