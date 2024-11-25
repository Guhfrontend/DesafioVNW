import React from 'react'
import s from './Home.module.scss'
import imagem from '../../assets/balance.png'
import imagem1 from '../../assets/community.png'
import imagem2 from '../../assets/reading.png'
import imagem3 from '../../assets/transform.png'

export default function main() {
  return (
    <main>
      <section className={s.principal}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>

      <section className={s.porqueDoar}>
        <h2>Por que devo doar?</h2>

        <article className={s.card}>
          <figure>
            <img src={imagem1} alt="" />
            <figcaption> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</figcaption>
          </figure>

          <figure>
            <img src={imagem2} alt="" />
            <figcaption>Estimula o hábito da leitura e o aprendizado contínuo.</figcaption>
          </figure>

          <figure>
            <img src={imagem3} alt="" />
            <figcaption>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</figcaption>
          </figure>

          <figure>
            <img src={imagem} alt="" />
            <figcaption>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</figcaption>
          </figure>
        </article>
      </section>

    </main>
  )
}
