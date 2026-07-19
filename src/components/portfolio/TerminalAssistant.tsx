"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Terminal } from "lucide-react";

const COMMANDS: Record<string, string> = {
  help: "QUICK START\n\n  whoami       See who built this portfolio\n  ls           Browse the available sections\n  projects     View selected products and experiments\n  experience   See where Pratham has worked\n  contact      Get email and social links\n  pc --init    Start the interactive portfolio assistant\n  pc --help    View the complete command reference",
  whoami: "Pratham Chauhan, a founder-minded AI engineer building agents, developer tools, and production infrastructure.",
  ls: "about/  experience/  projects/  stack/  writing/  contact/",
  pwd: "/home/pratham/portfolio",
  projects: "Zyou MCP infrastructure\nMCP Store\nSciya AI Tutor\nEnigmaAI\nChatvers",
  experience: "2026 - now    Founding Member, Zyou\n2024 - 2026   Full Stack AI Developer, LeapX\n2022 - 2023   Web Developer, ISRO\n2022          Project Intern, Dreamsol",
  stack: "TypeScript  Python  Next.js  React  Node.js\nLangGraph   AI SDK  MCP  Redis  PostgreSQL  Docker",
  writing: "Production AI notes: substack.com/@prathamchauhan1",
  contact: "Email      chauhanpratham22@gmail.com\nGitHub     github.com/Pratham271\nLinkedIn   linkedin.com/in/pratham-chauhan-0812ba1a0\nX          x.com/Pratham9474",
  resume: "Resume: /Resume.pdf",
  "pc --version": "pc 1.0.0",
  "pc --help": "PC COMMANDS\n\n  pc --init       Start the interactive portfolio assistant\n  pc --help       Show this command reference\n  pc --version    Print the installed PC version\n\nPORTFOLIO COMMANDS\n\n  whoami          Show Pratham's profile\n  projects        List selected work\n  experience      Show work history\n  stack           List tools and technologies\n  writing         Find published notes\n  contact         Show email and social links\n  resume          Show the resume path\n\nSHELL COMMANDS\n\n  ls              List portfolio sections\n  pwd             Print the current path\n  date            Print the current date and time\n  history         Show commands from this session\n  clear           Clear terminal output\n  exit            Close the terminal\n\nKEYBOARD\n\n  Up / Down       Move through command history\n  Ctrl+C          Cancel the current input\n  Ctrl+L          Clear terminal output\n  Escape          Close the terminal",
};

const ANSWERS: Record<string, string> = {
  work: "Selected work includes Zyou's marketing MCP infrastructure, MCP Store, Sciya AI Tutor, EnigmaAI, and Chatvers.",
  projects: "Selected work includes Zyou's marketing MCP infrastructure, MCP Store, Sciya AI Tutor, EnigmaAI, and Chatvers.",
  about: COMMANDS.whoami,
  experience: "Currently a founding member at Zyou. Previously a Full Stack AI Developer at LeapX, a Web Developer at ISRO, and a Project Intern at Dreamsol.",
  stack: "TypeScript · Python · Next.js · React · Node.js · LangGraph · Vercel AI SDK · MCP · Redis · PostgreSQL · Docker",
  writing: "Pratham writes about production AI infrastructure at substack.com/@prathamchauhan1.",
  contact: "chauhanpratham22@gmail.com · github.com/Pratham271 · linkedin.com/in/pratham-chauhan-0812ba1a0",
};

type Entry = { prompt: string; answer: string };

export default function TerminalAssistant({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [mode, setMode] = useState<"shell" | "chat">("shell");
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Entry[]>([]);
  const [commands, setCommands] = useState<string[]>([]);
  const [commandIndex, setCommandIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) window.setTimeout(() => inputRef.current?.focus(), 220);
  }, [open, mode]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const value = input.trim();
    if (!value) return;
    setCommands(items => items.at(-1) === value ? items : [...items, value]);
    setCommandIndex(-1);

    const query = value.toLowerCase();
    if (mode === "shell" && query === "pc --init") {
      setMode("chat");
      setHistory([]);
    } else if ((mode === "shell" && query === "clear") || (mode === "chat" && query === "/clear")) {
      setHistory([]);
    } else if ((mode === "shell" && query === "exit") || (mode === "chat" && query === "/exit")) {
      if (mode === "chat") setMode("shell");
      else onClose();
    } else {
      const answer = mode === "shell" && query === "history" ? [...commands, value].map((item, index) => `${index + 1}  ${item}`).join("\n") : mode === "shell" ? shellAnswer(value) : chatAnswer(value);
      setHistory(items => [...items, { prompt: value, answer }]);
    }
    setInput("");
  };

  const recallCommand = (direction: -1 | 1) => {
    if (!commands.length) return;
    const next = Math.max(-1, Math.min(commands.length - 1, commandIndex + direction));
    setCommandIndex(next);
    setInput(next === -1 ? "" : commands[commands.length - 1 - next]);
  };

  return (
    <div className={`terminalBackdrop ${open ? "open" : ""}`} onMouseDown={event => event.target === event.currentTarget && onClose()} aria-hidden={!open}>
      <section className={`terminalWindow ${mode === "chat" ? "chatMode" : ""}`} role="dialog" aria-modal="true" aria-label="Pratham portfolio terminal">
        {mode === "shell" ? (
          <>
            <TerminalBar onClose={onClose} />
            <div className="terminalBody" onClick={() => inputRef.current?.focus()}>
              <p className="muted">Pratham CLI v1.0</p>
              <p>Type <b>help</b> to begin or <b>pc --init</b> to open chat.</p>
              <History entries={history} prompt="pratham@portfolio:~$" />
              <Prompt input={input} setInput={setInput} submit={submit} inputRef={inputRef} label="pratham@portfolio:~$" onRecall={recallCommand} onClear={() => setHistory([])} />
            </div>
          </>
        ) : (
          <ChatUI history={history} input={input} setInput={setInput} submit={submit} inputRef={inputRef} onRecall={recallCommand} onClear={() => setHistory([])} />
        )}
      </section>
    </div>
  );
}

