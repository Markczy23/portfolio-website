import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      document.documentElement.classList.add("light");
      setIsLightMode(true);
    } else if (storedTheme === "dark") {
      setIsLightMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isLightMode) {
      document.documentElement.classList.remove("light");
      setIsLightMode(false);
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      setIsLightMode(true);
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed max-sm:hidden top-5 right-5 z-50 p-2 
      rounded-xl bg-slate-100 transition-colors duration-300 cursor-pointer"
    >
      {isLightMode ? (
        <Moon className="h-6 w-6 text-blue-900" />
      ) : (
        <Sun className="h-6 w-6 text-orange-400" />
      )}
    </button>
  );
};
