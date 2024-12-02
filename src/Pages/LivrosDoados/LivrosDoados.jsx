import React from 'react'
import protagonista from '../../assets/LivroProtagonista.png'
import s from './LivrosDoados.module.scss'

export default function LivrosDoados() {
  return (
    <>
      <section className={s.livrosDoados}>
        <h2>Livros Doados</h2>
        <article className={s.conainerCards}>
          
          <div className={s.cardLivro}>
            <img src={protagonista} alt="" />
            <div className={s.autor}>
              <h3>O protagonista</h3>
              <p>Susane Andrade</p>
              <p>Ficção</p>
            </div>

          </div>
          <div className={s.cardLivro}>
            <img src={protagonista} alt="" />
            <div className={s.autor}>
              <h3>O protagonista</h3>
              <p>Susane Andrade</p>
              <p>Ficção</p>
            </div>
          </div>

          <div className={s.cardLivro}>
            <img src={protagonista} alt="" />
            <div className={s.autor}>
              <h3>O protagonista</h3>
              <p>Susane Andrade</p>
              <p>Ficção</p>
            </div>
          </div>

        </article>
      </section>
    </>
  )
}
