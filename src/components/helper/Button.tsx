'use client';
import React from 'react'
import { HoverBorderGradient } from '../ui/hover-border-gradient'

const Button = () => {
    const openPDF = () => {
        const pdfUrl = process.env.NEXT_PUBLIC_RESUME_URL; 
        window.open(pdfUrl, '_blank');
      };
    
  return (
    <div className="flex justify-center text-center pl-3">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className=" bg-transparent  text-white flex items-center space-x-2"
        onClick={openPDF}
      >
        <span> Resume</span>
        
      </HoverBorderGradient>
    </div>
  )
}

export default Button
