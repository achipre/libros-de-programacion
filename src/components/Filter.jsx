import './section.css'

export default function Filter ({ info }) {
  return (
    <div className="card-book">
      <div className="card-book__boximg">
        <img
          loading='lazy'
          width={471}
          height={667}
          className="card-book__img"
          src={info.Imagen}
          alt={info.Titulos}
          sizes="(max-width: 275px)"
        />
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
  )
}
