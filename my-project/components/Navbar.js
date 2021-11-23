import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <div>
      <nav className="sticky-nav flex justify-between items-left max-w-4xl w-full p-3 my-0 md:my-6 mx-auto bg-white dark:bg-black bg-opacity-60">
        <a href="#skip" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <ul class="flex">
          <li class="mr-6">
            <a
              className="text-md font-medium text-blue-400"
              href="https://github.com/jalbrekt85"
            >
              Github
            </a>
          </li>
          <li class="mr-6">
            <a
              className="text-md font-medium text-blue-400"
              href="https://gitcoin.co/jalbrekt85"
            >
              Gitcoin
            </a>
          </li>
          <li class="mr-6">
            <a
              className="text-md font-medium text-blue-400"
              href="https://ethereum.stackexchange.com/users/84713/jcalb"
            >
              ETH Stack Exchange
            </a>
          </li>
          <li class="mr-6">
            <a
              className="text-md font-medium text-blue-400"
              href="https://discordapp.com/users/4944/"
            >
              Discord
            </a>
          </li>
          <li class="mr-6">
            <a
              className="text-md font-medium text-blue-400"
              href="mailto:jcalbrecht85@gmail.com"
            >
              Contact
            </a>
          </li>
        </ul>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="rounded p-3 h-10 w-10 bg-gradient-to-r from-blue-400 to-indigo-500"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-4 w-4 text-gray-800 dark:text-gray-200"
            >
              {theme === "dark" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
