'use client'

import { useEffect, useState } from "react";
import Image from "next/image";

type Project = {
  id: number
  image: string,
  name: string,
  technologies: string[],
  date_uploaded: Date,
  link_to_project: string,
  link_to_blog: string,
}

type Props = {
  project: Project
}

export default function Home() {
    
  const [projects, setProjects] = useState<Project[]>([{ //DB should only return 5 at max. 
      id: 1,
      name: "rust-body-simulation",
      image: "/placeholder.png",
      technologies: ["Rust", "WebAssembly"],
      date_uploaded: new Date("2024-01-15"),
      link_to_project: "https://github.com",
      link_to_blog: "/blog/rust-body-simulation",
    },
    {
      id: 2,
      name: "portfolio-website",
      image: "/placeholder.png",
      technologies: ["Next.js", "Tailwind"],
      date_uploaded: new Date("2024-03-01"),
      link_to_project: "https://github.com",
      link_to_blog: "/blog/portfolio",
    },
  ]);

  // header section. 
  return (
    <div className="flex pt-14 min-h-screen justify-center items-center">
      <div className=" flex flex-col items-center mt-50 ">
        <h1 className=" text-6xl">ABHINAV MUDUGU</h1> 
        <p> Fullstack Software Developer </p>
      </div>
    </div >
  );

}