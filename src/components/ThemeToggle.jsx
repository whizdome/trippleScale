import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useLayoutEffect } from "react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  // Efficiently update theme class on the document
  useLayoutEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full text-neutral-700 dark:text-neutral-300
                 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/60
                 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500
                 focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      aria-pressed={theme === "dark"}
      role="switch"
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <Sun
          className={`absolute w-5 h-5 transition-transform duration-300 ${
            theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-0 opacity-0"
          }`}
        />
        <Moon
          className={`absolute w-5 h-5 transition-transform duration-300 ${
            theme === "dark" ? "rotate-180 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
