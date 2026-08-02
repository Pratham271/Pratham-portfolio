export const COMMANDS: Record<string, string> = {
  help: "QUICK START\n\n  whoami       See who built this portfolio\n  ls           Browse the available sections\n  projects     View selected products and experiments\n  experience   See where Pratham has worked\n  contact      Get email and social links\n  pc --init    Start the interactive portfolio assistant\n  pc --help    View the complete command reference",
  whoami:
    "Pratham Chauhan, a founder-minded AI engineer building agents, developer tools, and production infrastructure.",
  ls: "about/  experience/  projects/  stack/  writing/  contact/",
  pwd: "/home/pratham/portfolio",
  projects:
    "Zyou MCP infrastructure\nMCP Store\nSciya AI Tutor\nEnigmaAI\nChatvers",
  experience:
    "2026 - now    Founding Member, Zyou\n2024 - 2026   Full Stack AI Developer, LeapX\n2022 - 2023   Web Developer, ISRO\n2022          Project Intern, Dreamsol",
  stack:
    "TypeScript  Python  Next.js  React  Node.js\nLangGraph   AI SDK  MCP  Redis  PostgreSQL  Docker",
  writing: "Production AI notes: substack.com/@prathamchauhan1",
  contact:
    "Email      chauhanpratham22@gmail.com\nGitHub     github.com/Pratham271\nLinkedIn   linkedin.com/in/pratham-chauhan-0812ba1a0\nX          x.com/Pratham9474",
  resume: "Resume: /Resume.pdf",
  "pc --version": "pc 1.0.0",
  "pc --help":
    "PC COMMANDS\n\n  pc --init       Start the interactive portfolio assistant\n  pc --help       Show this command reference\n  pc --version    Print the installed PC version\n\nPORTFOLIO COMMANDS\n\n  whoami          Show Pratham's profile\n  projects        List selected work\n  experience      Show work history\n  stack           List tools and technologies\n  writing         Find published notes\n  contact         Show email and social links\n  resume          Show the resume path\n\nSHELL COMMANDS\n\n  ls              List portfolio sections\n  pwd             Print the current path\n  date            Print the current date and time\n  history         Show commands from this session\n  clear           Clear terminal output\n  exit            Close the terminal\n\nKEYBOARD\n\n  Up / Down       Move through command history\n  Ctrl+C          Cancel the current input\n  Ctrl+L          Clear terminal output\n  Escape          Close the terminal",
};

export const ANSWERS: Record<string, string> = {
  work: "Selected work includes Zyou's marketing MCP infrastructure, MCP Store, Sciya AI Tutor, EnigmaAI, and Chatvers.",
  projects:
    "Selected work includes Zyou's marketing MCP infrastructure, MCP Store, Sciya AI Tutor, EnigmaAI, and Chatvers.",
  about: COMMANDS.whoami,
  experience:
    "Currently a founding member at Zyou. Previously a Full Stack AI Developer at LeapX, a Web Developer at ISRO, and a Project Intern at Dreamsol.",
  stack:
    "TypeScript · Python · Next.js · React · Node.js · LangGraph · Vercel AI SDK · MCP · Redis · PostgreSQL · Docker",
  writing:
    "Pratham writes about production AI infrastructure at substack.com/@prathamchauhan1.",
  contact:
    "chauhanpratham22@gmail.com · github.com/Pratham271 · linkedin.com/in/pratham-chauhan-0812ba1a0",
};

export const PC_LOGO = ` ██████╗  ██████╗
 ██╔══██╗██╔════╝
 ██████╔╝██║
 ██╔═══╝ ██║
 ██║     ╚██████╗
 ╚═╝      ╚═════╝`;
