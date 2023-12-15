import './asideFilter.css'
import Books from '../mockup/books.json'
import { useState } from 'react'
export default function AsideFilter () {
  const tecnologies = Books.map(tech => tech.Lenguaje).sort()
  const [programCheck, setProgramCheck] = useState(false)
  const handlechekProgra = () => {
    setProgramCheck(!programCheck)
  }
  console.log(tecnologies)
  return (
    <aside className="aside-filter">
      <section onClick={handlechekProgra} className="section-filter">
        <h2>Programación </h2>
        <input type="checkbox" checked={programCheck} hidden />
        <span>⌃</span>
      </section>
      <div className="section-program">
        {tecnologies.map((tech, i) => (
          <p className="tecnology" key={i}>
            {tech}
          </p>
        ))}
      </div>
      <hr />
      <section className="section-filter">
        <h2>Diseño UI/UX</h2>
        <span>⌃</span>
      </section>

      <hr />
      <section className="section-filter">
        <h2>Base de Datos</h2>
        <span>⌃</span>
      </section>
    </aside>
  )
}
