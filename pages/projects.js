import { BsFillMoonStarsFill } from 'react-icons/bs'
import { useState } from "react";

export default function Projects() {

  const [darkMode, setDarkMode] = useState(false);

  return(
  <div className={darkMode ? "dark" : ""}>
    <div className="bg-white dark:bg-gray-900">
          <nav className ="py-10 mb-12 flex justify-between dark:bg-gray-900">
            <h1 className="text-2xl font-bold px-10 text-gray-800 dark:text-gray-500">Developer Portfolio</h1>
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
                  rel="noreferrer"
                  target="_blank"
                  >
                    Resume
                  </a>
                </li>
              </ul>
          </nav>
      <div className="text-center bg-white dark:bg-gray-900 min-h-screen">
        <h3 className="text-3xl py-10 text-blue-600 font-bold">Personal Projects</h3>
        <div>
          <a className="text-xl p-1 px-10 pt-6 mx-auto max-w-5xl dark:text-gray-500 hover:text-blue-600 font-bold"
          href="https://github.com/cvoorhees15/2D-Platformer"
          rel="noreferrer"
          target="_blank">
            2D Platformer Game
          </a>
          <p className="text-md py-2 mx-auto px-24 max-w-5xl text-gray-800 dark:text-gray-600 leading-8">
            Personal research project that helped me learn the basics of the Unity engine and scripting in C# without any prior experience. This project was used to fulfill my requirements for the Seton Hill computer science major capstone. Total development time was around 80 hours.
          </p>
       </div>
        <div>
        <a className="text-xl p-1 px-10 pt-6 mx-auto max-w-5xl dark:text-gray-500 hover:text-blue-600 font-bold"
          href="https://github.com/cvoorhees15/caleb-dev-portfolio"
          rel="noreferrer"
          target="_blank">
            This Website
          </a>
          <p className="text-md py-2 mx-auto max-w-5xl px-24 text-gray-800 dark:text-gray-600 leading-8">
            Personal portfolio created using Next.js and Tailwind CSS to have a central location for all information, profiles, and documents related to my career. Completed in spare time, unrelated to school or classes
          </p>
        </div>
        <div>
        <a className="text-xl p-1 px-10 pt-6 mx-auto max-w-5xl dark:text-gray-500 hover:text-blue-600 font-bold"
          href="https://github.com/cvoorhees15/Library_Application"
          rel="noreferrer"
          target="_blank"> 
            Library Desktop Application
          </a>
          <p className="text-md py-2 mx-auto max-w-5xl px-24 text-gray-800 dark:text-gray-600 leading-8">
           Basic text based desktop application created in Java using Eclipse WindowBuilder. Fulfilled a final project requirement for a data structures class. Provides basic library functionality such as borrow, return, view books, sort books by criteria, etc.
          </p>
        </div>
        <div>
        <a className="text-xl p-1 px-10 pt-6 mx-auto max-w-5xl dark:text-gray-500 hover:text-blue-600 font-bold"
          href="https://github.com/cvoorhees15/Seton-Hill-Welcome-App"
          rel="noreferrer"
          target="_blank">
            The Seton Hill Welcome App
          </a>
          <p className="text-md py-2 mx-auto max-w-5xl px-24 text-gray-800 dark:text-gray-600 leading-8">
           Mobile iOS application available on the Apple app store. Developed using Swift and SwiftUI. Created to fulfill the requirements for the Seton Hill Honors Program capstone. App is to be used by incoming Seton Hill University students to help guide them to different resources on campus such as places to eat, workout, study, sleep, etc.
          </p>
        </div>
      </div>
    </div>
</div>
)
}