"use client"
import React, { useState } from 'react'
import Button from './helper/Button'
import Hamburger from './helper/Hamburger';
import Link from 'next/link';
import { navLinks } from '@/constants';
import { Bot } from 'lucide-react';
import AIChatButton from './helper/AIChatButton';


const NavBar = () => {
  const [toggle,setToggle] = useState(false);
  
  return (
    <div className='z-50'>
        <div className='flex justify-between text-white '>
            <div className='hidden lg:flex px-12 pt-4 w-full items-center'>
                {
                  navLinks.map((link)=> (
                    <div className='lg:ml-4' key={link.id}><Link href={link.id}>{link.title}</Link></div>
                  ))
                }
            </div>

            <div className="lg:hidden flex flex-1 justify-start items-center w-full z-50">
              <Hamburger onClick={() => setToggle(!toggle)}/>
              <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-neutral-900  absolute top-10 left-0 lg:mx-4 my-2 w-full lg:w-96 z-50 rounded-xl`}>
                <ul className="list-none flex justify-center items-center text-center mx-auto flex-col gap-4 w-full hover:bg-wh">
                  {navLinks.map((link)=> (
                    <Link href={link.id} key={link.id}><li onClick={() => setToggle(!toggle)} className='cursor-pointer w-96 p-2 hover:bg-neutral-700'>{link.title}</li></Link>
                  ))}
                </ul>
              </div>
            </div>
            <div className='lg:px-12 px-8 pt-2.5 '>
                <div className='flex items-center '>
                <AIChatButton/>
                <Button/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar
