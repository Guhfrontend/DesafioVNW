import React from 'react'
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"
import twitter from "../../assets/twitter.png"
import youtube from "../../assets/youtube.png"
import s from './Footer.module.scss'

export default function Footer() {
    return (
        <>
            <footer>
                <section className={s.contatosFooter}>
                    <p>4002-8922</p>
                    <nav>
                        <a href=""><img src={facebook} alt="" /></a>
                        <a href=""><img src={twitter} alt="" /></a>
                        <a href=""><img src={youtube} alt="" /></a>
                        <a href=""><img src={linkedin} alt="" /></a>
                        <a href=""><img src={instagram} alt="" /></a>
                    </nav>
                </section>
                <div className={s.copyright} >
                    <p>© 2022 Livros vai na Web. Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    )
}