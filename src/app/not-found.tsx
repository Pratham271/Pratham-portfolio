import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <main className="notFound">
      <div className="notFoundGrain" />
      <header><Link href="/">PC<span>.</span></Link><Terminal size={20} /></header>
      <div className="notFoundCode">404</div>
      <section>
        <p>ROUTE_NOT_FOUND</p>
        <h1>This page wandered<br />off the stack.</h1>
        <span>The route does not exist, but the rest of the portfolio is still running.</span>
        <Link href="/"><ArrowLeft size={18} /> Back to the build</Link>
      </section>
    </main>
  );
}
