import projects from "../data/projects.js"
import ProjectCard from "./ProjectCard.jsx"

const Projects = () => {
  return (
    <>
        <h2>Projects</h2>
        <section className="projectsContainer">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </section>

    </>
  )
}

export default Projects