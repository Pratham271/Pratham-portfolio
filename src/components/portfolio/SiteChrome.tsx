"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Terminal } from "lucide-react";

export default function SiteChrome({
  openTerminal,
}: {
  openTerminal: () => void;
}) {
  const [dark, setDark] = useState(false);
  const [navFormed, setNavFormed] = useState(false);

  useEffect(() => {
    const updateNav = () => setNavFormed(window.scrollY > 48);

    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });

    return () => window.removeEventListener("scroll", updateNav);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <>
      <header
        className={`fixed top-[18px] left-1/2 z-[70] grid h-[66px] w-[min(1180px,calc(100%_-_40px))] -translate-x-1/2 grid-cols-[1fr_auto_1fr] items-center rounded-full px-5 text-[#eee5d8] transition-all max-md:grid-cols-[1fr_auto] max-sm:w-[calc(100%_-_24px)] ${navFormed
            ? "border border-white/20 bg-[#171411]/75 shadow-lg backdrop-blur-lg"
            : "border border-transparent"
          }`}
      >
        <a className="text-2xl font-bold" href="#top">
          PC<span className="text-[#dc917a]">.</span>
        </a>

        <nav
          className={`flex gap-6 text-[13px] transition-all max-md:hidden ${navFormed
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2.5 opacity-0"
            }`}
        >
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#writing">Writing</a>
          <a href="#about">About</a>
        </nav>

        <div className="flex justify-self-end gap-2">
          <button
            className={`grid size-[42px] place-items-center rounded-full border border-white/15 bg-[#211d19] transition ${navFormed
                ? "scale-100 opacity-100"
                : "pointer-events-none translate-x-4 scale-75 opacity-0"
              }`}
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            className="grid size-[42px] place-items-center rounded-full border border-white/15 bg-[#211d19]"
            onClick={openTerminal}
            aria-label="Open terminal"
          >
            <Terminal size={17} />
          </button>
        </div>
      </header>

      <button
        className={`fixed right-6 bottom-6 z-40 flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--text)] px-4 py-3 text-[var(--bg)] shadow-xl transition max-sm:right-3 max-sm:bottom-3 ${navFormed
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
          }`}
        onClick={openTerminal}
      >
        <Terminal size={15} />
        ask about my work
      </button>
    </>
  );
}
