import "./topbar.css"
import Nav from "./nav/nav"
import { Link } from "react-router-dom"

export default function Topbar(){
    return(
        <>
            <header>
                <Link to={`/`} className="button">luisfe Camacho</Link>
                <Nav></Nav>
            </header>
        </>
    )
}