const projects = [
  {
    id: 1,
    title: "Pathfinding Robot Android Application",
    description:
      "Java Android application to control wheeled robot movement via Bluetooth",
    image: "/project_images/MDP_ss.jpg",
    tags: ["Java", "Android"],
    githubUrl: "https://github.com/kimmseo/CZ3004-SC2079-MDP",
  },
  {
    id: 2,
    title: "Diabetes Risk Factor Data Analysis",
    description:
      "Data analysis and visualisation for Diabetes risk factors using ML models",
    image: "/project_images/Diabetes_factors.jpg",
    tags: ["Python", "Data Analysis", "ML", "Jupyter Notebook"],
    githubUrl:
      "https://github.com/xeroxis-xs/SC1015_SC9_T7_DiabetesDataset/tree/main",
  },
  {
    id: 3,
    title: "Smart Carpark Booking Android Application",
    description:
      "Flutter-based Android app to streamline carpark lot booking using URA API calls",
    image: "/project_images/Carpark_app.jpg",
    tags: ["Flutter", "Android", "API"],
    githubUrl: "https://github.com/iloveangpao/2006_CarparkApp",
  },

  {
    id: 4,
    title: "Generative AI Tutor Agent",
    description:
      "Tutoring AI agent using Langchain and Retrieval-Augmented Generation (RAG) with Chain-of-Thought prompting",
    image: "/project_images/Tutor_AI.jpg",
    tags: ["Langchain", "RAG", "LLM"],
    githubUrl:
      "https://github.com/yanrong19/Creating-Tutor-Agent-with-LangChain",
  },

  {
    id: 5,
    title: "Java CLI Movie Booking System",
    description:
      "Command-line Java app for movie ticket booking and sales reporting",
    image: "/project_images/Moblima.jpg",
    tags: ["Java", "CLI", "OOP"],
    githubUrl:
      "https://github.com/jordanlianhs/SC2002---Object-Oriented-Design-Programming",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {" "}
          Projects
        </h2>
        {/* <p className="text-center mb-12 max-w-2xl mx-auto">
          A collection of my most recent projects related to my experience and
          skills. Each project corresponds to a different skillset and skill
          stack.
        </p> */}
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
                <div className="">
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm mb-6">{project.description}</p>
                </div>
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
