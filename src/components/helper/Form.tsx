'use client';
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
    <div className={`w-96 md:w-[600px] mx-auto rounded-none md:rounded-2xl p-4 md:px-8 shadow-input bg-black`}>
        {showAlert?<Alert name={name} setShowAlert={setShowAlert}/>:null}
      <div className={`${showAlert?"opacity-50":"opacity-100"}`}>
      <h2 className="font-bold text-2xl text-neutral-200 text-center">
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
          className="bg-gradient-to-br relative group/btn  from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
         Send 
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium  bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="button"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-300" />
            <span className="text-neutral-300 text-sm">
              <a href="https://github.com/Pratham271" target="_blank">GitHub</a>
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium  bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="button"
          >
            <IconBrandX className="h-4 w-4 text-neutral-300" />
            <span className="text-neutral-300 text-sm">
              <a href="https://x.com/Pratham9474" target="_blank">X &#40;Formerly Twitter&#41;</a>
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium  bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="button"
          >
            <IconBrandLinkedin className="h-4 w-4 text-neutral-300" />
            <span className="text-neutral-300 text-sm">
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
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
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
