import Book from '../mockup/books.json'
import './section.css'
export default function Section () {
  const informacion = Book
  return (
    <section className="grid-book">
      {informacion.map(info => (
        <div className="card-book" key={info.Id}>
          <div className="card-book__boximg">
            <img className="card-book__img" src={info.Imagen} alt={info.Titulos} />
            <div className="card-book__lang">
              {info.Formato.map((lang, idx) => (
                <a key={idx} className="lang__esp" href={lang.url} target='_blank' rel="noreferrer">
                  {lang.formato}
                </a>
              ))}
            </div>
          </div>
          <p className="card-book__title">{info.Titulos}</p>
          <p className="card-book__autor">{info.Autores}</p>
        </div>
      ))}
    </section>
  )
}
