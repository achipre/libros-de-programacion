import { Link } from 'react-router-dom'
import Home from '../assets/home.svg'
import Menu from '../assets/menu.svg'
import Github from '../assets/github.svg'
import './header.css'
export default function Header ({ handleOpenAside }) {
  return (
    <header className="header">
      <div className="logo">
        <Link className="icon-logo" to="/">
          <img src={Home} alt="Logo de Libros" />
        </Link>
        <img onClick={handleOpenAside} className="logo-menu" src={Menu} alt="menu" />
        <h1>Libros de Programación</h1>
      </div>
      <p className="header-title">LP</p>
      <a
        href="https://github.com/achipre/libros-de-programacion"
        target="_blank"
        className="header-github"
        rel="noreferrer"
      >
        <p>Deja Tu Estrella</p>
        <img src={Github} alt="Logo de Github" />
      </a>
    </header>
  )
}
