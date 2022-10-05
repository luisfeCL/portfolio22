import "./home.css";
import Contact from "../../components/contact/contact";

export default function Home() {
    return (
        <>
        <section className="home">
            <h1 className="greeting">hello!</h1>
            <article className="home__content">
                <p className="presentation">
                    Welcome to my portfolio!<br/> I’m <span className="text">Luisfe</span>, a frontend developer and motion
                    graphic designer based in Valencia, Spain.<br/> Here you can find a
                    collection of my recents projects.<br/> And if you want to talk (or hire me)
                    don’t doubt and write me!!
                </p>
                
                    <Contact></Contact>
                
            </article>
        </section>
        </>
    );
    }
