import Contact from "@components/Contact/Contact"
import Footer from "@components/Footer/Footer"
import Header from "@components/Header/Header"
import ChatSupport from "@components/Home/Chat/Chat"
import { Outlet } from "react-router-dom"

const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
            <ChatSupport />
            <Contact />
            <Footer />
        </>
    )
}

export default Main