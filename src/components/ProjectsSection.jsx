const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A placeholder for project 1.",
    image: "/project_images/project_1.jpg",
    tags: ["React", "TailwindCSS", "Supabase"],
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Project 2",
    description: "A placeholder for project 2.",
    image: "/project_images/project_2.jpg",
    tags: ["TypeScript", "D3.js", "Next.js"],
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A placeholder for project 3.",
    image: "/project_images/project_3.jpg",
    tags: ["React", "Node.js", "Stripe"],
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          A collection of my most recent projects related to my experience and
          skills. Each project corresponds to a different skillset and skill
          stack.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border bg-primary/20 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  //TODO  align bottom button
                  className="cosmic-button"
                >
                  View on Github
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
