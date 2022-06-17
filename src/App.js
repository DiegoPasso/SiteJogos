import Layout from "./pages/layout";
import Produtos from "./pages/produtos";
import Registro from "./pages/registro";
import Produto from "./pages/Produto";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from "./Componentes/footer";

function App() {
  return (
    <div className="App">
      <Footer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="registro" element={<Registro />} />
            <Route path="produtos" element={<Produtos />} />
            <Route path="produto" element={<Produto />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
