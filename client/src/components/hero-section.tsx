import React from 'react';
import { Download, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { apiRequest } from '@/lib/queryClient';

export function HeroSection() {
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
    <section id="home" className="pt-20 pb-12 sm:pt-24 sm:pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Character */}
          <div className="order-1 lg:order-1 relative flex justify-center lg:justify-start">
            {/* Hello message bubble - positioned in left corner of banner, near image */}
            <div className="absolute top-4 -left-4 sm:-left-8 bg-white dark:bg-slate-800 px-4 py-2 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-bounce z-10">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Hello! 👋</p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 gradient-bg rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600" 
                alt="3D Professional Character" 
                className="relative hero-character rounded-2xl w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-96 object-cover animate-float" 
              />
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="order-2 lg:order-2 text-center lg:text-left px-2 sm:px-0">
            <div className="mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up leading-tight">
                <span className="gradient-text">Chandra Dev Pathak</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 font-medium animate-slide-up animation-delay-200 animate-typing">
                Frontend Developer and Graphics Designer
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 mb-6 sm:mb-8 animate-slide-up animation-delay-400">
              <a 
                href="https://linkedin.com/in/chandra-dev-pathak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="text-primary" size={18} />
              </a>
              <a 
                href="https://github.com/chandra-dev-pathak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <Github className="text-primary" size={18} />
              </a>
              <a 
                href="https://vercel.com/chandra-dev-pathak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <ExternalLink className="text-primary" size={18} />
              </a>
            </div>
            
            {/* Download CV Button */}
            <Button 
              onClick={downloadCV}
              className="btn-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg animate-slide-up animation-delay-600"
            >
              <Download className="mr-2" size={18} />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
