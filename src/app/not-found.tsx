import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-svh overflow-hidden bg-[#8ca6b7] px-[max(20px,calc((100vw_-_1180px)/2))] py-[18px] text-white after:pointer-events-none 
      after:absolute after:inset-0 after:bg-[linear-gradient(120deg,rgba(23,20,17,.12),transparent_55%)]">
      <div className="pointer-events-none absolute inset-0 z-[3] opacity-40" />
      <header className="relative z-[4] flex h-[66px] items-center justify-between text-2xl font-bold">
        <Link href="/">PC<span className="text-[#d9856d]">.</span></Link>
        <Terminal size={20} />
      </header>
      <div className="absolute top-1/2 left-1/2 z-[1] -translate-1/2 font-[Anton] text-[min(52vw,650px)] leading-[.8] opacity-[.17]">404</div>
      <section className="absolute bottom-[9vh] left-[max(20px,calc((100vw_-_1180px)/2))] z-[4] max-w-[780px] max-sm:right-5">
        <p className="font-[DM_Mono] text-[11px] tracking-[.16em]">ROUTE_NOT_FOUND</p>
        <h1 className="my-[18px] font-[Instrument_Serif] text-[clamp(64px,9vw,130px)] leading-[.82] font-normal tracking-[-.045em] max-sm:text-[64px]">
          This page wandered<br />off the stack.
        </h1>
        <span className="block max-w-[520px] leading-relaxed opacity-80">The route does not exist, but the rest of the portfolio is still running.</span>
        <Link className="mt-[30px] inline-flex items-center gap-2.5 rounded-full border-2 border-white px-[18px] py-3.5 text-[13px] font-bold transition 
          hover:bg-white hover:text-[#26221d]" href="/">
          <ArrowLeft size={18} /> Back to the build
        </Link>
      </section>
    </main>
  );
}
