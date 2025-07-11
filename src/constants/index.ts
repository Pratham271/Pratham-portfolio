import { AIModel, css, chatpdf, docker, git, html, javascript, LinkShrink, mern, nextjs, postgres, prisma, recoil, Settle, tailwind, turborepo, typescript, WriteIt, Langchain, Llamaindex, Python , } from "@/assets";

  
  export const navLinks = [
    {
      id: "/",
      title: "About",
    },
    {
        id: "/Projects",
        title: "Projects"
    },
    {
      id: "/Work",
      title: "Work",
    },
    {
        id: "/Tech",
        title: "Tech"
    },
    {
      id: "/Contact",
      title: "Contact",
    },
  ];
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    {
      name: "Langchain",
      icon:Langchain
    },
    {
      name: "LlamaIndex",
      icon:Llamaindex,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Python",
      icon: Python,
    },
    // {
    //   name: "Recoil",
    //   icon: recoil,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    // {
    //   name: "Mern",
    //   icon: mern,
    // },
    {
      name: "Prisma",
      icon: prisma,
    },
    {
      name: "Postgres",
      icon: postgres,
    },
    {
      name: "Nextjs",
      icon: nextjs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Turborepo",
      icon: turborepo,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack AI Developer",
      company_name: "Leapx",
      date: "Currently Working Here", // You'll need to fill in the actual dates
      points: [
        "Developed an AI chatbot using Vercel AI to launch and manage Meta and Google marketing campaigns.",
        "Migrated the chatbot's core technology to LangGraph for enhanced capabilities.",
        "Implemented the chatbot with LlamaIndex to provide deep insights into Google and Meta campaigns.",
        "Created foundational libraries to streamline fetching and pushing campaign data, serving as the infrastructure for these products.",
        "Contributed to schema design and DevOps activities to support product development and deployment."
      ],
    },
    {
      title: "Web Developer",
      company_name: "ISRO",
      date: "October 2022 - April 2023",
      points: [
        "Developed a web-based dashboard for disaster management as there was no prior single platform for showcasingeverything under one hood. Leveraged skills in web development, GIS (Geographic Information System), and data visualization to create a comprehensive and user-friendly dashboard for disaster management purposes during my internship at ISRO.",
        "Integrated antecedent moisture condition and flood layers of pan India for visualization.",
        "Implemented a display of daily disaster-related news across India, highlighting the most prominent news through a heatmap, organized by state.",
        "Created a user-friendly interface allowing users to input points and generating the shortest path.",
        "Incorporated an alternate path functionality to navigate hindrances during flood times, ensuring continuity in navigation.",
        "Enabled users to input coordinates and buffer distance to obtain a list of the nearest hospitals.",
        "Integrated this tool to aid in disaster scenarios, facilitating quick access to medical facilities."
      ],
    },
    {
      title: "Project Intern",
      company_name: "Dreamsol",
      date: "July 2022 - September 2022",
      points: [
        "Developed a robust web application using Spring and Hibernate technologies to manage employee data efficiently",
        "Implemented secure user authentication, allowing administrators to log in and perform CRUD (Create, Read, Update,Delete) operations on the employee database",
        "Designed a user-friendly interface enabling administrators to add new employee records, update existing information, and delete outdated entries",
        "Utilized Spring Framework for dependency injection, facilitating a loosely coupled architecture, and Hibernate ORM(Object-Relational Mapping) for seamless interaction with the underlying database.",
      ],
    },
    // {
    //   title: "Intern",
    //   company_name: "VLCC",
    //   date: "Jun 2022 - July 2022",
    //   points: [
    //     "Managed the ERP of the company.",
    //     "Collaborated with several teams.",
    //     "Learned about the corporate culture.",
    //   ],
    // },
    
  ];
  
  
  
  const projects = [
    {
      name: "EnigmaAI",
      description:
        "An AI based chatbot built using langchainJs, GroqAI, Vercel ai/sdk and many more that can help you solve your problems, find relevant image and videos and even generate followup questions.",
        isDeployed: false,
        deployedLink: "",

      image: AIModel,
      github_link: "https://github.com/Pratham271/100xengineer/tree/initial-setup",
    },
    {
      name: "Settle",
      description:
        "Web-based platform that allows users to pay their friends and family in a secure fashion. With Settle, settle all your payments.",
      isDeployed: false,
      deployedLink: "",

      image: Settle,
      github_link: "https://github.com/Pratham271/Settle",
      
    },
    {
      name: "Chatvers",
      description: "An AI chatbot that quickly scan your documents, youtube links and even website links to deliver the answers you need, saving you valuable time and frustration.",
      isDeployed: true,
      deployedLink: "https://chatvers.com",
      image: chatpdf,
      github_link: "https://github.com/Pratham271/Chatpdf"
    },
    {
      name: "Write.it",
      description:
        "Web application that enables users to publish their thoughts and learnings as blogs and search other people blogs too.You can ask the inhouse AI to write a blog for you and it will get you title, content and even and image for you.",
        isDeployed: true,
        deployedLink: "https://write-with-ai.vercel.app/",

      image: WriteIt,
      github_link: "https://github.com/Pratham271/write.it",
    },
    {
        name: "Link Shrink",
        description:
          "Don't copy paste the large url just shrink it using Link-Shrink an in house link shortener built without using any external library.",
        isDeployed: true,
        deployedLink: "https://link-shrink-5el0.vercel.app/",
        image: LinkShrink,
        github_link: "https://github.com/Pratham271/Url-shortener-frontend",
        
      },
  ];
  
  export {  experiences, projects, technologies };
  // services, technologies,
