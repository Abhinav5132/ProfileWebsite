'use client'
import Image from "next/image";
import {Project} from "@/types/projects";
import { Projects } from "@/components/Projects";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap/all";
import { start } from "repl";

export default function Home() {
    
  const projects = [{ //DB should only return 5 at max. 
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
  ];

  useGSAP(() => {
    const heroSplit = new SplitText(".title", {type:'chars, words'});
    const subheaderSplit = new SplitText(".subheader", {type:'lines'});

    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));
    
    gsap.from(heroSplit.chars, {
      opacity: 0,
      yPercent: 100,
      duration: 0.8,
      ease: 'sine.out',
      stagger: 0.04
    });
    
    gsap.from(subheaderSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1,
    });

  }, []);

  return (
  // header section. 
  <>
    <div className="flex pt-14 min-h-screen justify-center items-center">
      <div className=" flex flex-col items-center mt-50 ">
        <h1 className=" text-6xl title">ABHINAV MUDUGU</h1> 
        <p className="subheader"> Fullstack Software Developer </p>
      </div>
    </div >
    <section id="projects">
      <Projects projects={projects} />
    </section>
  </>
  );
}
