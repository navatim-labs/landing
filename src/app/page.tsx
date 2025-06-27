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
                <a href="#" className={`px-3 py-2 text-sm tracking-wider font-medium transition-all duration-300 relative group ${
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
            <a href="#" className={`block px-3 py-2 text-sm tracking-wider font-medium rounded-md transition-colors duration-300 ${
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
            Giving African businesses the 0-1 unparalled leverage
          </h1>
          <p className={`mb-6 leading-relaxed transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            At NAVATIM labs, we are an innovation lab dedicated to building transformative tools, systems,
            and protocols that empower African businesses to achieve unparalleled growth. 
            Through cutting-edge technologies like blockchain, programmable cryptographic proving systems, and intelligence systems,
            we create solutions that address the most pressing challenges and opportunities in the African market.
          </p>
          <p className={`mb-6 leading-relaxed transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
          Our research-driven approach identifies the most pressing challenges and opportunities in the African market.
          We build forward-thinking, scalable solutions that are tailored to the unique needs of African businesses.
          Whether you are a startup looking to disrupt or an established enterprise aiming to optimize and experiment, our tools, systems, and protocols are designed to give you the 0-1 leverage you need to thrive in a competitive and rapidly evolving landscape
          </p>
          <p className={`leading-relaxed transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            We are aiming to build a lab that experiment new technology, adapt fast and integrate to our lives and giving us the leverage to accelerate.
            But our scope is on business integration and new experimental technologies that emerge from our research and product driven system
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;

