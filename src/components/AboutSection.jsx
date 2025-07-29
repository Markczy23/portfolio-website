import { Box, Code, Database, Wrench } from "lucide-react";

const codingLanguages = [
  { name: "Python", imageSource: "https://skillicons.dev/icons?i=py" },
  { name: "C", imageSource: "https://skillicons.dev/icons?i=c" },
  { name: "C++", imageSource: "https://skillicons.dev/icons?i=cpp" },
  { name: "C#", imageSource: "https://skillicons.dev/icons?i=cs" },
  { name: "Java", imageSource: "https://skillicons.dev/icons?i=java" },
  { name: "HTML", imageSource: "https://skillicons.dev/icons?i=html" },
  { name: "CSS", imageSource: "https://skillicons.dev/icons?i=css" },
  { name: "Javascript", imageSource: "https://skillicons.dev/icons?i=js" },
  { name: "Dart", imageSource: "https://skillicons.dev/icons?i=dart" },
];

const frameworks = [
  { name: "React", imageSource: "https://skillicons.dev/icons?i=react" },
  { name: "Node.js", imageSource: "https://skillicons.dev/icons?i=nodejs" },
  { name: "Express", imageSource: "https://skillicons.dev/icons?i=express" },
  { name: "Pytorch", imageSource: "https://skillicons.dev/icons?i=pytorch" },
  { name: "Flutter", imageSource: "https://skillicons.dev/icons?i=flutter" },
  { name: "Tailwind", imageSource: "https://skillicons.dev/icons?i=tailwind" },
];

const tools = [
  { name: "Git", imageSource: "https://skillicons.dev/icons?i=git" },
  { name: "Docker", imageSource: "https://skillicons.dev/icons?i=docker" },
  {
    name: "PostgreSQL",
    imageSource: "https://skillicons.dev/icons?i=postgres",
  },
  { name: "Figma", imageSource: "https://skillicons.dev/icons?i=figma" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left text-lg">
            <h3 className="text-2xl font-semibold text-center">
              Passion for Tech
            </h3>
            <p>
              I am a graduate from Nanyang Technological University with a
              Bachelor of Computing in Computer Science and a specialisation in
              Artificial Intelligence.
            </p>
            <p>
              From building full-stack applications to experimenting with AI
              models, I love creating software that’s both useful and
              meaningful. I’m curious by nature and always looking to learn
              something new — whether it’s improving user experiences or
              applying machine learning to uncover insights.
            </p>

            <p>
              I believe growth comes from trying, building, and learning along
              the way. I’m excited to kickstart my career in tech, contribute to
              impactful projects, and am always open to new opportunities! 😄
            </p>

            {/* Link to contact section */}
            {/* <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download My Resume
              </a>

              <a href="" className="cosmic-button">
                Download My Resume
              </a>
            </div> */}
          </div>

          {/* Cards with details */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Programming Languages
                  </h4>
                  <div className="flex flex-wrap flex-row justify-center md:justify-start gap-2 mt-2">
                    {codingLanguages.map((lang, key) => (
                      <div
                        key={key}
                        className="flex flex-col items-center relative"
                      >
                        <img src={lang.imageSource} className="size-12" />
                        <span className="mt-1 text-xs">{lang.name}</span>
                      </div>
                    ))}
                    {/* For SQL since no skill icon */}
                    <div className="flex flex-col items-center relative">
                      <Database className="size-12 p-1 rounded-xl bg-gray-800 text-blue-400" />
                      <span className="mt-1 text-xs">SQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Box className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Frameworks</h4>
                  <div className="flex flex-wrap flex-row justify-center md:justify-start gap-2 mt-2">
                    {frameworks.map((lang, key) => (
                      <div
                        key={key}
                        className="flex flex-col items-center relative"
                      >
                        <img src={lang.imageSource} className="size-12" />
                        <span className="mt-1 text-xs">{lang.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Developer Tools</h4>
                  <div className="flex flex-wrap flex-row justify-center md:justify-start gap-2 mt-2">
                    {tools.map((lang, key) => (
                      <div
                        key={key}
                        className="flex flex-col items-center relative"
                      >
                        <img src={lang.imageSource} className="size-12" />
                        <span className="mt-1 text-xs">{lang.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
