import { Menu } from "lucide-react"
import type { TNavItem } from "~/types"
import Logo from "./logo"
import { Link, useLocation } from "react-router"
import { Button } from "../ui/button"
import NavIconBtns from "./nav-icon-btns"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "~/components/ui/drawer"

export default function Nav({ className }: { className?: string }) {
  const navItems: TNavItem[] = [
    { label: "Products", href: "/products" },
    { label: "Players", href: "/players" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  const location = useLocation();

  console.log("Current location:", location.pathname);



  return (
    <nav className={`fixed top-0 z-50 w-full border-b bg-white ${className}`}>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4">

        {/* Logo */}
        <Logo className="h-14 w-14" />

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={`font-medium pb-0.5! border-b  text-[#0E0F23CC] transition hover:text-[#5A38F5]
                  ${location.pathname === item.href ? "text-[#5A38F5] border-[#5A38F5] " : "border-transparent"}
                  `}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <NavIconBtns />

          <Button
            className="rounded-full px-6 py-5"
            style={{
              background:
                "linear-gradient(172deg,#5A38F5 0%,#9A3FF1 100%)",
            }}
          >
            Select Your Item
          </Button>
        </div>

        {/* Mobile Drawer */}
        <div className="md:hidden">
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-7 w-7" />
              </Button>
            </DrawerTrigger>

            <DrawerContent className="ml-auto h-screen w-75 rounded-l-2xl rounded-r-none">

              <div className="flex items-center justify-between border-b p-6">
                <Logo className="h-12 w-12" />

                <DrawerClose asChild>
                  <Button variant="ghost" size="icon">
                    ✕
                  </Button>
                </DrawerClose>
              </div>

              <div className="flex flex-col p-6">

                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="border-b py-4 text-lg font-medium"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="mt-6">
                  <NavIconBtns />
                </div>

                <Button
                  className="mt-6 w-full rounded-full py-6"
                  style={{
                    background:
                      "linear-gradient(172deg,#5A38F5 0%,#9A3FF1 100%)",
                  }}
                >
                  Select Your Item
                </Button>

              </div>

            </DrawerContent>
          </Drawer>
        </div>

      </div>
    </nav>
  )
}