import { Route, Routes } from "react-router-dom"
import { Photos } from "../pages/photos/photos"
import { Home } from "../pages/Home/home"
import { CommentsPage } from "../pages/coments/coments"

export const Rotas = () => {
     return(
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Photos" element={<Photos/>} />
                <Route path="/Coments" element={<CommentsPage/>} />
            </Routes>

     )
}
