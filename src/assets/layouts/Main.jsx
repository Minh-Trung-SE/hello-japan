import Header from "@/components/Header/Header"
import { Outlet } from "react-router-dom"

const Main = () => {
    return (
        <>
            <Header />
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Main