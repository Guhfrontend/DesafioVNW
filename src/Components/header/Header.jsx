import React from 'react'
import logo from "../../assets/2702154 1logo.png"
import lupa from "../../assets/search.png"
import s from './Header.module.scss'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import QueroDoar from '../../Pages/QueroDoar/QueroDoar'
import LivrosDoados from '../../Pages/LivrosDoados/LivrosDoados'


export default function Header() {
  return (

      <BrowserRouter>
        <header className={s.header}>
          <section>
            <img src={logo} alt="logo" />
            <h1>Livros Vai na Web</h1>
          </section>
          <nav className={s.navegacao}>
            <ul>
              <li><Link className={s.link} to="/">Inicio</Link></li>
              <li><Link className={s.link} to="/doados">Livros Doados</Link></li>
              <li><Link className={s.link} to="/doar">Quero Doar</Link></li>
            </ul>
          </nav>
          <div className={s.busca}>
            <input type="text" placeholder='O que você procura?' />
            <button><img src={lupa} alt="lupa" /></button>
          </div>
        </header>
        <Routes>
          <Route path="/querodoar" element={<QueroDoar />} />
          <Route path="/livrosdoados" element={<LivrosDoados />} />
          <Route path="/querodoar" element={<QueroDoar />} />
        </Routes>
      </BrowserRouter>

  )
}