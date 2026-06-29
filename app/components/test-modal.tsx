import { LuUser } from "react-icons/lu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import { Button } from "./ui/button"
import { useNavigate } from "react-router"
import React from "react"
export default function TestModal({}: {}) {
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false)

    const handleClick = (type: "player" | "user" | "auth") => {
       if (type === "player") {
        localStorage.setItem("testMode", "player")
        setOpen(false)
        navigate("/player/me")
       }
       if (type === "user") {
        localStorage.setItem("testMode", "user")
        setOpen(false)
        navigate("/user/me")
       } 
       if (type === "auth") { 
        setOpen(false)
        navigate("/auth")
       }

    }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <LuUser className="size-5" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select a mode that you want to test</DialogTitle>
          <DialogDescription>
            <p className="commonP text-[12px]   ">
              this popup is for testing purpose only, After testing and
              finalizing integration this will be removed.
            </p>

            <div className="flex mt-10 justify-end ">
              <Button onClick={() => handleClick("player")}>Player</Button>
              <Button onClick={() => handleClick("user")}>User</Button>
              <Button onClick={() => handleClick("auth")}>Auth</Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
