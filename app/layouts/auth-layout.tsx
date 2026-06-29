import { Outlet } from "react-router"
import Nav from "~/components/common/nav"

export default function AuthLayout({}: {}) {
  return (
    <>
      <Nav />
      <div className="h-dvh grid place-items-center    "
        style={{
          backgroundImage: "url('/images/authbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Outlet />
      </div>
    </>
  )
}
