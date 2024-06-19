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
      <form className="m-3 flex gap-1" onSubmit={handleFormSubmit}>
      <button
            type="button"
            className="flex flex-none items-center justify-center"
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
            placeholder="Ask something"
            className="grow rounded border bg-background px-3 py-2 text-white focus:outline-none ml-1"
          />
          <button
            className="grow lg:grow-0 rounded border bg-background px-3 py-2 disabled:opacity-50 flex justify-center"
            disabled={input.length === 0}
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
