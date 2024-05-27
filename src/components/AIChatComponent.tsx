'use client';
import { cn } from '@/utils/cn'
import React from 'react'
import { Bot, XCircle } from "lucide-react";
import ChatForm from './helper/ChatForm';
import { useRecoilValue } from 'recoil';
import { messagesAtom } from '@/store/atoms/userInput';

interface Props{
    open: boolean
    onClose: () => void
}
const AIChatComponent = ({open, onClose}:Props) => {
  const messages = useRecoilValue(messagesAtom)
  return (
    <div className={cn(
        "bottom-0 right-0 z-50 w-full max-w-[500px] p-1 xl:right-0",
        open ? "fixed" : "hidden",
      )}>
      <button onClick={onClose} className="mb-1 ms-auto block ">
        <XCircle size={30} className="rounded-full bg-background" />
      </button>
      <div className="flex h-[600px] flex-col rounded border bg-zinc-900 shadow-xl">
        <div className="mt-3 h-full overflow-y-auto px-3">
        { messages.length === 0 && (
            <div className="mx-8 flex h-full flex-col items-center justify-center gap-3 text-center">
              <Bot size={32} />
              <p className="text-lg font-medium">
                Send a message to start the AI chat!
              </p>
              <p>
                You can ask the chatbot any question about me and it will find
                the relevant information.
              </p>
            </div>
          )}
        </div>
        <ChatForm/>
      </div>
    </div>
  )
}

export default AIChatComponent
