import "./aboutme.css"
import Contact from "../../components/contact/contact"

export default function About(){
    return(
        <>
            <h1 className="title"> about me</h1>
            <section className="about">
                <article className="about__container">
                    <img className="about__image" src="/foto.png" alt="" />
                    <div className="about__content">
                        <button className="button resume">Check my resume!</button>
                        <p className="about__text presentation">Since i was a kid i’ve been a lover of interactivity with technologies and the design, and when i was studying my degree in Audiovisual communication i found in web development the way to combine these two passions.
                            then i started my studies in ESAT in valencia.
                            Now i’m trying to become a better developer  and make beautiful and accesible webs for everyone.
                        </p>
                    </div>
                </article>
                    <Contact></Contact>
            </section>
        </>
    )
}