import { Route, Routes } from "react-router-dom"
import { Tierra } from "../componentes/Tierra"
import { Agua } from "../componentes/Agua"
import { Fuego } from "../componentes/Fuego"
import { Aire } from "../componentes/Aire"
import { Inicio } from "../componentes/Inicio"
import SignInSide from "../componentes/SignInSide"



export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<SignInSide />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/tierra" element={<Tierra />} />
            <Route path="/agua" element={<Agua />}/>
            <Route path="/fuego" element={<Fuego />}/>
            <Route path="/aire" element={<Aire />}/>
        </Routes>
    )
}