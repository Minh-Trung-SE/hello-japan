import LaborExport from "@/pages/LaborExport"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import StudyAboard from "@/pages/StudyAboard"
import Main from "@assets/layouts/Main"
import Home from "@pages/Home"
import Introduction from "@pages/Introduction"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Main />}>
                    <Route index element={<Home />} />
                    <Route path="introduction" element={<Introduction />} />
                    <Route path="japanese-study-abroad" element={<StudyAboard />} />
                    <Route path="japanese-labor-export" element={<LaborExport />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter