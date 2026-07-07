"use client"
import React, { useState } from 'react'
import Button from './helper/Button'
import Hamburger from './helper/Hamburger';
import Link from 'next/link';
import { navLinks } from '@/constants';
import AIChatButton from './helper/AIChatButton';
import ThemeToggle from './helper/ThemeToggle';


const NavBar = () => {
  const [toggle,setToggle] = useState(false);
  
  return (
    <div className='sticky top-0 z-50 px-3 py-3 lg:px-8'>
        <div className='mx-auto flex max-w-7xl justify-between rounded-full border border-[hsl(var(--line))] bg-[hsl(var(--panel)/0.82)] px-3 py-2 text-[hsl(var(--foreground))] shadow-sm backdrop-blur-xl'>
            <div className='hidden w-full items-center gap-1 lg:flex'>
                {
                  navLinks.map((link)=> (
                    <Link className='rounded-full px-4 py-2 text-sm text-[hsl(var(--muted))] transition hover:bg-[hsl(var(--accent-soft))] hover:text-[hsl(var(--foreground))]' href={link.id} key={link.id}>{link.title}</Link>
                  ))
                }
            </div>

            <div className="z-50 flex w-full flex-1 items-center justify-start lg:hidden">
              <Hamburger onClick={() => setToggle(!toggle)}/>
              <div className={`${!toggle ? 'hidden' : 'flex'} absolute left-3 right-3 top-16 z-50 rounded-2xl border border-[hsl(var(--line))] bg-[hsl(var(--panel-strong))] p-4 shadow-xl`}>
                <ul className="mx-auto flex w-full list-none flex-col items-stretch gap-2 text-center">
                  {navLinks.map((link)=> (
                    <Link href={link.id} key={link.id}><li onClick={() => setToggle(!toggle)} className='cursor-pointer rounded-full p-3 text-sm text-[hsl(var(--muted))] hover:bg-[hsl(var(--accent-soft))] hover:text-[hsl(var(--foreground))]'>{link.title}</li></Link>
                  ))}
                </ul>
              </div>
            </div>
            <div>
                <div className='flex items-center gap-2'>
                <ThemeToggle/>
                <AIChatButton/>
                <Button/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar
