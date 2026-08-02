"use client";

import { useState } from "react";
import { BookOpen, Bookmark, ExternalLink } from "lucide-react";

const BOOKS = [
  {
    title: "Mathematics for Machine Learning",
    shortTitle: "Mathematics for ML",
    author: "Marc Peter Deisenroth, A. Aldo Faisal & Cheng Soon Ong",
    category: "Foundations",
    status: "On shelf",
    color: "#167f91",
    ink: "#f8f3df",
    cover: "/books/mathematics-for-machine-learning.jpg",
    href: "https://www.amazon.co.uk/dp/110845514X",
    takeaway: "The linear algebra, geometry, calculus, probability, and optimisation beneath machine learning.",
  },
  {
    title: "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
    shortTitle: "Hands-On ML",
    author: "Aurélien Géron",
    category: "Practice",
    status: "On shelf",
    color: "#eadbb6",
    ink: "#29231d",
    cover: "/books/hands-on-machine-learning.jpg",
    href: "https://www.amazon.co.uk/dp/1098125975",
    takeaway: "A practical path from preparing real data to training and deploying modern machine-learning systems.",
  },
  {
    title: "Understanding Deep Learning",
    shortTitle: "Deep Learning",
    author: "Simon J. D. Prince",
    category: "Deep learning",
    status: "On shelf",
    color: "#3b8992",
    ink: "#f4f6ed",
    cover: "/books/understanding-deep-learning.jpg",
    href: "https://www.amazon.in/dp/0262048647",
    takeaway: "An intuitive and mathematical guide to the ideas behind modern neural networks.",
  },
  {
    title: "Practical Statistics for Data Scientists",
    shortTitle: "Practical Statistics",
    author: "Peter Bruce, Andrew Bruce & Peter Gedeck",
    category: "Statistics",
    status: "On shelf",
    color: "#cf593f",
    ink: "#fff9ed",
    cover: "/books/practical-statistics.webp",
    href: "https://www.amazon.in/dp/8194435005",
    takeaway: "The essential statistical concepts for working with data, explained through R and Python.",
  },
  {
    title: "Designing Data-Intensive Applications, 2nd Edition",
    shortTitle: "Data-Intensive Apps",
    author: "Martin Kleppmann & Chris Riccomini",
    category: "Systems",
    status: "Reading now",
    color: "#899b76",
    ink: "#152015",
    cover: "/books/designing-data-intensive-applications.webp",
    href: "https://www.amazon.in/dp/9368089043",
    takeaway: "A current study of the trade-offs behind reliable, scalable, and maintainable data systems.",
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
            Books shaping how I think about machine learning, data, and systems.
          </h2>
          <p className="mt-6 max-w-[680px] text-lg leading-[1.7] text-[var(--muted)]">
            A working shelf of references, with the current read marked.
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
            <span className={book.status === "Reading now" ? "rounded-full bg-[#9aaf82] px-3 py-1.5 text-[#172016]" : ""}>{book.status}</span>
          </div>
          <div className="my-auto py-10">
            <div className="grid grid-cols-[112px_1fr] items-end gap-6 max-sm:grid-cols-[92px_1fr] max-sm:gap-4">
              <a href={book.href} target="_blank" rel="noreferrer" aria-label={`View ${book.title} on Amazon`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="aspect-[.72] w-full rounded-sm object-cover shadow-[0_14px_25px_rgb(47_38_31_/_28%)]" src={book.cover} alt={`${book.title} cover`} />
              </a>
              <div>
                <BookOpen className="mb-5 text-[#b75e49]" size={24} strokeWidth={1.6} />
                <p className="mb-3 font-[DM_Mono] text-[10px] tracking-[.14em] text-[#b75e49] uppercase">{book.category}</p>
                <h3 className="my-0 font-[Instrument_Serif] text-[clamp(34px,3vw,46px)] leading-[.95] font-normal">{book.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-[#77695d]">by {book.author}</p>
              </div>
            </div>
            <p className="mt-8 border-l-2 border-[#d98b70] pl-5 text-base leading-[1.65]">{book.takeaway}</p>
          </div>
          <a className="flex items-center justify-between border-t border-[#2f261f]/15 pt-5 font-[DM_Mono] text-[10px] tracking-[.12em] text-[#77695d] hover:text-[#b75e49]" href={book.href} target="_blank" rel="noreferrer">
            VIEW BOOK <ExternalLink size={15} />
          </a>
        </aside>
      </div>
    </section>
  );
}
