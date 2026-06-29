import type { TNavItem } from "~/types"
import Logo from "./logo"
import { Link } from "react-router"
import { Button } from "../ui/button" 
import NavIconBtns from "./nav-icon-btns"

export default function Nav({className}: {className?: string}) {
  const navItems: TNavItem[] = [
    { label: "Products", href: "/products" },
    { label: "Players", href: "/players" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav className={`fixed top-0 z-50 w-full bg-white ${className}`}>
      <div className="mx-auto flex max-w-255 items-center justify-between px-2      ">
        {/* logo */}
        <Logo className="h-15 w-15" />

        {/* nav items */}
        <ul className="font-inter flex items-center gap-6 font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="inline-block px-2">
              <Link
                to={item.href}
                className="text-base font-medium text-[#0E0F23CC] transition-colors duration-300 hover:text-[#5A38F5]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* actions btns */}
        <div className="flex items-center gap-4">
          <NavIconBtns/>
          <Button
            className="rounded-full px-6! py-5!"
            style={{
              background:
                "linear-gradient(172deg,rgba(90, 56, 245, 1) 0%, rgba(154, 63, 241, 1) 100%, rgba(237, 221, 83, 1) 100%)",
            }}
          >
            Select Your Item
          </Button> 
        </div>
      </div>
    </nav>
  )
}
