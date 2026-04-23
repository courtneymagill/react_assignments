function ProjectCard({ name, description, url, image }) {
    return (
        <article className="project-card">
            <h2 className="project-card__title">{name}</h2>
            <p className="project-card__description">{description}</p>
            <a href={url}>Visit Project</a>
            <img src={image} alt={name} />
        </article>
    );
}

export default ProjectCard;