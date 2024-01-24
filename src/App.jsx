import { useState } from "react";
import { Buscador } from "./components/Buscador"
import { Crear } from "./components/Crear"
import { Listado } from "./components/Listado"


function App() {

    const [ listadoState, setListadoState ] = useState([]);
 

  return (
    <div className="layout">
        
        {/*Cabecera*/}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>Mis Pelis</h1>
        </header>

        {/*Barra de navegacion*/}
        <nav className="nav">
            <ul>
                <li>
                    <a href="/#">Inicio</a>
                </li>
                <li>
                    <a href="/#">Películas</a>
                </li>
                <li>
                    <a href="/#">Blog</a>
                </li>
                <li>
                    <a href="/#">Contacto</a>
                </li>
            </ul>
        </nav>

        {/*Contenido principal*/}
        <section className="content">

            {/*Aqui van las peliculas*/}
            <Listado listadoState={listadoState} setListadoState={setListadoState} />
            

        </section>

        {/*Barra lateral*/}
        <aside className="lateral">
            <Buscador listadoState={listadoState} setListadoState={setListadoState} />

            <Crear setListadoState={setListadoState} />
        </aside>

        {/*Pie de página*/}
        <footer className="footer">
            &copy; Mis Pelis 2023
        </footer>
    </div>
  )
}

export default App
