import React from 'react'
import Form from './helper/Form'

const ContactComponent = async() => {
  return (
    <main className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-10 px-5 py-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
      <section>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[hsl(var(--accent-strong))]">Contact</p>
        <h1 className="text-5xl font-black leading-none text-[hsl(var(--foreground))] md:text-8xl">Let&apos;s build something sharp.</h1>
        <p className="mt-6 max-w-md text-lg leading-8 text-[hsl(var(--muted))]">Send a message, browse socials, or use the chat button if you want the AI version first.</p>
      </section>
      <div className="w-full">
      <Form/>
      </div>
    </main>
  )
}

export default ContactComponent
