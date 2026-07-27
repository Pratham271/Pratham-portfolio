"use client";

import { useState } from "react";
import { BookOpen, Bookmark } from "lucide-react";

const BOOKS = [
  {
    title: "The Pragmatic Programmer",
    shortTitle: "Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    category: "Craft",
    status: "Read",
    date: "Mar 2023",
    impact: "9.2",
    color: "#b95745",
    ink: "#fff8ec",
    takeaway: "Care about the tiny decisions. They compound into the quality of the whole system.",
  },
  {
    title: "The Design of Everyday Things",
    shortTitle: "Everyday Things",
    author: "Don Norman",
    category: "Design",
    status: "Read",
    date: "Aug 2023",
    impact: "8.8",
    color: "#e5bd61",
    ink: "#342719",
    takeaway: "When someone struggles with a product, start by questioning the design—not the person.",
  },
  {
    title: "Deep Work",
    shortTitle: "Deep Work",
    author: "Cal Newport",
    category: "Focus",
    status: "Read",
    date: "Jan 2024",
    impact: "8.4",
    color: "#315b6e",
    ink: "#f7f0e5",
    takeaway: "The ability to focus without distraction is a practical advantage worth protecting.",
  },
  {
    title: "Zero to One",
    shortTitle: "Zero to One",
    author: "Peter Thiel",
    category: "Startups",
    status: "Read",
    date: "Apr 2024",
    impact: "8.7",
    color: "#272522",
    ink: "#efe6d8",
    takeaway: "The interesting question is not how to compete better, but what useful thing nobody else is building.",
  },
  {
    title: "The Mom Test",
    shortTitle: "The Mom Test",
    author: "Rob Fitzpatrick",
    category: "Product",
    status: "Read",
    date: "Sep 2024",
    impact: "9.0",
    color: "#d58a74",
    ink: "#2e211d",
    takeaway: "Good customer conversations uncover real behaviour instead of collecting polite validation.",
  },
  {
    title: "Designing Data-Intensive Applications",
    shortTitle: "Data-Intensive Apps",
    author: "Martin Kleppmann",
    category: "Systems",
    status: "Reading",
    date: "Now",
    impact: "—",
    color: "#899b76",
    ink: "#152015",
    takeaway: "Reliability comes from understanding the trade-offs beneath abstractions, not trusting the happy path.",
  },
  {
    title: "Build",
    shortTitle: "Build",
    author: "Tony Fadell",
    category: "Building",
    status: "Up next",
    date: "Next",
    impact: "—",
    color: "#a99abc",
    ink: "#241d2c",
    takeaway: "On my shelf for the next chapter: turning product judgment into a repeatable craft.",
  },
] as const;

export default function Bookshelf() {
  const [selected, setSelected] = useState(0);
  const book = BOOKS[selected];

  return (
    <section className="books-section py-[120px] max-sm:py-[84px]" id="books">
      <div className="mx-auto mb-[60px] grid w-[min(1180px,calc(100%_-_40px))] grid-cols-[220px_1fr] gap-10 max-md:grid-cols-1 max-sm:w-[calc(100%_-_24px)]">
        <p className="font-[DM_Mono] text-[11px] tracking-[.14em] text-[var(--muted)]">04 / MY SHELF</p>
        <div>
          <h2 className="m-0 max-w-[900px] text-[clamp(42px,5vw,72px)] leading-[1.02] tracking-[-.045em]">
            Books that changed how I think, build, and work.
          </h2>
          <p className="mt-6 max-w-[680px] text-lg leading-[1.7] text-[var(--muted)]">
            Not a reading list. A small record of ideas I carried into the work.
          </p>
        </div>
      </div>

      <div className="bookshelf-shell mx-auto grid w-[min(1180px,calc(100%_-_40px))] grid-cols-[1.35fr_.65fr] gap-0 overflow-hidden rounded-[32px] border border-[#5c422e]/25 max-lg:grid-cols-1 max-sm:w-[calc(100%_-_24px)]">
        <div className="bookshelf-stage">
          <div className="bookshelf-note">
            <Bookmark size={13} fill="currentColor" />
            click a spine to pull it out
          </div>
          <div className="book-row" aria-label="Books on my shelf">
            {BOOKS.map((item, index) => (
              <button
                className="book-spine"
                style={{
                  "--book-color": item.color,
                  "--book-ink": item.ink,
                  "--book-height": `${index % 3 === 0 ? 310 : index % 3 === 1 ? 278 : 294}px`,
                } as React.CSSProperties}
                onClick={() => setSelected(index)}
                aria-pressed={selected === index}
                aria-label={`Open ${item.title} by ${item.author}`}
                key={item.title}
              >
                <span className="book-band">{item.category}</span>
                <strong>{item.shortTitle}</strong>
                <small>{item.author}</small>
              </button>
            ))}
          </div>
          <div className="shelf-edge"><span /></div>
        </div>

        <aside className="flex min-h-[520px] flex-col bg-[#f7eddd] p-10 text-[#2f261f] max-sm:min-h-0 max-sm:p-6" aria-live="polite">
          <div className="flex items-center justify-between font-[DM_Mono] text-[10px] tracking-[.12em] text-[#77695d]">
            <span>{String(selected + 1).padStart(2, "0")} / {String(BOOKS.length).padStart(2, "0")}</span>
            <span className={book.status === "Reading" ? "rounded-full bg-[#9aaf82] px-3 py-1.5 text-[#172016]" : ""}>{book.status}</span>
          </div>
          <div className="my-auto py-12">
            <BookOpen className="mb-7 text-[#b75e49]" size={28} strokeWidth={1.6} />
            <p className="mb-3 font-[DM_Mono] text-[10px] tracking-[.14em] text-[#b75e49] uppercase">{book.category} · {book.date}</p>
            <h3 className="my-0 font-[Instrument_Serif] text-[clamp(44px,5vw,66px)] leading-[.95] font-normal">{book.title}</h3>
            <p className="mt-4 text-sm text-[#77695d]">by {book.author}</p>
            <blockquote className="mt-10 border-l-2 border-[#d98b70] pl-5 text-lg leading-[1.65]">“{book.takeaway}”</blockquote>
          </div>
          <div className="flex items-end justify-between border-t border-[#2f261f]/15 pt-5">
            <span className="font-[DM_Mono] text-[10px] tracking-[.12em] text-[#77695d]">PERSONAL IMPACT</span>
            <strong className="font-[Instrument_Serif] text-4xl font-normal">{book.impact}<small className="text-base text-[#77695d]"> / 10</small></strong>
          </div>
        </aside>
      </div>
    </section>
  );
}
