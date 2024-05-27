'use client';
import { userInputAtom } from '@/store/atoms/userInput'
import React from 'react'
import { useRecoilState } from 'recoil'
import { SendHorizonal, Trash } from "lucide-react"
import { Message } from '@/type';

type SetMessagesType = React.Dispatch<React.SetStateAction<Message[]>>;


interface messageProp {
    setMessages: SetMessagesType;
    handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    // other props
  }
const ChatForm = ({setMessages,handleFormSubmit}: messageProp) => {
    const [input, setInput] = useRecoilState(userInputAtom)
  return (
    <>
      <form className="m-3 flex gap-1" onSubmit={handleFormSubmit}>
      <button
            type="button"
            className="flex w-10 flex-none items-center justify-center"
            title="Clear chat"
            onClick={()=> setMessages([])}
          >
            <Trash size={24} />
          </button>
          <input
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            placeholder="Ask something"
            className="grow rounded border bg-background px-3 py-2 text-white focus:outline-none"
          />
          <button
            className=" rounded border bg-background px-3 py-2 disabled:opacity-50"
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
