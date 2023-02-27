import Main from "@assets/layouts/Main"
import Home from "@pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Main />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter