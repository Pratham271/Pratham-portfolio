"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Terminal } from "lucide-react";

export default function SiteChrome({ openTerminal }: { openTerminal: () => void }) {
  const [dark, setDark] = useState(false);
  const [navFormed, setNavFormed] = useState(false);

  useEffect(() => {
    const scroll = () => setNavFormed(window.scrollY > 48);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  return <>
    <header className={`siteHeader shell ${navFormed ? "formed" : ""}`}>
      <a className="brand" href="#top">PC<span>.</span></a>
      <nav><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#writing">Writing</a><a href="#about">About</a></nav>
      <div><button className="themeButton" onClick={() => setDark(value => !value)} aria-label="Toggle theme">{dark ? <Sun size={17} /> : <Moon size={17} />}</button><button onClick={openTerminal} aria-label="Open terminal"><Terminal size={17} /></button></div>
    </header>
    <button className={`floatingTerminal ${navFormed ? "visible" : ""}`} onClick={openTerminal}><Terminal size={15} /> ask about my work</button>
  </>;
}
