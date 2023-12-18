import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer () {
  return (
    <footer className="footer">
      <p>
        Escribeme <Link to='/contacto'>aqui</Link> si quieres que agregue un libro
      </p>

    </footer>
  )
}
