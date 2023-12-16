import { useState } from 'react'
import Books from '../mockup/books.json'
import './asideFilter.css'

export default function AsideFilter () {
  const lenguajesObj = Books.filter(tech => tech.Categoria === 'Lenguaje de Programacion' && { ...tech })
  const lenguajesArr = Array.from(new Set(lenguajesObj.map(tech => tech.Lenguaje))).filter(no => no !== 'General').sort()
  const lengujesOrden = lenguajesArr.toSpliced(0, 0, 'General')

  const [programCheck, setProgramCheck] = useState(false)
  const handlechekProgra = () => {
    setProgramCheck(!programCheck)
  }
  return (
    <aside className="aside-filter">
      <section onClick={handlechekProgra} className="section-filter">
        <h2>Programación </h2>
        <input type="checkbox" checked={programCheck} readOnly hidden />
        <span className={`arrow ${programCheck && 'arrowback'}`}>⌃</span>
      </section>
      <div className={`section-program  ${!programCheck && 'hidden'}`}>
        {lengujesOrden.map((leng, idx) => (
          <p className="tecnology" key={idx}>
            {leng}
          </p>
        ))}
      </div>
      <hr />
      <section className="section-filter">
        <h2>Diseño UI/UX</h2>
        <span className="arrow">⌃</span>
      </section>
      <hr />
      <section className="section-filter">
        <h2>Base de Datos</h2>
        <span className="arrow">⌃</span>
      </section>
      <hr />
      <section className="section-filter">
        <h2>Otros</h2>
        <span className="arrow">⌃</span>
      </section>
    </aside>
  )
}
