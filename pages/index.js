import Head from 'next/head'
import { BsFillMoonStarsFill, BsDownload, BsArrowRight } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'
import { HiLocationMarker, HiBriefcase, HiAcademicCap } from 'react-icons/hi'
import Image from 'next/image'
import calebImage from '../public/caleb.png'
import { useState, useEffect } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'contact'];
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
    "Frameworks & Libraries": [".NET", "MicroPython", "React", "Qt", "SwiftUI", "SQLite3"],
    "Development Tools": ["Visual Studio", "WSL", "GCC", "CMake", "SSH", "Tera Term", "iTerm", "SQLite"],
    "DevOps & Deployment": ["Git", "Gitlab", "Tortoise SVN", "Azure", "TFS", "DevOps", "Jira", "Jenkins", "Docker", "VirtualBox", "Vercel", "VSS"],
    "Embedded System Tools": ["Yocto", "Uboot", "Bitbake", "PSOC Creator",  "Win32 Disk Imager"]
  };

  return (
    <div className={"dark"}>
      <Head>
        <title>Caleb Voorhees</title>
        <meta name="description" content="Software Engineer Portfolio" />
        <link rel="icon" href="/logo.jpg" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-sm z-50 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-medium tracking-tight text-black dark:text-white">
              CV
            </h1>
            
            <div className="hidden md:flex space-x-10">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'experience', label: 'Experience' },
                { id: 'contact', label: 'Contact' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm tracking-wide transition-colors ${
                    activeSection === id 
                      ? 'text-black dark:text-white' 
                      : 'text-neutral-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <a 
                className="bg-black dark:bg-white text-white dark:text-black text-sm px-4 py-2 hover:opacity-80 transition-opacity flex items-center space-x-2" 
                href="Voorhees_Resume.pdf"
                rel="noreferrer"  
                target="_blank"                
              >
                <BsDownload className="text-xs" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="bg-white dark:bg-black transition-colors">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-neutral-400 text-sm tracking-widest uppercase mb-4">
                  Software Engineer
                </p>
                <h1 className="text-5xl md:text-6xl font-light text-black dark:text-white mb-6 tracking-tight">
                  Caleb<br />
                  <span className="font-semibold">Voorhees</span>
                </h1>
                
                <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed mb-8">
                  Software engineer at{' '}
                  <a
                    href="https://x-energy.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-black dark:text-white underline underline-offset-4 hover:opacity-70 transition-opacity"
                  >
                    X-energy
                  </a> with a strong desire to contribute to software solutions that help people. Actively developing, debugging, and testing nuclear safety
                  analysis software applications.
                </p>

                <div className="flex items-center space-x-6 text-sm text-neutral-400 mb-10">
                  <div className="flex items-center space-x-2">
                    <HiLocationMarker className="text-neutral-500" />
                    <span>Rockville, MD</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <HiBriefcase className="text-neutral-500" />
                    <span>X-energy</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => scrollToSection('experience')}
                    className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 text-sm hover:opacity-80 transition-opacity flex items-center space-x-2"
                  >
                    <span>View Work</span>
                    <BsArrowRight />
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="border border-neutral-300 dark:border-neutral-700 text-black dark:text-white px-6 py-3 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                  >
                    Contact
                  </button>
                </div>
              </div>

              <div className="hidden md:flex justify-center">
                <div className="relative w-80 h-80">
                  <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-900"></div>
                  <div className="absolute inset-4 bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                    <Image 
                      src={calebImage} 
                      alt="Caleb Voorhees" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 border-t border-neutral-200 dark:border-neutral-800">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-16">
              <div>
                <p className="text-neutral-400 text-sm tracking-widest uppercase mb-4">About</p>
                <h2 className="text-3xl font-light text-black dark:text-white tracking-tight">
                  Building software<br />
                  <span className="font-semibold">that matters</span>
                </h2>
              </div>
              
              <div className="md:col-span-2">
                <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed mb-8">
                  I take pride in developing safety critical software of many kinds. My contributions have been proven in the medical, defense, and nuclear industries over the course of my career.
                </p>
                
                <div className="grid grid-cols-3 gap-8 py-8 border-y border-neutral-200 dark:border-neutral-800 mb-12">
                  <div>
                    <div className="text-4xl font-light text-black dark:text-white">3+</div>
                    <div className="text-sm text-neutral-400 mt-1">Years</div>
                  </div>
                  <div>
                    <div className="text-4xl font-light text-black dark:text-white">30+</div>
                    <div className="text-sm text-neutral-400 mt-1">Technologies</div>
                  </div>
                  <div>
                    <div className="text-4xl font-light text-black dark:text-white">10+</div>
                    <div className="text-sm text-neutral-400 mt-1">Projects</div>
                  </div>
                </div>

                <div className="space-y-6">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="group">
                      <h4 className="text-xs tracking-widest uppercase text-neutral-400 mb-3">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, index) => (
                          <span 
                            key={index}
                            className="bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 px-3 py-1.5 text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-default"
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
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 bg-neutral-50 dark:bg-neutral-200">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-neutral-400 text-sm tracking-widest uppercase mb-4">Experience</p>
            <h2 className="text-3xl font-light text-black dark:text-black tracking-tight mb-16">
              Professional<br />
              <span className="font-semibold">journey</span>
            </h2>
            
            <div className="space-y-0">
              {/* Nuclear Software Engineer */}
              <div className="group border-t border-neutral-200 dark:border-neutral-800 py-10 hover:bg-white dark:hover:bg-white transition-colors px-6 -mx-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-medium text-black dark:text-black">
                        Nuclear Software Engineer
                      </h3>
                      <span className="text-xs tracking-wider uppercase bg-black dark:bg-black text-white dark:text-white px-2 py-0.5">
                        Current
                      </span>
                    </div>
                    <p className="text-neutral-400 text-sm mb-4">X-energy • Nov 2025 - Present</p>
                    <p className="text-neutral-500 dark:text-neutral-800 mb-4">
                    <span className="font-semibold">XSTERM: </span> C# desktop and console applications used in the safety analysis process of nuclear reactors and fuel
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["C#", ".NET 8", "Windows OS", "Python", "Simulation"].map((tech, i) => (
                        <span key={i} className="text-xs text-neutral-500 border border-neutral-200 dark:border-neutral-800 px-2 py-1">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <HiBriefcase className="text-2xl text-neutral-300 dark:text-neutral-700" />
                </div>
              </div>

              {/* Radar Software Engineer */}
              <div className="group border-t border-neutral-200 dark:border-neutral-800 py-10 hover:bg-white dark:hover:bg-white transition-colors px-6 -mx-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-black dark:text-black mb-2">
                      Radar Software Engineer
                    </h3>
                    <p className="text-neutral-400 text-sm mb-4">C Speed • Mar 2025 - Nov 2025</p>
                    <p className="text-neutral-500 dark:text-neutral-800 mb-4">
                    <span className="font-semibold">Light Wave Radar Data Processor:</span> C and C++ RTOS software focusing on high-performance signal processing and analysis
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-800 mb-4">
                          <span className="font-semibold">Web-based Air Situation Display:</span> Javascript development using React and DeckGL for real-time radar data visualization and user interface components
                        </p>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript", "React", "C++", "C","RTOS", "Signal Processing"].map((tech, i) => (
                        <span key={i} className="text-xs text-neutral-500 border border-neutral-200 dark:border-neutral-800 px-2 py-1">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <HiBriefcase className="text-2xl text-neutral-300 dark:text-neutral-700" />
                </div>
              </div>

              {/* Design Services */}
              <div className="group border-t border-neutral-200 dark:border-neutral-800 py-10 hover:bg-white dark:hover:bg-white transition-colors px-6 -mx-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-black dark:text-black mb-2">
                      Design Services Software Engineer
                    </h3>
                    <p className="text-neutral-400 text-sm mb-4">C Speed • Jun 2023 - Mar 2025</p>
                    <p className="text-neutral-500 dark:text-neutral-800 mb-4">
                          <span className="font-semibold">Patient Monitor Medical Device:</span> C and C++ development for a Yocto embedded system, ensuring reliable performance in critical healthcare environments
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-800 mb-4">
                          <span className="font-semibold">Medical Device Service Tool:</span> C# development using .NET framework to create a diagnostic and maintenance platform supporting various medical devices
                        </p>
                    <div className="flex flex-wrap gap-2">
                      {["C++", "C", "C#", ".NET Framework", "Yocto", "Embedded Systems"].map((tech, i) => (
                        <span key={i} className="text-xs text-neutral-500 border border-neutral-200 dark:border-neutral-800 px-2 py-1">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <HiBriefcase className="text-2xl text-neutral-300 dark:text-neutral-700" />
                </div>
              </div>

              {/* Student Programmer */}
              <div className="group border-t border-b border-neutral-200 dark:border-neutral-800 py-10 hover:bg-white dark:hover:bg-white transition-colors px-6 -mx-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-black dark:text-black mb-2">
                      Student Programmer
                    </h3>
                    <p className="text-neutral-400 text-sm mb-4">Seton Hill University • Jun 2022 - Jun 2023</p>
                    <p className="text-neutral-500 dark:text-neutral-800 mb-4">
                    <span className="font-semibold">SHIP Student/Faculty Portal:</span> Migration of a PHP web application from Symfony to Laravel framework, improving performance and maintainability
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["PHP", "Laravel", "Symfony", "Web Development"].map((tech, i) => (
                        <span key={i} className="text-xs text-neutral-500 border border-neutral-200 dark:border-neutral-800 px-2 py-1">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <HiAcademicCap className="text-2xl text-neutral-300 dark:text-neutral-700" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 border-t border-neutral-200 dark:border-neutral-800">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-neutral-400 text-sm tracking-widest uppercase mb-4">Contact</p>
              <h2 className="text-4xl md:text-5xl font-light text-black dark:text-white tracking-tight mb-6">
                Let&apos;s work<br />
                <span className="font-semibold">together</span>
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed mb-12">
                Im always interested in new opportunities and exciting projects.
              </p>
              
              <a 
                href="mailto:cvoorhees44@gmail.com"
                className="inline-flex items-center space-x-3 bg-black dark:bg-white text-white dark:text-black px-8 py-4 text-sm hover:opacity-80 transition-opacity mb-16"
              >
                <AiFillMail className="text-lg" />
                <span>cvoorhees44@gmail.com</span>
              </a>

              <div className="flex space-x-6">
                <a 
                  href="https://www.linkedin.com/in/caleb-voorhees/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-3xl text-neutral-300 dark:text-neutral-700 hover:text-black dark:hover:text-white transition-colors"
                >
                  <AiFillLinkedin />
                </a>
                <a 
                  href="https://github.com/cvoorhees15"
                  target="_blank"
                  rel="noreferrer"
                  className="text-3xl text-neutral-300 dark:text-neutral-700 hover:text-black dark:hover:text-white transition-colors"
                >
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}