import { BsFillMoonStarsFill } from 'react-icons/bs'
import { useState } from "react";

export default function Contact (){

  const [darkMode, setDarkMode] = useState(false);

    return (
    <div className={darkMode ? "dark" : ""}>
      <div className="text-center min-h-screen dark:bg-gray-900">
          <nav className ="py-10 mb-12 flex justify-between">
            <h1 className="text-2xl px-10 font-bold text-gray-800 dark:text-gray-500">Developer Portfolio</h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill 
                  onClick={() => setDarkMode(!darkMode)} 
                  className="cursor-pointer text-2xl dark:text-gray-500" />
                </li>
                <li className="pr-10">
                  <a 
                  className="bg-gradient-to-r from-blue-800 to bg-blue-500 text-white px-4 py-2 rounded-md ml-8" 
                  href="Voorhees_Resume.pdf"
                  target="_blank"
                  >
                    Resume
                  </a>
                </li>
              </ul>
          </nav>       
          <div className="dark:bg-gray-900">
            <h1 className="text-5xl p-10 text-blue-600 font-bold">Contact Info</h1>
           <h2 className= "">
             <ul>
                <li className= "text-lg py-3 px-36 text-gray-800 dark:text-gray-600 leading-8 mx-auto max-w-5xl"><a>Email: cvoorhees44@gmail.com</a></li>
                <li className= "text-lg py-3 px-36 text-gray-800 dark:text-gray-600 leading-8 mx-auto max-w-5xl">Phone: (315)-744-5877</li>
                <li className= "text-lg py-3 px-36 text-gray-800 dark:text-gray-600 leading-8 mx-auto max-w-5xl">Discord: Ca1eb#8726</li>
                <li className= "text-lg py-3 px-36 text-gray-800 dark:text-gray-600 leading-8 mx-auto max-w-5xl">LinkedIn: Caleb Voorhees</li>
              </ul>
            </h2>
          </div>
      </div>
    </div>
    
    
)
}