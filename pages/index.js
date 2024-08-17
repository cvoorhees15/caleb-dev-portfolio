import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub, AiFillMail} from 'react-icons/ai'
import Image from 'next/image'
import calebImage from '../public/caleb.png'
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Caleb Voorhees Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/caleb.png" />
      </Head>

      <main className="bg-white px-10 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className ="py-10 mb-12 flex justify-between">
            <h1 className="text-2xl font-bold dark:text-gray-500">Developer Portfolio</h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill 
                  onClick={() => setDarkMode(!darkMode)} 
                  className="cursor-pointer text-2xl dark:text-gray-500" 
                  />
                </li>
                <li>
                  <a 
                  className="bg-gradient-to-r from-blue-800 to bg-blue-500 text-white px-4 py-2 rounded-md ml-8" 
                  href="Voorhees_Resume.pdf"
                  rel="noreferrer"  
                  target="_blank"                
                  >
                    Resume
                  </a>
                </li>
              </ul>
          </nav>
          <div className="mx-auto bg-gradient-to-bl from-blue-700 rounded-full w-48 h-48 mt-10 overflow-hidden">
            <Image src={calebImage} />
          </div>
          <div className="text-center p-5">
            <h2 className="text-5xl py-2 text-blue-600 font-medium">Caleb Voorhees</h2>
            <h3 className="text-2xl py-2 dark:text-gray-500">Software Engineer </h3>
            <p className="text-md py-3 px-6 max-w-5xl mx-auto leading-8 text-gray-800 dark:text-gray-500">
              Software engineer at C Speed with a strong desire to contribute to software solutions that help people. Actively developing, testing, and maintaining embedded software for industry leading medical equipment.            </p>
            <p className="text-md py-3 mx-auto leading-8 font-bold text-gray-800 dark:text-gray-500">
              Skills: C++, C, C#, Python, Swift, PHP, SQL, Bash, Qt, .NET, XAML, Markdown, HTML, Tailwind CSS, SwiftUI, Visual Studio, Xcode, VSCode, Git, Jira, Azure DevOps, Jenkins, Vercel, VirtualBox
            </p>
          </div>
          <div class= "flex flex-row justify-center">
            <a 
            className="text-6xl flex gap-16 py-3 px-5 text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" 
            href="https://www.linkedin.com/in/caleb-voorhees/"
            rel="noreferrer"
            target="_blank">
              <AiFillLinkedin />
             </a>
            <a 
            className="text-6xl flex gap-16 py-3 px-5 text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" 
            href="https://github.com/cvoorhees15" 
            rel="noreferrer"
            target="_blank">
              <AiFillGithub />
            </a>           
          </div>
        </section>

        
      </main>
	
	   <footer className="bg-gray-600 text-white py-4 text-center">
        <p className="text-md">
          Contact: <a href="mailto:cvoorhees44@gmail.com" className="underline">cvoorhees44@gmail.com</a>
        </p>
      </footer>
    </div>
  )
}
