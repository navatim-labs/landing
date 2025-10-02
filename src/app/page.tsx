'use client'

import React, { useState } from 'react';
import { Github, Twitter, Linkedin, Moon, Sun, Menu, X } from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-[#0a192f]' : 'bg-white'
    }`}>
      {/* Navbar */}
      <nav className={`backdrop-blur-sm border-b transition-colors duration-300 ${
        isDarkMode ? 'bg-[#0a192f]/90 border-[#233554]' : 'bg-white/90 border-blue-100'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="#" className={`font-bold text-xl transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-[#0a192f]'
              }`}>
                <span className="navatim-text">NAVATIM</span><span className={`font-light text-sm ml-1 tracking-widest ${
                  isDarkMode ? 'text-[#64ffda]' : 'text-blue-500'
                }`}>/labs</span>
              </a>
              <div className="hidden md:flex items-center ml-10">
                <a href="#" className={`px-3 py-2 text-sm tracking-wider font-medium transition-all duration-300 relative group ${
                  isDarkMode ? 'text-gray-300 hover:text-[#64ffda]' : 'text-gray-600 hover:text-blue-500'
                }`}>
                  <span className="relative z-10">ABOUT</span>
                  <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    isDarkMode ? 'bg-[#64ffda]' : 'bg-blue-500'
                  }`}></span>
                </a>
                <a href="/products" className={`px-3 py-2 text-sm tracking-wider font-medium transition-all duration-300 relative group ${
                  isDarkMode ? 'text-gray-300 hover:text-[#64ffda]' : 'text-gray-600 hover:text-blue-500'
                }`}>
                  <span className="relative z-10">PRODUCTS</span>
                  <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    isDarkMode ? 'bg-[#64ffda]' : 'bg-blue-500'
                  }`}></span>
                </a>
                <a href="#" className={`px-3 py-2 text-sm tracking-wider font-medium transition-all duration-300 relative group ${
                  isDarkMode ? 'text-gray-300 hover:text-[#64ffda]' : 'text-gray-600 hover:text-blue-500'
                }`}>
                  <span className="relative z-10">RESEARCH</span>
                  <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    isDarkMode ? 'bg-[#64ffda]' : 'bg-blue-500'
                  }`}></span>
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-[#64ffda] hover:bg-[#233554]/50' 
                    : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
                }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <div className="hidden md:flex items-center space-x-6">
                <a href="https://github.com" className={`transition-all duration-300 hover:scale-110 ${
                  isDarkMode ? 'text-gray-400 hover:text-[#64ffda]' : 'text-gray-600 hover:text-blue-500'
                }`}>
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" className={`transition-all duration-300 hover:scale-110 ${
                  isDarkMode ? 'text-gray-400 hover:text-[#64ffda]' : 'text-gray-600 hover:text-blue-500'
                }`}>
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" className={`transition-all duration-300 hover:scale-110 ${
                  isDarkMode ? 'text-gray-400 hover:text-[#64ffda]' : 'text-gray-600 hover:text-blue-500'
                }`}>
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg transition-colors duration-300"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className={`h-6 w-6 ${
                    isDarkMode ? 'text-white' : 'text-[#0a192f]'
                  }`} />
                ) : (
                  <Menu className={`h-6 w-6 ${
                    isDarkMode ? 'text-white' : 'text-[#0a192f]'
                  }`} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className={`px-4 pt-2 pb-4 space-y-2 ${
            isDarkMode ? 'bg-[#0a192f]' : 'bg-white'
          }`}>
            <a href="#" className={`block px-3 py-2 text-sm tracking-wider font-medium rounded-md transition-colors duration-300 ${
              isDarkMode 
                ? 'text-gray-300 hover:text-[#64ffda] hover:bg-[#233554]/50' 
                : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
            }`}>
              ABOUT
            </a>
            <a href="/products" className={`block px-3 py-2 text-sm tracking-wider font-medium rounded-md transition-colors duration-300 ${
              isDarkMode 
                ? 'text-gray-300 hover:text-[#64ffda] hover:bg-[#233554]/50' 
                : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
            }`}>
              PRODUCTS
            </a>
            <a href="#" className={`block px-3 py-2 text-sm tracking-wider font-medium rounded-md transition-colors duration-300 ${
              isDarkMode 
                ? 'text-gray-300 hover:text-[#64ffda] hover:bg-[#233554]/50' 
                : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
            }`}>
              RESEARCH
            </a>
            <div className="flex space-x-6 px-3 py-2">
              <a href="https://github.com/navatim-labs" className={`transition-all duration-300 hover:scale-110 ${
                isDarkMode ? 'text-gray-400 hover:text-[#64ffda]' : 'text-gray-600 hover:text-blue-500'
              }`}>
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className={`transition-all duration-300 hover:scale-110 ${
                isDarkMode ? 'text-gray-400 hover:text-[#64ffda]' : 'text-gray-600 hover:text-blue-500'
              }`}>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className={`transition-all duration-300 hover:scale-110 ${
                isDarkMode ? 'text-gray-400 hover:text-[#64ffda]' : 'text-gray-600 hover:text-blue-500'
              }`}>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose lg:prose-lg">
          <h1 className={`text-4xl font-bold mb-8 tracking-tight transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-[#0a192f]'
          }`}>
            Giving businesses leverage with our research on private programmable cryptographic computation systems and safety systems for fintech.
          </h1>
          {/* there should be a line seperator here */}
          <div
            className={`my-8 h-[2px] w-full bg-gradient-to-r ${
              isDarkMode
                ? 'from-transparent via-[#233554] to-transparent'
                : 'from-transparent via-blue-200 to-transparent'
            }`}
          />
          {/* Problems Section */}
          <section className="mb-12">
            <h2 className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-[#0a192f]'
            }`}>
              Problems We Are Currently Focusing On
            </h2>
            <div className="grid gap-6">
              <div className={`rounded-xl border p-5 transition-colors duration-300 ${
                isDarkMode ? 'border-[#233554] bg-[#0b1e3a]' : 'border-blue-100 bg-blue-50'
              }`}>
                <h3 className={`text-lg font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-[#0a192f]'
                }`}>
                  1. Transaction Safety and Web3 App Interactions
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Blockchain’s permissionless and decentralized nature attracts bad-faith actors who exploit vulnerabilities. At the
                  same time, there is no safety net for human mistakes. Our product protects people from losing funds due to errors
                  such as sending to the wrong address, incorrect interactions with apps, or falling victim to malicious actors.
                </p>
              </div>
              <div className={`rounded-xl border p-5 transition-colors duration-300 ${
                isDarkMode ? 'border-[#233554] bg-[#0b1e3a]' : 'border-blue-100 bg-blue-50'
              }`}>
                <h3 className={`text-lg font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-[#0a192f]'
                }`}>
                  2. Private Interaction with Intelligent Systems
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  We are developing solutions that enable private interactions with large language models such as ChatGPT and Claude.
                  Our research focuses on preserving the privacy of user instructions and data when interacting with existing AI systems.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-12">
            <h2 className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-[#0a192f]'
            }`}>
              Team Experience
            </h2>
            <div className="grid gap-6">
              <div className={`rounded-xl border p-5 transition-colors duration-300 ${
                isDarkMode ? 'border-[#233554] bg-[#0b1e3a]' : 'border-blue-100 bg-blue-50'
              }`}>
                <h3 className={`text-lg font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-[#0a192f]'
                }`}>
                  Taha Farouq
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Cybersecurity professional with 5 years of experience across government, health, finance, law enforcement, and
                  education sectors. Currently a Cyber Security Technical Trainer at OffSec. Specializes in security research and has
                  uncovered multiple CVEs verified by NIST MITRE, including CVE-2023-43959, CVE-2023-43960, and CVE-2023-52275.
                </p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Holds multiple certifications: eJPT, OSCP, OSWP, OSDA, OSWA, OSCC, CRTO, and OSEP. In his free time, he researches
                  open-source software, contributes to projects, and participates in CTFs and attackathons.
                </p>
                <div className="mt-4 flex items-center space-x-6">
                  <a
                    href="https://github.com/tahaafarooq/tahaafarooq"
                    aria-label="Taha Farouq GitHub"
                    className={`transition-all duration-300 hover:scale-110 ${
                      isDarkMode ? 'text-gray-400 hover:text-[#64ffda]' : 'text-gray-600 hover:text-blue-500'
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://x.com/tahaafarooq"
                    aria-label="Taha Farouq X (Twitter)"
                    className={`transition-all duration-300 hover:scale-110 ${
                      isDarkMode ? 'text-gray-400 hover:text-[#64ffda]' : 'text-gray-600 hover:text-blue-500'
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tahaa-f-0784901b9/"
                    aria-label="Taha Farouq LinkedIn"
                    className={`transition-all duration-300 hover:scale-110 ${
                      isDarkMode ? 'text-gray-400 hover:text-[#64ffda]' : 'text-gray-600 hover:text-blue-500'
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className={`rounded-xl border p-5 transition-colors duration-300 ${
                isDarkMode ? 'border-[#233554] bg-[#0b1e3a]' : 'border-blue-100 bg-blue-50'
              }`}>
                <h3 className={`text-lg font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-[#0a192f]'
                }`}>
                  Mrisho Lukamba
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Blockchain protocol engineer with 4 years of experience building blockchain products and core systems. Previously
                  worked at NEOM and trained in programmable cryptography engineering. Currently pursuing an undergraduate degree in
                  Mathematics.
                </p>
                <div className="mt-4 flex items-center space-x-6">
                  <a
                    href="https://github.com/MrishoLukamba"
                    aria-label="Mrisho Lukamba GitHub"
                    className={`transition-all duration-300 hover:scale-110 ${
                      isDarkMode ? 'text-gray-400 hover:text-[#64ffda]' : 'text-gray-600 hover:text-blue-500'
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://x.com/MrishoLukamba"
                    aria-label="Mrisho Lukamba X (Twitter)"
                    className={`transition-all duration-300 hover:scale-110 ${
                      isDarkMode ? 'text-gray-400 hover:text-[#64ffda]' : 'text-gray-600 hover:text-blue-500'
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="www.linkedin.com/in/mrisho-lukamba"
                    aria-label="Mrisho Lukamba LinkedIn"
                    className={`transition-all duration-300 hover:scale-110 ${
                      isDarkMode ? 'text-gray-400 hover:text-[#64ffda]' : 'text-gray-600 hover:text-blue-500'
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;

