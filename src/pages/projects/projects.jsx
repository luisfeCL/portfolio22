import "./projects.css";
import axios from 'axios';
import { useEffect, useState } from "react";
import Work from "../../components/work/work";


export default function Projects(){
    const[works, setWorks]=useState([])
    useEffect(()=>{
        axios.get('/projects.json')
        .then(response => setWorks(response.data.projects))
    },[])
    
    return(
        <>
            <h1 className="title">Projects</h1>
            <section className="container">
                {works.map(work=>
                    <Work name={work.name} url={work.urlname} color={work.color} year={work.year} image={work.image} description={work.description}></Work>
                )}
            </section>
        </>
    )
}