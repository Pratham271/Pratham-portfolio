import NavBar from "@/components/NavBar";
import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar/>
      <main className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-12 px-5 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <section>
          <p className="mb-5 inline-flex rounded-full border border-[hsl(var(--line))] bg-[hsl(var(--panel)/0.78)] px-4 py-2 text-sm text-[hsl(var(--muted))]">AI developer · open source contributor</p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-normal text-[hsl(var(--foreground))] md:text-8xl">
            Pratham builds useful AI products.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[hsl(var(--muted))]">
            Computer Science graduate and full-stack web developer focused on AI interfaces, agentic systems, and clean product experiences. Currently building campaign intelligence tools and contributing to open source.
          </p>
          <div className="mt-10 grid gap-3 text-sm text-[hsl(var(--muted))] sm:grid-cols-3">
            <div className="border-t border-[hsl(var(--line))] pt-3"><span className="block text-2xl font-bold text-[hsl(var(--foreground))]">AI</span> LangGraph, LlamaIndex, Vercel AI</div>
            <div className="border-t border-[hsl(var(--line))] pt-3"><span className="block text-2xl font-bold text-[hsl(var(--foreground))]">Web</span> Next.js, TypeScript, Postgres</div>
            <div className="border-t border-[hsl(var(--line))] pt-3"><span className="block text-2xl font-bold text-[hsl(var(--foreground))]">Now</span> Full Stack AI Developer</div>
          </div>
        </section>
        <div className='mx-auto flex w-full max-w-md flex-col items-center'>
          <div className="aspect-square w-full max-w-[390px] overflow-hidden rounded-full border border-[hsl(var(--line))] bg-[hsl(var(--panel-strong))] p-3 shadow-2xl shadow-black/10">
            <Image src="/avatar.png" alt="Pratham Chauhan" width={720} height={720} priority className='h-full w-full rounded-full object-cover object-top'/>
          </div>
          <div className="mt-5 w-full rounded-3xl border border-[hsl(var(--line))] bg-[hsl(var(--panel)/0.82)] p-5 text-sm leading-6 text-[hsl(var(--muted))] backdrop-blur">
            Ask the chat button about projects, work history, or what Pratham is building next.
          </div>
        </div>
      </main>
    </div>
  );
}
