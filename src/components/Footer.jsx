import { GithubIcon, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto p-4 flex flex-col text-center md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} Mark Chew</p>
        <div className="flex flex-row items-center justify-center space-x-4 mb-1">
          <a href="https://github.com/Markczy23" target="_blank">
            <GithubIcon
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={25}
            />
          </a>
          <a href="https://linkedin.com/in/mark-chew-6719b9148" target="_blank">
            <Linkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={25}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
