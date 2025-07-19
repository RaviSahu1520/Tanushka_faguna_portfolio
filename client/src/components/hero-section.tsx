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
    <section id="home" className="pt-24 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Character */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 gradient-bg rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600" 
                alt="3D Professional Character" 
                className="relative hero-character rounded-2xl w-80 h-96 object-cover animate-float" 
              />
              
              {/* Hello message bubble */}
              <div className="absolute -top-4 left-8 bg-white dark:bg-slate-800 px-4 py-2 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-bounce">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Hello! 👋</p>
              </div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 animate-slide-up">
                <span className="gradient-text">Chandra Dev Pathak</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 font-medium animate-slide-up animation-delay-200">
                Full Stack / MERN Developer
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start space-x-4 mb-8 animate-slide-up animation-delay-400">
              <a 
                href="https://linkedin.com/in/chandra-dev-pathak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="text-primary text-lg" size={20} />
              </a>
              <a 
                href="https://github.com/chandra-dev-pathak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <Github className="text-primary text-lg" size={20} />
              </a>
              <a 
                href="https://vercel.com/chandra-dev-pathak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <ExternalLink className="text-primary text-lg" size={20} />
              </a>
            </div>
            
            {/* Download CV Button */}
            <Button 
              onClick={downloadCV}
              className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-lg animate-slide-up animation-delay-600"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
