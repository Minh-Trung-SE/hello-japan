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
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter