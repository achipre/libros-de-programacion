import { Routes, Route } from 'react-router-dom'
import Filter from './Filter'
import Book from '../mockup/books.json'
import './section.css'
import FilterFull from './FilterFull'

export default function Section () {
  const informacion = Book
  return (
    <section className="grid-book">
      <Routes>
        <Route path="" element={<FilterFull />}></Route>
      </Routes>
      {informacion.map(info => (
        <Routes key={info.Id}>
          <Route
            path={info.Lenguaje === 'C#' ? 'csharp' : info.Lenguaje}
            element={<Filter info={info} />}
          ></Route>
        </Routes>
      ))}
    </section>
  )
}
