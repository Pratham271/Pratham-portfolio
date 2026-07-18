"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Moon, Sun, Terminal } from "lucide-react";

const IMAGES = [
  { src: "/characters/orange.png", bg: "#D9856D" },
  { src: "/characters/green.png", bg: "#8FA183" },
  { src: "/characters/pink.png", bg: "#B7A5C8" },
  { src: "/characters/blue.png", bg: "#8CA6B7" },
] as const;

const PERSONAS = [
  { label: "BUILDER MODE", ghost: "BUILD", copy: "I turn ambitious ideas into focused products, reliable systems, and software people can actually use." },
  { label: "AGENT MODE", ghost: "AGENTS", copy: "I build AI agents, MCP servers, infrastructure, and integrations that keep working beyond the demo." },
  { label: "PRODUCT MODE", ghost: "CRAFT", copy: "I make complex technology feel direct, useful, and unusually polished." },
  { label: "SHIP MODE", ghost: "SCALE", copy: "I work from first prototype to production, connecting product thinking with full stack engineering." },
] as const;

const RESPONSES: Record<string, string> = {
  help: "Available commands:\n\n  work        explore selected projects\n  about       learn about Pratham\n  stack       inspect technologies\n  experience  view professional history\n  writing     browse recent articles\n  contact     start a conversation\n  clear       clear the terminal",
  work: "Selected systems:\n\n01  Zyou Lens | MCP observability and AI insights\n02  Marketing MCP Servers | reliable tools for Meta and Google Ads\n03  MCP Store | one click MCP installation\n04  Campaign Radio | voice interface for campaign operations",
  about: "Pratham is a founder minded AI engineer building the infrastructure behind intelligent marketing systems. His work sits at the intersection of MCP, agents, adtech, developer tools, and unconventional interfaces.",
  stack: "TypeScript · Python · Next.js · React · Node.js · LangGraph · Vercel AI SDK · MCP · Redis · PostgreSQL · Docker",
  experience: "2024 to now   Full Stack AI Developer at Leapx\n2022 to 2023  Software Engineering Intern at ISRO\n2022          Project Intern at Dreamsol",
  writing: "Read Pratham's notes on production AI infrastructure at substack.com/@prathamchauhan1",
  contact: "Email: chauhanpratham22@gmail.com\nGitHub: github.com/Pratham271\nX: x.com/Pratham9474\nLinkedIn: linkedin.com/in/pratham-chauhan-0812ba1a0/",
};

