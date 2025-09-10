import React, { useState } from 'react';
import { Download, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import resumePdf from '../../../attached_assets/Tanushka_faguna_resume_.pdf';

export function HeroSection() {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadCV = () => {
    setIsDownloading(true);
    
    // Create download link for local PDF
    const a = document.createElement('a');
    a.href = resumePdf;
    a.download = 'Tanushka_Faguna_Resume.pdf';
    a.style.display = 'none';
    
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // Reset loading state after short delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 1000);
  };

  return (
    <section id="home" className="pt-20 pb-12 sm:pt-24 sm:pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Professional Photo */}
          <div className="order-1 lg:order-1 relative flex justify-center lg:justify-start">            
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-3xl opacity-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse"></div>
              <div className="relative w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 animate-float">
                <img 
                  src="/attached_assets/WhatsApp Image 2025-09-09 at 18.12.51_785cca74.jpg" 
                  alt="Tanushka Faguna - Frontend Developer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="order-2 lg:order-2 text-center lg:text-left px-2 sm:px-0">
            <div className="mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up leading-tight">
                <span className="gradient-text">Tanushka Faguna</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 font-medium animate-slide-up animation-delay-200">
                Frontend Developer & UI/UX Designer
              </p>
              <p className="text-base sm:text-lg text-gray-500 dark:text-gray-500 mt-3 leading-relaxed">
                Passionate about creating elegant, user-friendly web experiences with modern technologies and clean, responsive design.
              </p>
            </div>
            
            {/* Social Icons - UPDATED LINKS */}
            <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 mb-6 sm:mb-8 animate-slide-up animation-delay-400">
              <a 
                href="https://www.linkedin.com/in/tanushka-faguna-485045346" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="text-primary" size={18} />
              </a>
              <a 
                href="https://github.com/webdeveloper555" // IMPORTANT: Update to correct GitHub
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <Github className="text-primary" size={18} />
              </a>
            </div>
            
            {/* Download CV Button - ENHANCED VERSION */}
            <Button 
              onClick={downloadCV}
              disabled={isDownloading} // IMPORTANT: Prevent multiple clicks
              className="btn-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg animate-slide-up animation-delay-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className={`mr-2 ${isDownloading ? 'animate-spin' : ''}`} size={18} />
              {isDownloading ? 'Downloading...' : 'Download CV'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
