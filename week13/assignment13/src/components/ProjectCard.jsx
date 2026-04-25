import { useState } from "react";

function ProjectCard({ name, description, url, image }) {
    const [showDescription, setShowDescription] = useState(false);
function toggleDescription(){
    setShowDescription(!showDescription);
}
    return (
        <article className="project-card">
            <h2 className="project-card__title">{name}</h2>
            <img className="project-card__img" src={image} alt={name} />
            <button className="project-card__button" onClick={(toggleDescription)}>
                {showDescription ? "Hide Description" : "Show Description"}
            </button>
            { showDescription && <p>{description}</p>}
            <br/>
            <a href={url}>Visit Project</a>
        </article>
    );
}

export default ProjectCard;