type Direction = "next" | "prev";
type Role = "center" | "left" | "right" | "back";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [navFormed, setNavFormed] = useState(false);
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<{ command: string; answer: string }[]>([]);
  const terminalInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    IMAGES.forEach(({ src }) => { const image = new Image(); image.src = src; });
    const scroll = () => setNavFormed(window.scrollY > 48);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  useEffect(() => {
    if (terminalOpen) window.setTimeout(() => terminalInput.current?.focus(), 220);
  }, [terminalOpen]);

  const roles = useMemo(() => ({
    center: activeIndex,
    left: (activeIndex + 3) % 4,
    right: (activeIndex + 1) % 4,
    back: (activeIndex + 2) % 4,
  }), [activeIndex]);

  const navigate = (direction: Direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(previous => direction === "next" ? (previous + 1) % 4 : (previous + 3) % 4);
    window.setTimeout(() => setIsAnimating(false), 650);
  };

  const roleFor = (index: number): Role => {
    if (index === roles.center) return "center";
    if (index === roles.left) return "left";
    if (index === roles.right) return "right";
    return "back";
  };

  const runCommand = (event: FormEvent) => {
    event.preventDefault();
    const value = command.trim();
    if (!value) return;
    if (value.toLowerCase() === "clear") setHistory([]);
    else setHistory(items => [...items, { command: value, answer: answerFor(value.toLowerCase()) }]);
    setCommand("");
  };

  const persona = PERSONAS[activeIndex];

  return (
    <main>
      <section className="toonHero" style={{ backgroundColor: IMAGES[activeIndex].bg }} id="top">
        <div className="toonGrain" />
        <div className="toonGhost">{persona.ghost}</div>
        <div className="carousel" aria-label="Pratham's working modes">
          {IMAGES.map((image, index) => {
            const role = roleFor(index);
            return <div className={`character character-${role}${index === 1 ? " character-green" : ""}`} key={image.src} aria-hidden={role !== "center"}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image.src} alt={role === "center" ? `${PERSONAS[index].label} character` : ""} draggable={false} />
            </div>;
          })}
        </div>
        <div className="personaCopy">
          <p>{persona.label}</p>
          <span>{persona.copy}</span>
          <div className="carouselButtons">
            <button onClick={() => navigate("prev")} aria-label="Previous character"><ArrowLeft size={26} strokeWidth={2.25} /></button>
            <button onClick={() => navigate("next")} aria-label="Next character"><ArrowRight size={26} strokeWidth={2.25} /></button>
          </div>
        </div>
        <a className="discover" href="#experience">DISCOVER IT <ArrowRight strokeWidth={2.25} /></a>
      </section>

      <header className={`siteHeader shell ${navFormed ? "formed" : ""}`}>
        <a className="brand" href="#top">PC<span>.</span></a>
        <nav><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#writing">Writing</a><a href="#about">About</a></nav>
        <div><button className="themeButton" onClick={() => setDark(value => !value)} aria-label="Toggle theme">{dark ? <Sun size={17} /> : <Moon size={17} />}</button><button onClick={() => setTerminalOpen(true)} aria-label="Open terminal"><Terminal size={17} /></button></div>
      </header>

      <section className="manifesto shell sectionPad">
        <p className="kicker">01 / WHAT I DO</p>
        <p>I build at the layer where <mark>AI meets real infrastructure.</mark> Agents, developer tools, and full stack products shaped around useful human problems.</p>
      </section>

      <section className="work sectionPad" id="experience">
        <div className="sectionHeading shell"><p className="kicker">02 / EXPERIENCE</p><h2>Building AI products from infrastructure to interface.</h2></div>
        <article className="caseStudy shell">
          <div className="caseCopy"><span className="number">FEB 2026 / NOW</span><p className="label">Founding Member · Zyou</p><h3>Marketing infrastructure for AI</h3><p>Architecting and shipping an MCP server for launching, managing, and optimising Facebook campaigns through AI interfaces, alongside automated reporting, session management, and a first-party marketing SDK.</p><div className="tags"><span>Next.js</span><span>MCP</span><span>SDK</span><span>Meta Ads</span><span>AI SDK</span></div></div>
          <div className="lensPanel"><div className="panelTop"><span>SESSION_84F1</span><b>LIVE</b></div>{["account.resolve", "campaign.fetch", "creative.generate", "campaign.publish"].map((item, index) => <div className={index === 2 ? "trace active" : "trace"} key={item}><span>0{index + 1}</span><strong>{item}</strong><small>{[142,386,842,303][index]}ms</small><em>{index === 3 ? "FAILED" : index === 2 ? "WARNING" : "SUCCESS"}</em></div>)}</div>
        </article>
        <article className="caseStudy shell reverse">
          <div className="mcpVisual"><div className="toolCloud"><span>create_campaign</span><span>get_insights</span><span>update_budget</span><span>generate_report</span></div><div className="mcpCore"><small>MCP</small><strong>Marketing<br />Interface</strong></div><b className="meta">Meta</b><b className="google">Google</b></div>
          <div className="caseCopy"><span className="number">JUL 2024 / NOW</span><p className="label">Full Stack AI Developer · LeapX</p><h3>Agents that take action</h3><p>Built and migrated AI campaign systems across Meta and Google Ads, added LlamaIndex analytics, standardised shared campaign libraries, and contributed to schema design and production CI/CD.</p><div className="tags"><span>LangGraph</span><span>LlamaIndex</span><span>Meta Ads</span><span>Google Ads</span></div></div>
        </article>
        <div className="experienceRows shell">
          <article><span>2022 / 2023</span><div><p>Web Developer · ISRO</p><h3>Disaster management dashboard</h3><p>Built GIS visualisation, flood layers, disaster news heatmaps, emergency routing, and nearby hospital discovery for a single operational dashboard.</p></div></article>
          <article><span>2022</span><div><p>Project Intern · Dreamsol</p><h3>Employee operations platform</h3><p>Developed authenticated employee data workflows with Spring, Hibernate, and database backed CRUD operations.</p></div></article>
        </div>
      </section>

      <section className="projectsSection sectionPad" id="projects">
        <div className="sectionHeading shell"><p className="kicker">03 / PROJECTS</p><h2>Products, experiments, and tools I&apos;m taking from idea to shipped.</h2></div>
        <div className="projectGrid shell">
          <article className="projectCard featuredProject"><span>BUILDING NOW</span><h3>MCP Store</h3><p>Discover, configure, and install MCP servers across Claude, Cursor, VS Code, and other AI hosts with one click.</p><div className="miniInstaller"><b>Claude</b><b>Cursor</b><b>VS Code</b><button>Install server ↗</button></div></article>
          <article className="projectCard tutor"><span>AI EDUCATION</span><h3>Sciya AI Tutor</h3><p>Competitive exam preparation that connects course videos to chapter quizzes, correct answer explanations, and AI reviewed long form answers for UPSC mains and other writing based exams.</p><div className="tags"><span>Multi agent</span><span>Video learning</span><span>Answer review</span></div></article>
          <article className="projectCard"><span>AI ASSISTANT</span><h3>EnigmaAI</h3><p>A multi tool assistant for questions, media search, and useful follow up prompts powered by agent workflows.</p><a href="https://github.com/Pratham271/100xengineer/tree/initial-setup">View project ↗</a></article>
          <article className="projectCard"><span>KNOWLEDGE ASSISTANT</span><h3>Chatvers</h3><p>Ask questions across documents, YouTube links, and web pages through one retrieval workflow.</p><a href="https://chatvers.com">Visit Chatvers ↗</a></article>
        </div>
      </section>

      <section className="buildLog shell sectionPad"><div className="sectionHeading"><p className="kicker">BUILD LOG</p><h2>Experiments and open source work.</h2></div>{[["2026","Zyou marketing SDK","Building"],["2026","SecureOps AI","Hackathon"],["2026","Contract Guard","Generative UI"],["2023","ISRO Disaster Dashboard","GIS · Routing"]].map(item => <div className="logRow" key={item[1]}><span>{item[0]}</span><strong>{item[1]}</strong><em>{item[2]}</em></div>)}</section>

      <section className="writing sectionPad" id="writing"><div className="sectionHeading shell"><p className="kicker">WRITING</p><h2>Notes from systems that rarely follow the happy path.</h2></div><div className="writingGrid shell"><a className="article featured" href="https://substack.com/@prathamchauhan1"><span>AI INFRASTRUCTURE · 8 MIN</span><h3>Setting up Gemini on Vertex AI for production</h3><p>Credentials, configuration, environments, and the small mistakes that break production systems.</p><b>Read on Substack ↗</b></a><a className="article" href="https://substack.com/@prathamchauhan1"><span>NETWORKING · 6 MIN</span><h3>Connecting Vercel to private ClickHouse</h3><b>Read article ↗</b></a><div className="article note"><span>CURRENTLY WRITING</span><h3>Why agent infrastructure fails around auth, state, and platform boundaries.</h3></div></div></section>

      <section className="about shell sectionPad" id="about"><div><p className="kicker">ABOUT</p><h2>I&apos;m interested in the layer between powerful models and real world systems.</h2><p>Most of my work lives around agents, MCP, advertising infrastructure, developer tools, and interfaces that make complex systems feel direct.</p></div><aside><p><span>BUILDING</span>Zyou and its MCP ecosystem</p><p><span>EXPLORING</span>Physical interfaces for AI agents</p><p><span>LEARNING</span>Neural networks and architectures</p><p><span>WRITING</span>Production AI infrastructure</p></aside></section>

      <section className="contact shell sectionPad"><p className="kicker">LET&apos;S BUILD</p><h2>Something that doesn&apos;t need another dashboard.</h2><a href="mailto:chauhanpratham22@gmail.com">chauhanpratham22@gmail.com ↗</a><div className="contactLinks"><a href="https://github.com/Pratham271">GitHub</a><a href="https://www.linkedin.com/in/pratham-chauhan-0812ba1a0/">LinkedIn</a><a href="https://x.com/Pratham9474">X</a><a href="https://substack.com/@prathamchauhan1">Substack</a><a href="/Resume.pdf">Resume</a></div></section>

      <footer className="footer shell"><span>Pratham Chauhan · Founder and AI engineer</span><span>AI · Product · Infrastructure</span></footer>
      <button className={`floatingTerminal ${navFormed ? "visible" : ""}`} onClick={() => setTerminalOpen(true)}><Terminal size={15} /> ask about my work</button>

      <div className={`terminalBackdrop ${terminalOpen ? "open" : ""}`} onMouseDown={event => { if (event.target === event.currentTarget) setTerminalOpen(false); }} aria-hidden={!terminalOpen}>
        <div className="terminalWindow" role="dialog" aria-modal="true" aria-label="Portfolio terminal assistant">
          <div className="terminalBar"><div><i /><i /><i /></div><span>pratham@portfolio:~</span><button onClick={() => setTerminalOpen(false)} aria-label="Close terminal">×</button></div>
          <div className="terminalBody"><p className="muted">Pratham Portfolio Assistant v1.0</p><p>Type <b>help</b> to explore.</p>{history.map((item, index) => <div key={`${item.command}-${index}`}><p className="command">pratham@portfolio:~$ {item.command}</p><p className="answer">{item.answer}</p></div>)}<form onSubmit={runCommand}><span>pratham@portfolio:~$</span><input ref={terminalInput} value={command} onChange={event => setCommand(event.target.value)} autoComplete="off" spellCheck="false" aria-label="Terminal command" /></form></div>
        </div>
      </div>
    </main>
  );
}

function answerFor(query: string) {
  if (RESPONSES[query]) return RESPONSES[query];
  if (query.includes("zyou") || query.includes("lens")) return RESPONSES.work.split("\n")[2];
  if (query.includes("mcp")) return "Pratham builds MCP servers for campaign creation, reporting, authentication, session state, and observability.";
  if (query.includes("isro")) return "At ISRO, Pratham built a disaster management dashboard with GIS layers, flood visualisation, and emergency routing.";
  if (query.includes("email") || query.includes("hire")) return RESPONSES.contact;
  return "Try: help, work, about, stack, experience, writing, or contact.";
}
