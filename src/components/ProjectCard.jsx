const ProjectCard = ({project}) => {
  return (
    <section>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <h4>Tech Stack:</h4>
        <p>{project.techStack.join(",")}</p>
        <a href={project.link}>View Projects</a>
    </section>
  )
}

export default ProjectCard