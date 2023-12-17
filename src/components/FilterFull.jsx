import Book from '../mockup/books.json'
import './section.css'

export default function FilterFull () {
  const informacion = Book
  return (
    <>
      {informacion.map(info => (
        <div key={info.Id} className="card-book">
          <div className="card-book__boximg">
            <img className="card-book__img" src={info.Imagen} alt={info.Titulos} />
            <div className="card-book__lang">
              {info.Formato.map((lang, idx) => (
                <a key={idx} className="lang__esp" href={lang.url} target="_blank" rel="noreferrer">
                  {lang.formato}
                </a>
              ))}
            </div>
          </div>
          <p className="card-book__title">{info.Titulos}</p>
          <p className="card-book__autor">{info.Autores}</p>
        </div>
      ))}
    </>
  )
}
