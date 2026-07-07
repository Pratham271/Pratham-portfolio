'use client';
import React from 'react'
import Spinner from './ui/Spinner'
import { useRecoilValue } from 'recoil';
import { loadingAtom } from '@/store/atoms/userInput';
import { Bot } from 'lucide-react';
import ReactMarkdown from "react-markdown";
import Link from 'next/link';

const LlmResponseComponent = ({content}: {content:string}) => {
    const hasLLMResponse = content && content.trim().length > 0 
    const loading = useRecoilValue(loadingAtom)
  return (
    <>
       {hasLLMResponse ? (
        <div className='flex items-center'>
            
            <span className='ml-1 rounded-2xl border border-[hsl(var(--line))] px-3 py-2 leading-5 text-[hsl(var(--foreground))]'>
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
        </span>
        </div>
      ): <p className='bg-transparent mx-3 mb-6'>{loading && <Spinner/>}</p>}
    </>
  )
}

export default LlmResponseComponent
