const experiences = [
  {
    title: "Audiology Software Intern",
    dateRange: "Jan 2024 - May 2024",
    companyImage: "/experience_images/WSAudiology.jpg",
    alt: "WSAudiology",
    description: (
      <ul className="list-disc ml-5">
        <li>
          Developed and maintained automated C# tests for hearing aid fitting
          software using test-driven development.
        </li>
        <li>
          Collaborated with a team of four engineers to validate audiological
          features and streamline feature delivery.
        </li>
        <li>
          Worked alongside five audiologists to optimise feature accuracy and
          automate workflows using Power Automate.
        </li>
      </ul>
    ),
  },
];

export const Experience = () => {
  return (
    <section id="experience">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work<span className="text-primary"> Experience</span>
        </h2>
        <div>
          {experiences.map((exp, key) => (
            <div key={key} className="flex flex-col md:flex-row md:space-x-12">
              <div className="mt-8 md:mt-0 md:w-4/7 order-2 md:order-1 text-left">
                <h1 className="text-2xl font-medium mb-2">{exp.title}</h1>
                <h4 className="text-xl mb-2">{exp.dateRange}</h4>
                <div className="text-lg leading-7 mb-4">{exp.description}</div>
              </div>

              <img
                src={exp.companyImage}
                alt={exp.alt}
                className="md:w-3/7 order-1 md:order-2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
