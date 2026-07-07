'use client';
import { cn } from '@/utils/cn'
import React, { useEffect, useRef, useState } from 'react'
import { Bot, XCircle } from "lucide-react";
import ChatForm from './helper/ChatForm';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { loadingAtom, userInputAtom } from '@/store/atoms/userInput';
import { type AI } from "../actions/chat";
import { readStreamableValue, useActions } from "ai/rsc";
import { Message, Props, StreamMessage } from '@/type';
import LlmResponseComponent from './LlmResponseComponent';


const AIChatComponent = ({open, onClose}:Props) => {
  const {myAction} = useActions<typeof AI>();
  const setLoading = useSetRecoilState(loadingAtom)
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useRecoilState(userInputAtom)
  const scrollRef = useRef<HTMLDivElement | null>(null);
  useEffect(()=> {
   
   
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
   
 },[messages])

  const handleFormSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
      type: 'user',
      userMessage: userMessage,
      content: '',
      isStreaming: true
    };
    setMessages(prevMessage =>[...prevMessage, newMessage]);
    let lastAppendResponse = "";
    try {
      setLoading(true)
      const streamableValue = await myAction(userMessage,messages);
      for await(const message of readStreamableValue(streamableValue)){
        const typedMessage = message as StreamMessage
        setMessages((prevMessages) => {
          const messagesCopy = [...prevMessages]
          const messageIndex = messagesCopy.findIndex(msg => msg.id === newMessageId)
          if(messageIndex!==-1){
            const currentMessage = messagesCopy[messageIndex]
            if(typedMessage.llmResponse && typedMessage.llmResponse !== lastAppendResponse){
              currentMessage.content += typedMessage.llmResponse;
              lastAppendResponse = typedMessage.llmResponse
            }
            if(typedMessage.llmResponseEnd){
              currentMessage.isStreaming = false;
            }
          }
          return messagesCopy
        })
        
      }
    } catch (error) {
      console.error("Error streaming data for user message: ",error)
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className={cn(
        "bottom-3 right-3 z-50 w-[calc(100vw-1.5rem)] max-w-[500px]",
        open ? "fixed" : "hidden",
      )}>
      <button onClick={onClose} className="mb-2 ms-auto block text-[hsl(var(--foreground))]" aria-label="Close chat" type="button">
        <XCircle size={30} className="rounded-full bg-[hsl(var(--panel-strong))]" />
      </button>
      <div className="flex h-[min(620px,calc(100dvh-7rem))] min-h-[360px] flex-col rounded-3xl border border-[hsl(var(--line))] bg-[hsl(var(--panel-strong))] shadow-2xl shadow-black/20">
        <div className="mb-3 mt-3 h-full overflow-y-auto px-3" ref={scrollRef}>
          {messages && messages.length>0 && messages.map((message,index)=> (
            <div key={`message-${index}`} className='mt-4'>
              {message.type === 'user' && (
              <div key={`userMessage-${index}`} className="mb-3 ms-5 flex items-center justify-end">
                <p className="rounded-2xl bg-[hsl(var(--accent-soft))] px-3 py-2 text-[hsl(var(--foreground))]">{message.userMessage}</p>
            </div>
              )}
            <div key={`llm-${index}`} className="mt-3">
              <LlmResponseComponent content={message.content}/>
            </div>
            </div>
          ))}
        { messages.length === 0 && (
            <div className="mx-8 flex h-full flex-col items-center justify-center gap-3 text-center">
              <Bot size={32} />
              <p className="text-lg font-medium text-[hsl(var(--foreground))]">
                Send a message to start the AI chat!
              </p>
              <p className="text-[hsl(var(--muted))]">
                You can ask the chatbot any question about me and it will find
                the relevant information.
              </p>
            </div>
          )}
        </div>
        <ChatForm setMessages={setMessages} handleFormSubmit={handleFormSubmit} open={open}/>
      </div>
    </div>
  )
}

export default AIChatComponent
