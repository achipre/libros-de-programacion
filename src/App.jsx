import { useState } from 'react'
import AsideFilter from './components/AsideFilter'
import Background from './components/Background'
import Footer from './components/Footer'
import Header from './components/Header'
import Section from './components/Section'

import { BrowserRouter } from 'react-router-dom'

export default function App () {
  const [width, setWidth] = useState(window.innerWidth)
  window.addEventListener('resize', () => setWidth(window.innerWidth))
  const [openAside, setOpenAside] = useState(false)
  const handleOpenAside = () => {
    setOpenAside(!openAside)
  }
  return (
    <BrowserRouter>
      <main className="principal">
        <Background />
        <article>
          <Header handleOpenAside={handleOpenAside} />
          <hr />
          <section className="principal-main">
            {width > 799 && <AsideFilter />}
            <Section />
          </section>
          <hr />
          <Footer />
        </article>
      </main>
      {width < 799 && (
        <aside className={`aside-mobile ${openAside && 'openAside'}`}>
          <span className="close-aside" onClick={handleOpenAside}>
            𐢫
          </span>
          <AsideFilter />
        </aside>
      )}
    </BrowserRouter>
  )
}