function TerminalBar({ onClose }: { onClose: () => void }) {
  return <div className="terminalBar"><div><i /><i /><i /></div><span>pratham@portfolio:~</span><button onClick={onClose} aria-label="Close terminal">×</button></div>;
}

function History({ entries, prompt }: { entries: Entry[]; prompt?: string }) {
  return <>{entries.map((entry, index) => <div className="terminalEntry" key={`${entry.prompt}-${index}`}>{prompt && <p className="command">{prompt} {entry.prompt}</p>} {!prompt && <p className="userMessage"><span>›</span> {entry.prompt}</p>}<p className={prompt ? "answer" : "assistantMessage"}>{!prompt && <span>● PC</span>}{entry.answer}</p></div>)}</>;
}

function Prompt({ input, setInput, submit, inputRef, label, onRecall, onClear }: { input: string; setInput: (value: string) => void; submit: (event: FormEvent) => void; inputRef: React.RefObject<HTMLInputElement>; label?: string; onRecall: (direction: -1 | 1) => void; onClear: () => void }) {
  return <form onSubmit={submit}>{label ? <span>{label}</span> : <span className="chatPromptMark">❯</span>}<input ref={inputRef} value={input} onChange={event => setInput(event.target.value)} onKeyDown={event => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") { event.preventDefault(); onRecall(event.key === "ArrowUp" ? 1 : -1); }
    if (event.ctrlKey && event.key.toLowerCase() === "c") { event.preventDefault(); setInput(""); }
    if (event.ctrlKey && event.key.toLowerCase() === "l") { event.preventDefault(); onClear(); }
  }} autoComplete="off" spellCheck="false" aria-label={label ? "Terminal command" : "Chat message"} placeholder={label ? undefined : "Ask about Pratham's work"} /></form>;
}

function ChatUI({ history, input, setInput, submit, inputRef, onRecall, onClear }: { history: Entry[]; input: string; setInput: (value: string) => void; submit: (event: FormEvent) => void; inputRef: React.RefObject<HTMLInputElement>; onRecall: (direction: -1 | 1) => void; onClear: () => void }) {
  return <div className="cliChat">
    <header><span><Terminal size={15} /> PC</span><span>portfolio assistant</span><span>v1.0.0</span></header>
    <div className="cliConversation">
      {history.length === 0 && <div className="cliWelcome"><pre>{` ██████╗  ██████╗\n ██╔══██╗██╔════╝\n ██████╔╝██║     \n ██╔═══╝ ██║     \n ██║     ╚██████╗\n ╚═╝      ╚═════╝`}</pre><p>Portfolio assistant ready.</p><span>Ask about projects, experience, skills, writing, or contact details.</span></div>}
      <History entries={history} />
    </div>
    <div className="cliComposer"><Prompt input={input} setInput={setInput} submit={submit} inputRef={inputRef} onRecall={onRecall} onClear={onClear} /><small>Enter to send  ·  ↑↓ history  ·  Ctrl+C cancel  ·  Ctrl+L clear  ·  /exit return</small></div>
  </div>;
}

function shellAnswer(value: string) {
  if (value.toLowerCase() === "date") return new Date().toLocaleString();
  return COMMANDS[value.toLowerCase()] ?? `command not found: ${value}\nTry 'help'.`;
}

function chatAnswer(value: string) {
  const query = value.toLowerCase();
  const match = Object.keys(ANSWERS).find(key => query.includes(key));
  if (query.includes("zyou") || query.includes("mcp")) return "At Zyou, Pratham builds marketing infrastructure for AI: MCP servers, campaign operations, reporting, auth, session state, and SDKs.";
  if (query.includes("isro")) return "At ISRO, Pratham built a disaster management dashboard with GIS layers, flood visualisation, emergency routing, and nearby hospital discovery.";
  if (query.includes("email") || query.includes("hire")) return ANSWERS.contact;
  return match ? ANSWERS[match] : "I can help with Pratham's projects, experience, stack, writing, or contact details.";
}
