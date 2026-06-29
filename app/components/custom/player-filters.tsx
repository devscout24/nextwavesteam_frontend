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

export default function PlayerFilters({}: {}) {

    const tabs = [
        {id: "", label: "All"},
        {id: "batsman", label: "Batsman"},
        {id: "all_rounder", label: "All-Rounder"},
        {id: "fast_bowler", label: "Fast Bowler"},
        {id: "spinner", label: "Spinner"},
        {id: "wicket_keeper", label: "Wicket-Keeper"}, 

    ]

  return (
    <div className="pt-17">
      {/* search and filter options */}
      <div className="rounded-full border p-3 flex items-center gap-8    ">
        {/* search */}
        <div className="relative flex-1   ">
          <CiSearch className="absolute top-1/2 left-2 -translate-y-1/2" />
          <Input
            className="rounded-full py-4! pl-7"
            placeholder="Search players..."
          />
        </div>

        {/* filter options */}
        <Select>
          <SelectTrigger className="w-45 rounded-full py-4!   ">
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


      {/* btn filters */}
      <div className=" w-full  md:w-3/5 py-6  "> 
        <AnimatedTabs
            tabs={tabs}
            bg="bg-[#fff]"
            aminatebg="bg-[#F5C542]"
            activeTxt="text-primary"
            onTabChange={(id) => {
                console.log(id)
            }}
        />
      </div>


    </div>
  )
}
