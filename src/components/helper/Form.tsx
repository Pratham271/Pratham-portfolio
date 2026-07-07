"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import emailjs from '@emailjs/browser'
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin
} from "@tabler/icons-react";
import { Textarea } from "../ui/textarea";
import Alert from "../ui/Alert";
import { cn } from "@/utils/cn";

export default function Form() {
   
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [body,setBody] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
      {
        from_name: name,
        to_name: 'Pratham',
        from_email: email,
        to_email: 'chauhanpratham22@gmail.com',
        message: body
      },
      process.env.NEXT_PUBLIC_KEY || ""
    )
    .then(() => {
      console.log("success") 
      setName('')
      setBody('')
      setEmail('')
      setShowAlert(true)
    },(error) => {
      console.log(error);
    })
    

  };
  
  return (
    <div className={`mx-auto w-full rounded-3xl border border-[hsl(var(--line))] bg-[hsl(var(--panel-strong))] p-4 shadow-xl shadow-black/10 md:p-8`}>
        {showAlert?<Alert name={name} setShowAlert={setShowAlert}/>:null}
      <div className={`${showAlert?"opacity-50":"opacity-100"}`}>
      <h2 className="text-center text-2xl font-bold text-[hsl(var(--foreground))]">
        Get In Touch
      </h2>
      
      <form className="my-2" onSubmit={handleSubmit}>
      <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input onChange={(e)=> setName(e.target.value)} id="name" placeholder="Enter your name" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input onChange={(e)=> setEmail(e.target.value)}  id="email" placeholder="Enter your email" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Textarea onChange={(e)=> setBody(e.target.value)}  id="message" placeholder="Enter your message"/>
        </LabelInputContainer>
        <button
          disabled={name.length===0 || email.length===0 || body.length===0}
          className="group/btn relative block h-11 w-full rounded-full bg-[hsl(var(--foreground))] font-medium text-[hsl(var(--background))] disabled:cursor-not-allowed disabled:opacity-45"
          type="submit"
        >
         Send 
          <BottomGradient />
        </button>

        <div className="my-8 h-px w-full bg-[hsl(var(--line))]" />

        <div className="flex flex-col space-y-4">
          <button
            className="group/btn relative flex h-11 w-full items-center justify-start gap-2 rounded-full border border-[hsl(var(--line))] px-4 font-medium text-[hsl(var(--foreground))] transition hover:border-[hsl(var(--accent))]"
            type="button"
          >
            <IconBrandGithub className="h-4 w-4" />
            <span className="text-sm">
              <a href="https://github.com/Pratham271" target="_blank">GitHub</a>
            </span>
            <BottomGradient />
          </button>
          <button
            className="group/btn relative flex h-11 w-full items-center justify-start gap-2 rounded-full border border-[hsl(var(--line))] px-4 font-medium text-[hsl(var(--foreground))] transition hover:border-[hsl(var(--accent))]"
            type="button"
          >
            <IconBrandX className="h-4 w-4" />
            <span className="text-sm">
              <a href="https://x.com/Pratham9474" target="_blank">X &#40;Formerly Twitter&#41;</a>
            </span>
            <BottomGradient />
          </button>
          <button
            className="group/btn relative flex h-11 w-full items-center justify-start gap-2 rounded-full border border-[hsl(var(--line))] px-4 font-medium text-[hsl(var(--foreground))] transition hover:border-[hsl(var(--accent))]"
            type="button"
          >
            <IconBrandLinkedin className="h-4 w-4" />
            <span className="text-sm">
              <a href="https://www.linkedin.com/in/pratham-chauhan-0812ba1a0/" target="_blank">LinkedIn</a>
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-6 -bottom-px block h-px bg-[hsl(var(--accent))] opacity-0 transition duration-300 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
