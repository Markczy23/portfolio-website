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
      className="p-2 rounded-xl border-2 border-border transition-colors duration-300 hover:bg-card"
    >
      {isLightMode ? (
        <Moon className="h-5 w-5 text-blue-900" />
      ) : (
        <Sun className="h-5 w-5 text-orange-400" />
      )}
    </button>
  );
};
