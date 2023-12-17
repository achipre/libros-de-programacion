import AsideFilter from './components/AsideFilter'
import Background from './components/Background'
import Footer from './components/Footer'
import Header from './components/Header'
import Section from './components/Section'

import { BrowserRouter } from 'react-router-dom'

export default function App () {
  return (
    <BrowserRouter>
      <main className="principal">
        <Background />
        <article>
          <Header />
          <hr />
          <section className="principal-main">
            <AsideFilter />
            <Section />
          </section>
          <hr />
          <Footer />
        </article>
      </main>
    </BrowserRouter>
  )
}
