
import "./nav.css"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Nav(){
    const [open, setOpen] = useState(false)
    return(
        <>
            <nav>
                <Link to={`/projects`} className="button desktop">projects</Link>
                <Link to={`/about`} className="button desktop">about me</Link>
                <button onClick={()=>setOpen(true)} className="button mobile">Menu</button>
                <section className={open ? "menu" : "menu closed"}>
                    <span onClick={()=>setOpen(false)} className="title">X</span>
                    <div className="button__container title">
                        <Link onClick={()=>setOpen(false)} to={`/`} className="menu__button">Home</Link>
                        <Link onClick={()=>setOpen(false)} to={`/projects`} className="menu__button">projects</Link>
                        <Link onClick={()=>setOpen(false)} to={`/about`} className="menu__button">about me</Link>
                    </div>
            </section>
            </nav>
        </>
    )
}