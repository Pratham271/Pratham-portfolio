"use client";
import React from 'react'
import { HoverBorderGradient } from '../ui/hover-border-gradient'

const Button = () => {
    const openPDF = () => {
        const pdfUrl = '/resume.pdf'; 
        window.open(pdfUrl, '_blank');
      };
    
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black text-white flex items-center space-x-2"
        onClick={openPDF}
      >
        <span> Resume</span>
        
      </HoverBorderGradient>
    </div>
  )
}

export default Button
