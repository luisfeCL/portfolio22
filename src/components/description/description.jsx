import "./description.css"

export default function Description(props){
    return(
        <>
            <div className="details__description">
                <p>{props.text}</p>
            </div>
        </>
    )
}