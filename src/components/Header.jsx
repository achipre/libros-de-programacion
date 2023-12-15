import Logo from '../assets/logo.svg'
import Github from '../assets/github.svg'
import './header.css'
export default function Header () {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo de Libros" />
        <h1>Libros de Programación</h1>
      </div>
      <div className="header-github">
        <p>Deja Tu Estrella</p>
        <img src={Github} alt="Logo de Github" />
      </div>
    </header>
  )
}
