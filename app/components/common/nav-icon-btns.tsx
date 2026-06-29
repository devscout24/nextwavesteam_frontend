import { LuBell } from "react-icons/lu"
import { Button } from "../ui/button"
import { BsCart2 } from "react-icons/bs"
import { LuUser } from "react-icons/lu"
import { Link } from "react-router"
import TestModal from "../test-modal"

export default function NavIconBtns({}: {}) {
  return (
    <div className="flex items-center gap-4">
      <Link 
        to="/notifications"
      className="relative bg-transparent text-primary! hover:bg-transparent">
        <LuBell className="size-5" />
      </Link>
      <Link
        to="/carts"
        className="relative bg-transparent text-primary! hover:bg-transparent"
      >
        <BsCart2 className="size-5" />
      </Link>
      {/* <Link
      to="/player/me"
      className="relative bg-transparent text-primary! hover:bg-transparent">
        <LuUser className="size-5" />
      </Link> */}
      <TestModal/>
    </div>
  )
}
