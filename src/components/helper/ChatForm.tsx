'use client';
import { loadingAtom, userInputAtom } from '@/store/atoms/userInput'
import React, { useEffect, useRef } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { SendHorizonal, Trash } from "lucide-react"
import { Message } from '@/type';

type SetMessagesType = React.Dispatch<React.SetStateAction<Message[]>>;


interface messageProp {
    setMessages: SetMessagesType;
    handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    open:boolean;
    // other props
  }
const ChatForm = ({setMessages,handleFormSubmit,open}: messageProp) => {
    const [input, setInput] = useRecoilState(userInputAtom)
    const inputRef = useRef<HTMLInputElement | null>(null);
    const loading = useRecoilValue(loadingAtom)
    useEffect(()=> {
        inputRef.current?.focus()
    },[open])
  return (
    <>
      <form className="m-3 flex gap-2" onSubmit={handleFormSubmit}>
      <button
            type="button"
            className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-[hsl(var(--line))] text-[hsl(var(--muted))] hover:text-[hsl(var(--foreground))]"
            title="Clear chat"
            onClick={()=> setMessages([])}
          >
            <Trash size={24} />
          </button>
          <input
            value={input}
            disabled={loading}
            ref={inputRef}
            onChange={(e)=> setInput(e.target.value)}
            placeholder={loading ? "Waiting for AI..." : "Ask something"}
            className="min-w-0 grow rounded-full border border-[hsl(var(--line))] bg-[hsl(var(--background))] px-4 py-2 text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
          />
          <button
            className="flex h-11 w-11 justify-center rounded-full bg-[hsl(var(--foreground))] px-3 py-2 text-[hsl(var(--background))] disabled:opacity-50"
            disabled={loading || input.trim().length === 0}
            type="submit"
            title="Submit message"
          >
            <SendHorizonal size={24} />
          </button>
      </form>
    </>
  )
}

export default ChatForm
