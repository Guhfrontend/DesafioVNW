import React from 'react'
import iconeLivro from "../../assets/iconeLivro.png"
import s from './QueroDoar.module.scss'


export default function QueroDoar() {
    return (
        <>
            <section>
                <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
                <form action="">
                    <div>
                        <img src={iconeLivro} alt="icone de livro" />
                        <h2>Informações do Livro</h2>
                    </div>
                    <input type="text" placeholder='Titulo'/>
                    <input type="text" placeholder='Categoria'/>
                    <input type="text" placeholder='Autor'/>
                    <input type="text" placeholder='Link da imagem'/>
                </form>
            </section>
        </>
    )
}
