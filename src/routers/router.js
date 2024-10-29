import { Route, Routes } from "react-router-dom"
import { Photos } from "../pages/photos/photos"
import { Home } from "../pages/Home/home"
import { ReviewList } from "../pages/coments/coments"
import { ContactPage } from "../pages/contact/contact"

export const Rotas = () => {
     return(
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Photos" element={<Photos/>} />
                <Route path="/Coments" element={<ReviewList/>} />
                <Route path="/Contact" element={<ContactPage/>} />
            </Routes>

     )
}
