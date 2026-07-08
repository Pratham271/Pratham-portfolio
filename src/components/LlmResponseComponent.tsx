'use client';
import Image from 'next/image';
import React from 'react'
import ReactMarkdown from "react-markdown";
import Link from 'next/link';

const ThinkingBubble = () => (
  <div className="flex items-center gap-3" aria-label="AI is thinking">
    <span className="text-sm font-semibold text-[hsl(var(--muted))]">Thinking</span>
    <span className="flex items-center gap-1">
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[hsl(var(--accent-strong))]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[hsl(var(--accent-strong))] [animation-delay:120ms]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[hsl(var(--accent-strong))] [animation-delay:240ms]" />
    </span>
  </div>
)

const LlmResponseComponent = ({content, isStreaming}: {content:string, isStreaming:boolean}) => {
    const hasLLMResponse = content && content.trim().length > 0 
  return (
    <>
       {hasLLMResponse ? (
        <div className='flex items-start gap-2'>
          <span className="mt-1 flex h-8 w-8 flex-none items-end justify-center overflow-hidden rounded-full border border-[hsl(var(--line))] bg-[hsl(var(--accent-soft))]">
            <Image src="/avatar.png" alt="" width={56} height={56} className="h-10 w-10 object-contain object-bottom" />
          </span>
            <span className='rounded-2xl border border-[hsl(var(--line))] bg-[hsl(var(--panel))] px-3 py-2 leading-5 text-[hsl(var(--foreground))]'>
            <ReactMarkdown
          components={{
            a: ({ node, ref, ...props }) => (
              <Link
                {...props}
                href={props.href ?? ""}
                className="text-[hsl(var(--accent-strong))] hover:underline"
              />
            ),
            p: ({ node, ...props }) => (
              <p {...props} className="mt-3 first:mt-0" />
            ),
            ul: ({ node, ...props }) => (
              <ul
                {...props}
                className="mt-3 list-inside list-disc first:mt-0"
              />
            ),
            li: ({ node, ...props }) => <li {...props} className="mt-1" />,
          }}
        >
          {content}
        </ReactMarkdown>
        {isStreaming && <span className="mt-3 block"><ThinkingBubble /></span>}
        </span>
        </div>
      ): isStreaming ? (
        <div className="mx-1 mb-6 flex items-start gap-2" aria-live="polite">
          <span className="flex h-8 w-8 flex-none items-end justify-center overflow-hidden rounded-full border border-[hsl(var(--line))] bg-[hsl(var(--accent-soft))]">
            <Image src="/avatar.png" alt="" width={56} height={56} className="h-10 w-10 object-contain object-bottom" />
          </span>
          <div className="rounded-2xl border border-[hsl(var(--line))] bg-[hsl(var(--panel))] px-4 py-3">
            <ThinkingBubble />
          </div>
        </div>
      ) : null}
    </>
  )
}

export default LlmResponseComponent
