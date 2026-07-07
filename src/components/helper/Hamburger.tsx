import React from 'react'
import { Menu } from 'lucide-react'

const Hamburger = ({onClick}:{onClick:()=>void}) => {
  return (
    <button onClick={onClick} className='grid h-10 w-10 place-items-center rounded-full border border-[hsl(var(--line))] bg-[hsl(var(--panel))]' type="button" aria-label="Open menu">
      <Menu size={18}/>
    </button>
  )
}

export default Hamburger
