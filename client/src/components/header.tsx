import React, { useState } from 'react';
import { Code, Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from './theme-provider';
import { Button } from '@/components/ui/button';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
              <Code className="text-white text-lg" size={20} />
            </div>
            <span className="text-xl font-semibold gradient-text">Tanushka</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
            >
              About Me
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
            >
              Projects
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-white px-6 py-2 rounded-full font-medium"
            >
              Contact Me
            </Button>
          </div>
          
          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Menu size={20} />
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300 text-left"
              >
                About Me
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300 text-left"
              >
                Projects
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-white px-6 py-2 rounded-full font-medium w-fit"
              >
                Contact Me
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
