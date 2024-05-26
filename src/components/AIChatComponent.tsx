import { cn } from '@/utils/cn'
import React from 'react'
import { Bot, SendHorizonal, Trash, XCircle } from "lucide-react";

interface Props{
    open: boolean
    onClose: () => void
}
const AIChatComponent = ({open, onClose}:Props) => {
  return (
    <div className={cn(
        "bottom-0 right-0 z-50 w-full max-w-[500px] p-1 xl:right-36",
        open ? "fixed" : "hidden",
      )}>
      <button onClick={onClose} className="mb-1 ms-auto block ">
        <XCircle size={30} className="rounded-full bg-background" />
      </button>
      <div className="flex h-[600px] flex-col rounded border bg-background shadow-xl">

      </div>
    </div>
  )
}

export default AIChatComponent
