"use client";

import { useState } from "react";
import Hero from "@/components/portfolio/Hero";
import SiteChrome from "@/components/portfolio/SiteChrome";
import TerminalAssistant from "@/components/portfolio/TerminalAssistant";
import Bookshelf from "@/components/portfolio/Bookshelf";
import { BUILD_LOG, TRACE_ENTRIES } from "@/constants/portfolio";

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <main>
      <div className="relative">
        <Hero />
        <SiteChrome openTerminal={() => setTerminalOpen(true)} />

        <section className="world-reveal relative z-40 grid min-h-svh w-full grid-cols-[220px_1fr] content-center gap-10 bg-[var(--bg)] px-[max(20px,calc((100vw_-_1180px)/2))] py-[120px]
          max-md:grid-cols-1 max-sm:px-3 max-sm:py-[84px]">
          <p className="font-[DM_Mono] text-[11px] tracking-[.14em] text-[var(--muted)]">01 / WHAT I DO</p>
          <p className="m-0 text-[clamp(38px,5vw,76px)] leading-[1.06] tracking-[-.04em]">I build at the layer where
            <mark className="bg-transparent bg-[linear-gradient(transparent_65%,color-mix(in_srgb,var(--yellow)_48%,transparent)_65%)] text-inherit">
              AI meets real infrastructure.
            </mark>
            Agents, developer tools, and full stack products shaped around useful human problems.
          </p>
        </section>
      </div>

      <section className="pt-[70px] pb-[120px] max-sm:pb-[84px]" id="experience">
        <div className="mx-auto mb-[60px] grid w-[min(1180px,calc(100%_-_40px))] grid-cols-[220px_1fr] gap-10 max-md:grid-cols-1 max-sm:w-[calc(100%_-_24px)]">
          <p className="font-[DM_Mono] text-[11px] tracking-[.14em] text-[var(--muted)]">02 / EXPERIENCE</p>
          <h2 className="m-0 max-w-[900px] text-[clamp(42px,5vw,72px)] leading-[1.02] tracking-[-.045em]">
            Building AI products from infrastructure to interface.
          </h2>
        </div>
        <article className="mx-auto grid min-h-[650px] w-[min(1180px,calc(100%_-_40px))] grid-cols-[.82fr_1.18fr] items-center gap-[70px] border-t
          border-[var(--line)] py-[90px] max-md:grid-cols-1 max-md:gap-10 max-sm:w-[calc(100%_-_24px)] max-sm:py-[70px]">
          <div className="max-w-[480px] [&>span]:mb-[60px] [&>span]:block [&>span]:font-[DM_Mono] [&>span]:text-[var(--muted)] [&>p:first-of-type]:text-xs
            [&>p:first-of-type]:font-bold [&>p:first-of-type]:tracking-[.14em] [&>p:first-of-type]:text-[var(--coral)] [&>p:first-of-type]:uppercase
            [&>p:last-of-type]:text-lg [&>p:last-of-type]:leading-[1.65] [&>p:last-of-type]:text-[var(--muted)]">
            <span>FEB 2026 / NOW</span>
            <p>Founding Member · Zyou</p>
            <h3 className="my-3 font-[Instrument_Serif] text-[clamp(54px,6vw,88px)] leading-[.95] font-normal">Marketing infrastructure for AI</h3>
            <p>
              Architecting and shipping an MCP server for launching, managing, and optimising Facebook campaigns through AI interfaces,
              alongside automated reporting, session management, and a first-party marketing SDK.
            </p>
            <div className="mt-[26px] flex flex-wrap gap-2 [&>span]:rounded-full [&>span]:border [&>span]:border-[var(--line)] [&>span]:px-2.5
              [&>span]:py-2 [&>span]:font-[DM_Mono] [&>span]:text-[10px]">
              <span>Next.js</span>
              <span>MCP</span>
              <span>SDK</span>
              <span>Meta Ads</span>
              <span>AI SDK</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--surface)] shadow-xl">
            <div className="flex justify-between border-b border-[var(--line)] px-[22px] py-5 font-[DM_Mono] text-[11px]">
              <span>SESSION_84F1</span>
              <b className="text-[#5d9b64]">LIVE</b>
            </div>
            {TRACE_ENTRIES.map((entry, index) =>
              <div className={`grid grid-cols-[42px_1fr_80px_90px] items-center gap-3.5 border-b border-[var(--line)] px-[22px] py-[17px] font-[DM_Mono]
                  text-xs max-sm:grid-cols-[30px_1fr_60px] ${entry.status === "WARNING" ? "bg-[color-mix(in_srgb,var(--yellow)_20%,var(--surface))]" : ""}`} key={entry.name}>
                <span className="text-[var(--muted)]">0{index + 1}</span>
                <strong>{entry.name}</strong>
                <small className="text-[var(--muted)]">{entry.duration}ms</small>
                <em className="text-[9px] not-italic max-sm:hidden">{entry.status}</em>
              </div>)}
          </div>
        </article>
        <article className="mx-auto grid min-h-[650px] w-[min(1180px,calc(100%_-_40px))] grid-cols-[1.18fr_.82fr] items-center gap-[70px] border-t
          border-[var(--line)] py-[90px] max-md:grid-cols-1 max-md:gap-10 max-sm:w-[calc(100%_-_24px)] max-sm:py-[70px]">
          <div className="relative min-h-[500px] overflow-hidden rounded-[32px] border border-[var(--line)]
            bg-[linear-gradient(145deg,color-mix(in_srgb,var(--blue)_45%,var(--surface)),var(--surface))] max-md:order-2 max-sm:min-h-[430px]">
            <div className="[&>span]:absolute [&>span]:rounded-xl [&>span]:border [&>span]:border-[var(--line)] [&>span]:bg-[var(--surface)]
              [&>span]:px-3 [&>span]:py-2.5 [&>span]:font-[DM_Mono] [&>span]:text-[9px]">
              <span className="top-[10%] left-[7%]">create_campaign</span>
              <span className="top-[13%] right-[8%]">get_insights</span>
              <span className="bottom-[15%] left-[8%]">update_budget</span>
              <span className="right-[10%] bottom-[12%]">generate_report</span>
            </div>
            <div className="absolute top-1/2 left-1/2 z-[3] grid size-[190px] -translate-1/2 place-content-center rounded-full bg-[var(--surface)]
              text-center shadow-xl">
              <small className="text-[var(--muted)]">MCP</small>
              <strong className="text-[22px]">Marketing<br />Interface</strong>
            </div>
            <b className="absolute bottom-7 left-[30%] rounded-full bg-[var(--text)] px-[18px] py-3 text-[var(--bg)]">Meta</b>
            <b className="absolute right-[28%] bottom-7 rounded-full bg-[var(--text)] px-[18px] py-3 text-[var(--bg)]">Google</b>
          </div>
          <div className="max-w-[480px] [&>span]:mb-[60px] [&>span]:block [&>span]:font-[DM_Mono] [&>span]:text-[var(--muted)] [&>p:first-of-type]:text-xs
            [&>p:first-of-type]:font-bold [&>p:first-of-type]:tracking-[.14em] [&>p:first-of-type]:text-[var(--coral)] [&>p:first-of-type]:uppercase
            [&>p:last-of-type]:text-lg [&>p:last-of-type]:leading-[1.65] [&>p:last-of-type]:text-[var(--muted)]">
            <span>JUL 2024 / JAN 2026</span>
            <p>Full Stack AI Developer · LeapX</p>
            <h3 className="my-3 font-[Instrument_Serif] text-[clamp(54px,6vw,88px)] leading-[.95] font-normal">Agents that take action</h3>
            <p>Built and migrated AI campaign systems across Meta and Google Ads, added LlamaIndex analytics, standardised shared campaign libraries,
              and contributed to schema design and production CI/CD.</p>
            <div className="mt-[26px] flex flex-wrap gap-2 [&>span]:rounded-full [&>span]:border [&>span]:border-[var(--line)] [&>span]:px-2.5
              [&>span]:py-2 [&>span]:font-[DM_Mono] [&>span]:text-[10px]">
              <span>LangGraph</span>
              <span>LlamaIndex</span>
              <span>Meta Ads</span>
              <span>Google Ads</span>
            </div>
          </div>
        </article>
        <div className="mx-auto w-[min(1180px,calc(100%_-_40px))] border-t border-[var(--line)] max-sm:w-[calc(100%_-_24px)] [&>article]:grid
          [&>article]:grid-cols-[220px_1fr] [&>article]:gap-10 [&>article]:border-b [&>article]:border-[var(--line)] [&>article]:py-[58px]
          max-sm:[&>article]:grid-cols-1 max-sm:[&>article]:gap-[18px] [&>article>span]:font-[DM_Mono] [&>article>span]:text-[11px]
          [&>article>span]:text-[var(--muted)] [&_h3]:my-2.5 [&_h3]:font-[Instrument_Serif] [&_h3]:text-[46px] [&_h3]:font-normal [&_p]:max-w-[720px]
          [&_p]:leading-[1.7] [&_p]:text-[var(--muted)] [&_div>p:first-child]:m-0 [&_div>p:first-child]:text-[11px] [&_div>p:first-child]:font-bold
          [&_div>p:first-child]:tracking-[.14em] [&_div>p:first-child]:text-[var(--coral)] [&_div>p:first-child]:uppercase">
          <article>
            <span>2022 / 2023</span>
            <div><p>Web Developer · ISRO</p>
              <h3>Disaster management dashboard</h3>
              <p>Built GIS visualisation, flood layers, disaster news heatmaps, emergency routing, and nearby hospital discovery for a single
                operational dashboard.</p>
            </div>
          </article>
          <article>
            <span>2022</span>
            <div>
              <p>Project Intern · Dreamsol</p>
              <h3>Employee operations platform</h3>
              <p>Developed authenticated employee data workflows with Spring, Hibernate, and database backed CRUD operations.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[color-mix(in_srgb,var(--blue)_13%,var(--bg))] py-[120px] max-sm:py-[84px]" id="projects">
        <div className="mx-auto mb-[60px] grid w-[min(1180px,calc(100%_-_40px))] grid-cols-[220px_1fr] gap-10 max-md:grid-cols-1 max-sm:w-[calc(100%_-_24px)]">
          <p className="font-[DM_Mono] text-[11px] tracking-[.14em] text-[var(--muted)]">03 / PROJECTS</p>
          <h2 className="m-0 max-w-[900px] text-[clamp(42px,5vw,72px)] leading-[1.02] tracking-[-.045em]">Products, experiments, and tools I&apos;m
            taking from idea to shipped.</h2>
        </div>
        <div className="mx-auto grid w-[min(1180px,calc(100%_-_40px))] grid-cols-[1.1fr_.9fr] gap-5 max-md:grid-cols-1 max-sm:w-[calc(100%_-_24px)]
          [&>article]:flex [&>article]:min-h-[360px] [&>article]:flex-col [&>article]:rounded-[28px] [&>article]:border
          [&>article]:border-[var(--line)] [&>article]:bg-[var(--surface)] [&>article]:p-8 [&>article>span]:font-[DM_Mono]
          [&>article>span]:text-[10px] [&>article>span]:text-[var(--muted)] [&>article>h3]:mt-auto [&>article>h3]:mb-[18px]
          [&>article>h3]:font-[Instrument_Serif] [&>article>h3]:text-[52px] [&>article>h3]:leading-none
          [&>article>h3]:font-normal [&>article>p]:text-base [&>article>p]:leading-[1.65] [&>article>p]:text-[var(--muted)] [&>article>a]:mt-auto
          [&>article>a]:text-[13px] [&>article>a]:font-bold">
          <article className="row-span-2! min-h-[740px]! bg-[linear-gradient(150deg,color-mix(in_srgb,var(--yellow)_35%,var(--surface)),var(--surface))]!
            max-md:row-auto! max-md:min-h-[520px]!">
            <span>BUILDING NOW</span>
            <h3 className="text-[76px]! max-sm:text-[58px]!">MCP Store</h3>
            <p>Discover, configure, and install MCP servers across Claude, Cursor, VS Code, and other AI hosts with one click.</p>
            <div className="mt-[50px] grid grid-cols-3 gap-2 rounded-[20px] border border-[var(--line)] bg-[var(--surface)] p-5 [&>b]:rounded-[10px]
              [&>b]:border [&>b]:border-[var(--line)] [&>b]:p-3 [&>b]:text-center [&>b]:text-xs [&>b:first-child]:bg-[var(--text)]
              [&>b:first-child]:text-[var(--bg)]">
              <b>Claude</b>
              <b>Cursor</b>
              <b>VS Code</b>
              <button className="col-span-full rounded-[10px] border-0 bg-[#9eae92] p-3.5 font-bold text-[#172016]">Install server ↗</button>
            </div>
          </article>
          <article className="bg-[linear-gradient(145deg,color-mix(in_srgb,var(--violet)_28%,var(--surface)),var(--surface))]!">
            <span>AI EDUCATION</span>
            <h3>Sciya AI Tutor</h3>
            <p>Competitive exam preparation that connects course videos to chapter quizzes,
              correct answer explanations, and AI reviewed long form answers for UPSC mains and other writing based exams.
            </p>
            <div className="mt-[26px] flex flex-wrap gap-2 [&>span]:rounded-full [&>span]:border [&>span]:border-[var(--line)] [&>span]:px-2.5
              [&>span]:py-2 [&>span]:font-[DM_Mono] [&>span]:text-[10px]">
              <span>Multi agent</span>
              <span>Video learning</span>
              <span>Answer review</span>
            </div>
          </article>
          <article>
            <span>AI ASSISTANT</span>
            <h3>EnigmaAI</h3>
            <p>A multi tool assistant for questions, media search, and useful follow up prompts powered by agent workflows.</p>
            <a href="https://github.com/Pratham271/100xengineer/tree/initial-setup">View project ↗</a>
          </article>
          <article>
            <span>KNOWLEDGE ASSISTANT</span>
            <h3>Chatvers</h3>
            <p>Ask questions across documents, YouTube links, and web pages through one retrieval workflow.</p>
            <a href="https://chatvers.com">Visit Chatvers ↗</a>
          </article>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%_-_40px))] border-t border-[var(--line)] py-[120px] max-sm:w-[calc(100%_-_24px)] max-sm:py-[84px]">
        <div className="mb-[60px] grid grid-cols-[220px_1fr] gap-10 max-md:grid-cols-1">
          <p className="font-[DM_Mono] text-[11px] tracking-[.14em] text-[var(--muted)]">BUILD LOG</p>
          <h2 className="m-0 max-w-[900px] text-[clamp(42px,5vw,72px)] leading-[1.02] tracking-[-.045em]">Experiments and open source work.</h2>
        </div>{BUILD_LOG.map(item =>
          <div className="grid grid-cols-[100px_1fr_auto] items-center gap-5 border-t border-[var(--line)] py-6" key={item.name}>
            <span className="text-[11px] text-[var(--muted)]">{item.year}</span>
            <strong className="text-xl">{item.name}</strong><em className="text-[11px] not-italic text-[var(--muted)]">{item.category}</em>
          </div>
        )}
      </section>

      <section className="bg-[color-mix(in_srgb,var(--yellow)_12%,var(--bg))] py-[120px] max-sm:py-[84px]" id="writing">
        <div className="mx-auto mb-[60px] grid w-[min(1180px,calc(100%_-_40px))] grid-cols-[220px_1fr] gap-10 max-md:grid-cols-1 max-sm:w-[calc(100%_-_24px)]">
          <p className="font-[DM_Mono] text-[11px] tracking-[.14em] text-[var(--muted)]">WRITING</p>
          <h2 className="m-0 max-w-[900px] text-[clamp(42px,5vw,72px)] leading-[1.02] tracking-[-.045em]">
            Notes from systems that rarely follow the happy path.
          </h2>
        </div>
        <div className="mx-auto grid w-[min(1180px,calc(100%_-_40px))] grid-cols-[1.3fr_.7fr] gap-5 max-md:grid-cols-1 max-sm:w-[calc(100%_-_24px)]
          [&>*]:flex [&>*]:min-h-[260px] [&>*]:flex-col [&>*]:rounded-[28px] [&>*]:border [&>*]:border-[var(--line)] [&>*]:bg-[var(--surface)]
          [&>*]:p-7 [&_span]:font-[DM_Mono] [&_span]:text-[10px] [&_span]:text-[var(--muted)] [&_h3]:mt-auto [&_h3]:mb-[18px]
          [&_h3]:font-[Instrument_Serif] [&_h3]:text-[38px] [&_h3]:leading-[1.05] [&_h3]:font-normal [&_p]:leading-relaxed [&_p]:text-[var(--muted)]
          [&_b]:mt-auto [&_b]:text-[13px]">
          <a className="row-span-2 min-h-[540px] bg-[linear-gradient(150deg,color-mix(in_srgb,var(--violet)_28%,var(--surface)),var(--surface))]
            max-md:row-auto max-md:min-h-[520px] [&_h3]:text-[64px] max-sm:[&_h3]:text-[46px]" href="https://substack.com/@prathamchauhan1">
            <span>AI INFRASTRUCTURE · 8 MIN</span>
            <h3>Setting up Gemini on Vertex AI for production</h3>
            <p>Credentials, configuration, environments, and the small mistakes that break production systems.</p>
            <b>Read on Substack ↗</b>
          </a>
          <a href="https://substack.com/@prathamchauhan1">
            <span>NETWORKING · 6 MIN</span>
            <h3>Connecting Vercel to private ClickHouse</h3>
            <b>Read article ↗</b>
          </a>
          <div className="bg-transparent [&_h3]:text-[30px]">
            <span>CURRENTLY WRITING</span>
            <h3>Why agent infrastructure fails around auth, state, and platform boundaries.</h3>
          </div>
        </div>
      </section>

      <Bookshelf />

      <section className="mx-auto grid w-[min(1180px,calc(100%_-_40px))] grid-cols-[1.2fr_.8fr] gap-20 border-t border-[var(--line)] py-[120px]
        max-md:grid-cols-1 max-sm:w-[calc(100%_-_24px)] max-sm:py-[84px]" id="about">
        <div>
          <p className="font-[DM_Mono] text-[11px] tracking-[.14em] text-[var(--muted)]">ABOUT</p>
          <h2 className="text-[clamp(46px,5vw,74px)] leading-[1.02] tracking-[-.04em]">
            I&apos;m interested in the layer between powerful models and real world systems.
          </h2>
          <p className="max-w-[760px] text-lg leading-[1.75] text-[var(--muted)]">
            Most of my work lives around agents, MCP, advertising infrastructure, developer tools, and interfaces that make complex systems feel direct.
          </p>
        </div>
        <aside className="flex flex-col justify-end [&>p]:m-0 [&>p]:border-b [&>p]:border-[var(--line)] [&>p]:py-[22px] [&>p]:font-bold [&_span]:mb-2
          [&_span]:block [&_span]:font-[DM_Mono] [&_span]:text-[9px] [&_span]:text-[var(--muted)]">
          <p>
            <span>BUILDING</span>
            Zyou and its MCP ecosystem
          </p>
          <p>
            <span>EXPLORING</span>
            Physical interfaces for AI agents
          </p>
          <p>
            <span>LEARNING</span>
            Neural networks and architectures
          </p>
          <p>
            <span>WRITING</span>
            Production AI infrastructure
          </p>
        </aside>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%_-_40px))] border-t border-[var(--line)] py-[120px] max-sm:w-[calc(100%_-_24px)] max-sm:py-[84px]">
        <p className="font-[DM_Mono] text-[11px] tracking-[.14em] text-[var(--muted)]">LET&apos;S BUILD</p>
        <h2 className="max-w-[1000px] font-[Instrument_Serif] text-[clamp(64px,8vw,120px)] leading-[.92] font-normal">
          Something that doesn&apos;t need another dashboard.
        </h2>
        <a className="my-[42px] inline-block border-b-2 border-[var(--coral)] text-[clamp(22px,3vw,38px)]" href="mailto:chauhanpratham22@gmail.com">
          chauhanpratham22@gmail.com ↗
        </a>
        <div className="flex flex-wrap gap-[22px] font-[DM_Mono] text-xs">
          <a href="https://github.com/Pratham271">GitHub</a>
          <a href="https://www.linkedin.com/in/pratham-chauhan-0812ba1a0/">LinkedIn</a>
          <a href="https://x.com/Pratham9474">X</a>
          <a href="https://substack.com/@prathamchauhan1">Substack</a>
          <a href="/Resume.pdf">Resume</a></div></section>

      <footer className="mx-auto flex w-[min(1180px,calc(100%_-_40px))] justify-between border-t border-[var(--line)] pt-6 pb-10 font-[DM_Mono]
        text-[9px] text-[var(--muted)] max-sm:w-[calc(100%_-_24px)] max-sm:flex-col max-sm:gap-3">
        <span>Pratham Chauhan · Founder and AI engineer</span>
        <span>AI · Product · Infrastructure</span>
      </footer>
      <TerminalAssistant open={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </main>
  );
}
