import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro.jsx";
import BasicExample from "./Componentes/Navbar.jsx";
import PaginaInicial from "./pages/PaginaInicial/PaginaInicial.jsx";
import Turmas from "./pages/Turmas/Turmas.jsx";
import Aluno from "./pages/Aluno/Aluno.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function MainRoutes() {
    return (
        < Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/cadastro" element={<Cadastro />}></Route>
            <Route path="/Navbar" element={<BasicExample />}></Route>
            <Route path="/PaginaInicial" element={<PaginaInicial />}></Route>
            <Route path="/Turmas" element={<Turmas />}></Route>
            <Route path="/Aluno" element={<Aluno />}></Route>


        </Routes>
    )
}
export default MainRoutes;