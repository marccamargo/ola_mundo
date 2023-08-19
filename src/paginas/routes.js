import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./componentes/Menu";
import Início from './paginas/Início';
import SobreMim from './paginas/SobreMim';

import PaginaPadrao from "componentes/PaginaPadrao";

function AppRoutes(){
    return (
    <BrowserRouter>
            <Menu />

        <Routes>
                <Route path="/" element={<PaginaPadrao />}>
                <Route index element={<Início />} />
                <Route path="sobremim" element={<SobreMim />} />
                
            </Route>


            <Route path="*" element={<div>Página não encontrada</div>} />
        </Routes>
        
    </BrowserRouter>
    )
}

export default AppRoutes;