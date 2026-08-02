"use client";

import type { FormEvent, RefObject } from "react";
import { useEffect, useRef, useState } from "react";
import { Terminal } from "lucide-react";
import { ANSWERS, COMMANDS, PC_LOGO } from "@/constants/terminal";

type Entry = {
  prompt: string;
  answer: string;
};

type PromptProps = {
  input: string;
  setInput: (value: string) => void;
  submit: (event: FormEvent) => void;
  inputRef: RefObject<HTMLInputElement>;
  label?: string;
  onRecall: (direction: -1 | 1) => void;
  onClear: () => void;
};

type ChatUIProps = Omit<PromptProps, "label"> & {
  history: Entry[];
};

export default function TerminalAssistant({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
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
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  const submit = (event: FormEvent) => {
    event.preventDefault();

    const value = input.trim();
    if (!value) return;

    setCommands((items) =>
      items.at(-1) === value ? items : [...items, value],
    );
    setCommandIndex(-1);

    const query = value.toLowerCase();

    if (mode === "shell" && query === "pc --init") {
      setMode("chat");
      setHistory([]);
    } else if (
      (mode === "shell" && query === "clear") ||
      (mode === "chat" && query === "/clear")
    ) {
      setHistory([]);
    } else if (
      (mode === "shell" && query === "exit") ||
      (mode === "chat" && query === "/exit")
    ) {
      if (mode === "chat") setMode("shell");
      else onClose();
    } else {
      const answer =
        mode === "shell" && query === "history"
          ? [...commands, value]
              .map((item, index) => `${index + 1}  ${item}`)
              .join("\n")
          : mode === "shell"
            ? shellAnswer(value)
            : chatAnswer(value);

      setHistory((items) => [...items, { prompt: value, answer }]);
    }

    setInput("");
  };

  const recallCommand = (direction: -1 | 1) => {
    if (!commands.length) return;

    const next = Math.max(
      -1,
      Math.min(commands.length - 1, commandIndex + direction),
    );

    setCommandIndex(next);
    setInput(next === -1 ? "" : commands[commands.length - 1 - next]);
  };

  return (
    <div
      className={`fixed inset-0 z-80 grid place-items-center bg-[#14110e]/60 p-5 font-["DM_Mono"] backdrop-blur-[14px] transition duration-300 max-sm:p-2 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      aria-hidden={!open}
    >
      <section
        className={`overflow-hidden border border-white/15 bg-[#171411] text-[#eee5d8] shadow-[0_30px_100px_rgba(0,0,0,.45)] transition duration-300 ${
          open ? "translate-y-0 scale-100" : "translate-y-5 scale-[.98]"
        } ${
          mode === "chat"
            ? "h-[min(700px,92vh)] w-[min(920px,100%)] rounded-xl max-sm:h-[95vh]"
            : "h-[min(620px,88vh)] w-[min(900px,100%)] rounded-[22px]"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Pratham portfolio terminal"
      >
        {mode === "shell" ? (
          <>
            <TerminalBar onClose={onClose} />
            <div
              className="h-[calc(100%-48px)] overflow-auto p-6 text-[13px] leading-[1.7]"
              onClick={() => inputRef.current?.focus()}
            >
              <p className="text-[#a99f92]">Pratham CLI v1.0</p>
              <p>
                Type <b>help</b> to begin or <b>pc --init</b> to open chat.
              </p>
              <History entries={history} prompt="pratham@portfolio:~$" />
              <Prompt
                input={input}
                setInput={setInput}
                submit={submit}
                inputRef={inputRef}
                label="pratham@portfolio:~$"
                onRecall={recallCommand}
                onClear={() => setHistory([])}
              />
            </div>
          </>
        ) : (
          <ChatUI
            history={history}
            input={input}
            setInput={setInput}
            submit={submit}
            inputRef={inputRef}
            onRecall={recallCommand}
            onClear={() => setHistory([])}
          />
        )}
      </section>
    </div>
  );
}

function TerminalBar({ onClose }: { onClose: () => void }) {
  return (
    <div className="grid h-12 grid-cols-[1fr_auto_1fr] items-center border-b border-white/10 px-4 text-[10px] text-[#a99f92]">
      <div className="flex gap-1.5">
        <i className="size-2.5 rounded-full bg-[#d66f62]" />
        <i className="size-2.5 rounded-full bg-[#d6ad5f]" />
        <i className="size-2.5 rounded-full bg-[#79a67f]" />
      </div>
      <span>pratham@portfolio:~</span>
      <button
        className="justify-self-end border-0 bg-transparent text-[22px] text-[#eee5d8]"
        onClick={onClose}
        aria-label="Close terminal"
      >
        ×
      </button>
    </div>
  );
}

function History({ entries, prompt }: { entries: Entry[]; prompt?: string }) {
  return (
    <>
      {entries.map((entry, index) => (
        <div
          className={`whitespace-pre-line ${prompt ? "" : "mb-7"}`}
          key={`${entry.prompt}-${index}`}
        >
          {prompt ? (
            <p className="mt-3 mb-1 text-[#d2ad5d]">
              {prompt} {entry.prompt}
            </p>
          ) : (
            <p className="mb-4 text-[#eee5d8]">
              <span className="font-bold text-[#e1ad55]">›</span>{" "}
              {entry.prompt}
            </p>
          )}
          <p
            className={
              prompt
                ? "m-0 text-[#eee5d8]"
                : "m-0 border-l border-[#443f37] pl-[22px] leading-7 text-[#d6d0c6]"
            }
          >
            {!prompt && (
              <span className="mb-2 ml-[-23px] block pl-5 text-[10px] font-bold text-[#d9856d]">
                ● PC
              </span>
            )}
            {entry.answer}
          </p>
        </div>
      ))}
    </>
  );
}

function Prompt({
  input,
  setInput,
  submit,
  inputRef,
  label,
  onRecall,
  onClear,
}: PromptProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
      onRecall(event.key === "ArrowUp" ? 1 : -1);
    }

    if (event.ctrlKey && event.key.toLowerCase() === "c") {
      event.preventDefault();
      setInput("");
    }

    if (event.ctrlKey && event.key.toLowerCase() === "l") {
      event.preventDefault();
      onClear();
    }
  };

  return (
    <form
      className={
        label
          ? "mt-2.5 flex items-center gap-2.5"
          : "flex items-center gap-3 rounded-md border border-[#4a453d] bg-[#1d1b18] px-[15px] py-[13px] shadow-sm focus-within:border-[#a27f47]"
      }
      onSubmit={submit}
    >
      <span
        className={
          label ? "whitespace-nowrap text-[#dc917a]" : "text-[#e1ad55]"
        }
      >
        {label ?? "❯"}
      </span>
      <input
        className="min-w-0 flex-1 border-0 bg-transparent text-[#eee5d8] outline-0 caret-[#e1ad55]"
        ref={inputRef}
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        spellCheck="false"
        aria-label={label ? "Terminal command" : "Chat message"}
        placeholder={label ? undefined : "Ask about Pratham's work"}
      />
    </form>
  );
}

function ChatUI({
  history,
  input,
  setInput,
  submit,
  inputRef,
  onRecall,
  onClear,
}: ChatUIProps) {
  return (
    <div className="grid h-full grid-rows-[46px_1fr_auto] bg-[#151411]">
      <header className="grid grid-cols-[1fr_auto_1fr] items-center border-b border-[#37332d] px-[18px] text-[11px] text-[#9f978b] max-sm:grid-cols-[1fr_auto]">
        <span className="flex items-center gap-2 font-bold text-[#e5b85f]">
          <Terminal size={15} /> PC
        </span>
        <span className="max-sm:hidden">portfolio assistant</span>
        <span className="justify-self-end">v1.0.0</span>
      </header>

      <div className="overflow-auto px-[clamp(20px,5vw,54px)] py-[30px]">
        {history.length === 0 && (
          <div className="mt-2.5 mb-[42px]">
            <pre className="mb-[22px] font-[DM_Mono] text-xs leading-[1.05] font-bold text-[#dfaa52]">
              {PC_LOGO}
            </pre>
            <p className="mb-[7px] text-[15px] font-medium text-[#eee5d8]">
              Portfolio assistant ready.
            </p>
            <span className="text-[11px] text-[#918a80]">
              Ask about projects, experience, skills, writing, or contact
              details.
            </span>
          </div>
        )}
        <History entries={history} />
      </div>

      <div className="px-[clamp(14px,5vw,54px)] pb-[18px]">
        <Prompt
          input={input}
          setInput={setInput}
          submit={submit}
          inputRef={inputRef}
          onRecall={onRecall}
          onClear={onClear}
        />
        <small className="mt-2 block text-right text-[9px] text-[#777066] max-sm:text-left">
          Enter to send · ↑↓ history · Ctrl+C cancel · Ctrl+L clear · /exit
          return
        </small>
      </div>
    </div>
  );
}

function shellAnswer(value: string) {
  if (value.toLowerCase() === "date") return new Date().toLocaleString();

  return COMMANDS[value.toLowerCase()] ?? `command not found: ${value}\nTry 'help'.`;
}

function chatAnswer(value: string) {
  const query = value.toLowerCase();
  const match = Object.keys(ANSWERS).find((key) => query.includes(key));

  if (query.includes("zyou") || query.includes("mcp")) {
    return "At Zyou, Pratham builds marketing infrastructure for AI: MCP servers, campaign operations, reporting, auth, session state, and SDKs.";
  }

  if (query.includes("isro")) {
    return "At ISRO, Pratham built a disaster management dashboard with GIS layers, flood visualisation, emergency routing, and nearby hospital discovery.";
  }

  if (query.includes("email") || query.includes("hire")) {
    return ANSWERS.contact;
  }

  return (
    (match && ANSWERS[match]) ??
    "I can help with Pratham's projects, experience, stack, writing, or contact details."
  );
}
