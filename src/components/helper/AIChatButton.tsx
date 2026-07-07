'use client';
import { Bot } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import AIChatComponent from '../AIChatComponent'

const AIChatButton = () => {
    const [openChat, setOpenChat] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

  return (
    <>
      <button className="grid h-10 w-10 place-items-center rounded-full border border-[hsl(var(--line))] bg-[hsl(var(--panel)/0.86)] transition hover:border-[hsl(var(--accent))]" onClick={()=> setOpenChat(true)} aria-label="Open AI chat" type="button">
        <Bot size={28}/>
      </button>
      {mounted && createPortal(
        <AIChatComponent open={openChat} onClose={()=> setOpenChat(false)}/>,
        document.body
      )}
    </>
  )
}

export default AIChatButton
