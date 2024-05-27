'use client';
import { cn } from '@/utils/cn'
import React, { useEffect, useState } from 'react'
import { Bot, XCircle } from "lucide-react";
import ChatForm from './helper/ChatForm';
import { useRecoilState, useRecoilValue } from 'recoil';
import { loadingAtom, userInputAtom } from '@/store/atoms/userInput';
import { type AI } from "../actions/chat";
import { readStreamableValue, useActions } from "ai/rsc";
import { Message, Props } from '@/type';


const AIChatComponent = ({open, onClose}:Props) => {
  const {myAction} = useActions<typeof AI>();
  const [loading, setLoading] = useRecoilState(loadingAtom)
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useRecoilState(userInputAtom)
  useEffect(()=> {
   
    if(messages.length>1){
     window.scrollTo({
       top: document.documentElement.scrollHeight,
       behavior: 'smooth' // You can use 'auto' for an instant scroll
     })
    }
   
 },[messages])

  const handleFormSubmit = async() => {
    const messageToSend = input.trim();
    setInput('')
    if(!messageToSend) return;
    await handleUserMessageSubmission(messageToSend)
  }

  const handleUserMessageSubmission = async(userMessage:string) => {
    if(!userMessage) return;
    const newMessageId = Date.now()
    const newMessage = {
      id: newMessageId, 
      type: 'userMessage',
      userMessage: userMessage,
      content: '',
      isStreaming: true
    };
    setMessages(prevMessage =>[...prevMessage, newMessage]);
  }

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
