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
        "bottom-0 right-0 z-50 w-full max-w-[500px] p-1 xl:right-0",
        open ? "fixed" : "hidden",
      )}>
      <button onClick={onClose} className="mb-1 ms-auto block ">
        <XCircle size={30} className="rounded-full bg-background" />
      </button>
      <div className="flex h-[600px] flex-col rounded border bg-zinc-900 shadow-xl">
        <div className="mt-3 h-full overflow-y-auto px-3 mb-6" ref={scrollRef}>
          {messages && messages.length>0 && messages.map((message,index)=> (
            <div key={`message-${index}`} className='mt-4'>
              {message.type === 'user' && (
              <div key={`userMessage-${index}`} className="mb-3 flex items-center ms-5 justify-end text-black">
                <p className="bg-gray-100 py-2 px-3 rounded-md">{message.userMessage}</p>
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
        <ChatForm setMessages={setMessages} handleFormSubmit={handleFormSubmit} open={open}/>
      </div>
    </div>
  )
}

export default AIChatComponent
