import { Outlet, Link } from "react-router-dom";

//header e navbar
const Layout = () => {
  return (
    <>

      <header> 
        
        <h1 className="hElements"> Bem Vindo </h1>

        <nav>

          <p className="hElements" ><Link to="/produtos">Jogos</Link></p>
          <p className="hElements"><Link to="/registro">Registrar</Link></p>

        </nav>

      </header>

      <Outlet />
    </>
  )
};

export default Layout;