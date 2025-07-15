import Head from 'next/head'
import { BsFillMoonStarsFill, BsDownload, BsEye } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'
import { HiLocationMarker, HiCode, HiBriefcase, HiAcademicCap } from 'react-icons/hi'
import { FaReact, FaNodeJs, FaDocker, FaPython } from 'react-icons/fa'
import Image from 'next/image'
import calebImage from '../public/caleb.png'
import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  // Track active section for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    "Programming Languages": ["C++", "C#", "C", "Python", "Swift", "Javascript", "PHP", "Bash", "Powershell"],
    "Frameworks & Libraries": [".NET", "MicroPython", "React", "Qt", "SwiftUI"],
    "Development Tools": ["Visual Studio", "WSL", "GCC", "CMake", "SSH", "Tera Term", "iTerm"],
    "DevOps & Deployment": ["Git", "Gitlab", "Tortoise SVN", "Azure", "TFS", "DevOps", "Jira", "Jenkins", "Docker", "VirtualBox", "Vercel", "VSS"],
    "Embedded & System Tools": ["Uboot", "Bitbake", "PSOC Creator",  "Win32 Disk Imager"]
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Caleb Voorhees Portfolio</title>
        <meta name="description" content="Software Engineer Portfolio" />
        <link rel="icon" href="/caleb.png" />
      </Head>

      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Caleb Voorhees
            </h1>
            
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'experience', label: 'Experience' },
                { id: 'contact', label: 'Contact' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`transition-colors ${
                    activeSection === id 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <BsFillMoonStarsFill 
                onClick={() => setDarkMode(!darkMode)} 
                className="cursor-pointer text-xl text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" 
              />
              <a 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2" 
                href="Voorhees_Resume.pdf"
                rel="noreferrer"  
                target="_blank"                
              >
                <BsDownload className="text-sm" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="bg-white dark:bg-gray-900 transition-colors">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="relative mx-auto w-48 h-48 mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-blue-400 to-purple-500 rounded-full w-full h-full p-1">
                <div className="bg-white dark:bg-gray-900 rounded-full w-full h-full overflow-hidden">
                  <Image src={calebImage} alt="Caleb Voorhees" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Caleb Voorhees
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-light">
              Software Engineer | Active Secret Clearance
            </h2>

            <div className="flex items-center justify-center space-x-6 mb-8 text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <HiLocationMarker />
                <span>Syracuse NY</span>
              </div>
              <div className="flex items-center space-x-2">
                <HiBriefcase />
                <span>C Speed</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Software engineer at <a 
                href="https://www.cspeed.com/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors underline"
              >
                C Speed
              </a> with a strong desire to contribute to software solutions that help people. Actively developing, testing, debugging and maintaining software for industry leading <span className="text-purple-600 dark:text-purple-400 font-semibold">medical devices</span> and <span className="text-pink-600 dark:text-pink-400 font-semibold">radar surveillance systems</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => scrollToSection('experience')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <BsEye />
                <span>View My Work</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                  Building Software That Matters
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  In an era where many developers are going through the motions attempting to remain invisible in remote roles, I strive to build a strong connection with my team through collaboration and shared passion.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  I take pride in honing my craft daily and contributing to software that serves a greater purpose in the world around me.
                </p>
                
                <div className="flex space-x-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                    <div className="text-sm text-gray-500">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">30+</div>
                    <div className="text-sm text-gray-500">Technologies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">10+</div>
                    <div className="text-sm text-gray-500">Projects</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                      <HiCode className="mr-2 text-blue-600" />
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <span 
                          key={index}
                          className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800 dark:hover:to-purple-800 transition-all duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
              
              <div className="space-y-12">
                {/* Current Position - Radar Software Engineer */}
                <div className="relative flex items-start space-x-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <HiBriefcase className="text-white text-xl" />
                  </div>
                  <div className="flex-grow bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                        Radar Software Engineer
                      </h3>
                      <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                        Current
                      </span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                      C Speed • March 2025 - Present
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600 dark:text-gray-300">
                          <span className="font-semibold">Web-based Air Situation Display:</span> Javascript development using React for real-time radar data visualization and user interface components
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600 dark:text-gray-300">
                          <span className="font-semibold">Light Wave Radar Data Processor:</span> C and C++ development for Windows OS focusing on high-performance signal processing and analysis
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript", "React", "C++", "C", "Windows OS", "Radar Systems", "Signal Processing"].map((tech, index) => (
                        <span key={index} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm hover:bg-green-200 dark:hover:bg-green-800 transition-colors duration-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Design Services Software Engineer */}
                <div className="relative flex items-start space-x-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <HiBriefcase className="text-white text-xl" />
                  </div>
                  <div className="flex-grow bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Design Services Software Engineer
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">
                      C Speed • June 2023 - March 2025
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600 dark:text-gray-300">
                          <span className="font-semibold">Patient Monitor Medical Device:</span> C and C++ development for a Yocto embedded system, ensuring reliable performance in critical healthcare environments
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600 dark:text-gray-300">
                          <span className="font-semibold">Medical Device Service Tool:</span> C# development using .NET framework for diagnostic and maintenance applications
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["C++", "C", "C#", ".NET", "Yocto", "Embedded Systems", "Medical Devices"].map((tech, index) => (
                        <span key={index} className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors duration-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Student Programmer */}
                <div className="relative flex items-start space-x-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-600 to-red-600 rounded-full flex items-center justify-center">
                    <HiAcademicCap className="text-white text-xl" />
                  </div>
                  <div className="flex-grow bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Student Programmer
                    </h3>
                    <p className="text-pink-600 dark:text-pink-400 font-medium mb-4">
                      Seton Hill University • June 2022 - June 2023
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600 dark:text-gray-300">
                          <span className="font-semibold">SHIP Student/Faculty Portal:</span> Migration of a PHP web application from Symfony to Laravel framework, improving performance and maintainability
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["PHP", "Laravel", "Symfony", "Web Development", "Framework Migration"].map((tech, index) => (
                        <span key={index} className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-3 py-1 rounded-full text-sm hover:bg-pink-200 dark:hover:bg-pink-800 transition-colors duration-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Lets Work Together
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              Im always interested in new opportunities and exciting projects. Lets discuss how we can create something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-12">
              <a 
                href="mailto:cvoorhees44@gmail.com"
                className="flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <AiFillMail className="text-xl" />
                <span>Send Email</span>
              </a>
            </div>

            <div className="flex justify-center space-x-8">
              <a 
                href="https://www.linkedin.com/in/caleb-voorhees/"
                target="_blank"
                rel="noreferrer"
                className="text-4xl text-gray-400 hover:text-blue-600 transition-colors"
              >
                <AiFillLinkedin />
              </a>
              <a 
                href="https://github.com/cvoorhees15"
                target="_blank"
                rel="noreferrer"
                className="text-4xl text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
              >
                <AiFillGithub />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p> Caleb Voorhees | Software Engineer | Active Secret Clearance</p>
        </div>
      </footer>
    </div>
  );
}