import { Link } from "react-router-dom";

export default function CustomHeader() {
    return (
        <header>
            <Link className="logo" to="/" >
                <img src={new URL("../assets/logo.png", import.meta.url)} alt="Logo" />
            </Link>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Pagina inicial</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre nós</Link>
                    </li>
                    <li>
                        <Link to="/servicos">Serviços</Link>
                    </li>
                    <li>
                        <Link to="/contactos">Contactos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}