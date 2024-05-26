import { Bot } from 'lucide-react'
import React, { useState } from 'react'
import AIChatComponent from '../AIChatComponent'

const AIChatButton = () => {
    const [openChat, setOpenChat] = useState(false)
  return (
    <>
      <button onClick={()=> setOpenChat(true)}>
        <Bot size={28}/>
      </button>
      <AIChatComponent open={openChat} onClose={()=> setOpenChat(false)}/>
    </>
  )
}

export default AIChatButton
