import ChatSupport from "@/components/ChatSupport/ChatSupport"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import { Outlet } from "react-router-dom"

const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
            <ChatSupport />
            <Footer />
        </>
    )
}

export default Main