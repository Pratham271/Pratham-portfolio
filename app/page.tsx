
import { cn } from "@/utils/cn";
import { BackgroundBeams } from '@/components/ui/background-beams';
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <NavBar/>
      <div className='lg:mt-32'>
        <div className="h-[70rem] lg:h-[40rem] w-full rounded-md  relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-3xl mx-auto pb-40 lg:pb-4 px-4">
        <h1 className="relative z-10 text-3xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          About Me
        </h1>
        <p className='mx-auto my-6 text-center text-sm md:text-lg text-white'>Computer Science Graduate & Web Developer</p>
        <div className='mt-12 text-center mx-auto flex justify-center bg-gradient-to-b from-teal-500 rounded-full h-72 w-72 md:w-96 md:h-96 overflow-hidden'>
        <img src="avatar.png" alt="" className='flex flex-col w-full h-full object-cover'/>
        </div>
        <p className="text-neutral-500 mt-8 text-lg max-w-3xl mx-auto my-8  text-center relative z-10">
          Greetings! I'm Pratham Chauhan, a recent B-Tech graduate from The NorthCap University in Computer Science, specializing in crafting captivating and user-centric digital experiences. My journey in web development is driven by a fervent passion for innovation and a dedication to excellence. I bring to the table a comprehensive skill set encompassing both front-end and back-end development, empowering me to transform concepts into seamless and dynamic web solutions. Currently interested in AI and an active contributor in Open Source
        </p>
      </div>
      <BackgroundBeams />
    </div>
    </div>
        
    </div>
  );
}
