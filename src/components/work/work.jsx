import "./work.css"
import { useState } from "react";
import Description from "../description/description";
import Details from "../details/details";



export default function Work(props){
    // document.body.style.setProperty('--projecthover-color', props.color)
    const [isHovering, setIsHovering] = useState(false);
    const [description, setDescription] = useState(true);
    const [selected, setSelected] =useState (false)

    
    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    return(
        <>
            <div className="project" style={{
            backgroundColor: isHovering ? props.color : '',
            color: isHovering ? 'white' : '',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setSelected(!selected)}>
                <div className="project__card" >{props.name}</div>
                <div className="project__year">{props.year}</div>
            </div>
            <section className={selected ? "details show" : "details"} style={{backgroundColor: props.color}}>
                    <img className="details__image" src={props.image} alt="" />
                    <div className="details__container">
                        <article className="details__info">
                            <div className="details__description">
                                {description ? <Description text={props.description}/> : <Details/>}
                            </div>
                            
                        </article>
                        <div className="details__buttons">
                            <button onClick={() => setDescription(true)} className="button">descripción</button>
                            <button onClick={() => setDescription(false)} className="button">objetivos</button>
                        </div>
                    </div>
            </section>
        </>
    )
}