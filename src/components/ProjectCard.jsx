const ProjectCard = ({ project }) => {
  return (
    <section className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="px-6 py-4">
      <h3 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{project.title}</h3>
      <p className="mb-3 font-normal text-gray-500 dark:text-white">{project.description}</p>
      </div>
      <h4 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Tech Stack:</h4>
      <div className="px-6 pt-4 pb-2">
        <p>
      {project.techStack.map((item, index) => (
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={index}>
          {item} 
        </span>
      ))}
      </p>
      {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{project.techStack.join(", ")}</span> */}
      <a href={project.link}>
        <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full">
        View Projects
        </button>
      </a>
      </div>
    </section>
  )
}

export default ProjectCard