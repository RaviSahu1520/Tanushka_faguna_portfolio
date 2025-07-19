import React from 'react';
import { Code, Instagram, Linkedin, Github, Download } from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = async () => {
    try {
      const response = await apiRequest('GET', '/api/download-cv');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Chandra_Dev_Pathak_CV.txt';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Failed to download CV:', error);
    }
  };

  return (
    <footer id="contact" className="gradient-bg text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Code className="text-white text-lg" size={20} />
              </div>
              <span className="text-2xl font-semibold">Chandra Dev Pathak</span>
            </div>
            <p className="text-white/80">Full Stack MERN Developer crafting exceptional digital experiences.</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-white/80 hover:text-white transition-colors text-left"
              >
                About Me
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block text-white/80 hover:text-white transition-colors text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-white/80 hover:text-white transition-colors text-left"
              >
                Contact Me
              </button>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-white/80 mb-4">chandra.dev.pathak@example.com</p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/chandra-dev-pathak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/chandra-dev-pathak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Github size={20} />
              </a>
              <button 
                onClick={downloadCV}
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Download size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80">&copy; 2024 All Rights Reserved By Chandra Dev Pathak</p>
        </div>
      </div>
    </footer>
  );
}
