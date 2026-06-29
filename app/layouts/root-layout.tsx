import { Outlet } from "react-router";
import Footer from "~/components/common/footer";
import Nav from "~/components/common/nav";

 

export default function RootLayout({}: {}) {
  return (
    <>

    <Nav/>


    <Outlet/>

    <Footer/>
    </>
  )
}