"use client";
import React from 'react'

const Button = () => {
    const openPDF = () => {
        const pdfUrl = process.env.NEXT_PUBLIC_RESUME_URL; 
        window.open(pdfUrl, '_blank');
      };
    
  return (
    <div className="hidden justify-center text-center sm:flex">
      <button
        className="rounded-full bg-[hsl(var(--foreground))] px-4 py-2 text-sm font-medium text-[hsl(var(--background))] transition hover:opacity-85"
        onClick={openPDF}
        type="button"
      >
        Resume
      </button>
    </div>
  )
}

export default Button
