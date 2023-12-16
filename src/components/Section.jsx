import Book from '../mockup/books.json'
import './section.css'
export default function Section () {
  const informacion = Book
  return (
    <section className='grid-book'>
      {informacion.map(info => (
        <div className="card-book" key={info.Id}>
          <img className="card-book__img" src={info.Imagen} alt={info.Titulos} />
          <p className="card-book__title">{info.Titulos}</p>
          <p className="card-book__autor">{info.Autores}</p>
        </div>
      ))}
    </section>
  )
}
