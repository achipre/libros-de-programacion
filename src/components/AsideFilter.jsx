import { useState } from 'react'
import Books from '../mockup/books.json'
import './asideFilter.css'
import { NavLink } from 'react-router-dom'

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
      <section to={'otros'} onClick={handlechekProgra} className="section-filter">
        <h2>Programación </h2>
        <input type="checkbox" checked={programCheck} readOnly hidden />
        <span className={`arrow ${programCheck && 'arrowback'}`}>⌃</span>
      </section>
      <div className={`section-program  ${!programCheck && 'hidden'}`}>
        {lengujesOrden.map((leng, idx) => (
          <NavLink
            to={leng === 'C#' ? 'csharp' : leng.toLowerCase()}
            className={({ isActive }) =>
              isActive ? 'tecnology section-filter__active' : 'tecnology'
            }
            key={idx}
          >
            {leng}
          </NavLink>
        ))}
      </div>
      <hr />
      <NavLink
        to={'diseno-ui-ux'}
        className={({ isActive }) =>
          isActive ? 'section-filter section-filter__active' : 'section-filter'
        }
      >
        <h2>Diseño y CSS</h2>
      </NavLink>
      <hr />
      <NavLink
        to={'cloud'}
        className={({ isActive }) =>
          isActive ? 'section-filter section-filter__active' : 'section-filter'
        }
      >
        <h2>Cloud</h2>
      </NavLink>
      <NavLink
        to={'metodologias-agiles'}
        className={({ isActive }) =>
          isActive ? 'section-filter section-filter__active' : 'section-filter'
        }
      >
        <h2>Metodologías Águiles</h2>
      </NavLink>
      <hr />
      <NavLink
        to={'base-de-datos'}
        className={({ isActive }) =>
          isActive ? 'section-filter section-filter__active' : 'section-filter'
        }
      >
        <h2>Base de Datos</h2>
      </NavLink>
      <hr />
      <NavLink
        to={'otros'}
        className={({ isActive }) =>
          isActive ? 'section-filter section-filter__active' : 'section-filter'
        }
      >
        <h2>Otros</h2>
      </NavLink>
    </aside>
  )
}
