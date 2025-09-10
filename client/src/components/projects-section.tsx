import React from 'react';
import { ExternalLink, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    title: 'GroCart E-commerce Platform',
    techStack: 'HTML5 • CSS3 • JavaScript • Responsive Design',
    description: 'Modern e-commerce platform featuring intuitive user interface, responsive design, and seamless shopping experience with clean code architecture.',
    image: 'https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=SKHGjU04CDDZfEULQheYGuIgcteXQR8Mf5q3mjG0qos=',
    link: 'https://webdeveloper555.github.io/Growciti/',
  },
  {
    title: 'Bandhan Bank Project',
    techStack: 'HTML5 • CSS3 • JavaScript • Responsive Design',
    description: 'Professional banking interface clone featuring secure authentication, transaction management, and real-time data processing with modern React patterns.',
    image: 'data:image/jpeg;base64,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',
    link: 'https://webdeveloper555.github.io/Bandhan-Bank/',
  },
  {
    title: 'Spotify Project',
    techStack: 'HTML5 • CSS3 • JavaScript • Responsive Design',
    description: 'Classic strategic game implementation with intelligent game state management, winner detection, and responsive UI built with React best practices.',
    image: 'https://images.unsplash.com/photo-1613329671121-5d1cf551cc3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BvdGlmeXxlbnwwfHwwfHx8MA%3D%3D',
    link: 'https://webdeveloper555.github.io/Spotify-Playlists/',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 sm:py-16 bg-blue-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical expertise and creative problem-solving through carefully crafted web applications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 card-hover">
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex justify-center items-center bg-white/20 backdrop-blur-sm text-white border border-white/20 hover:bg-white/30 transition-colors rounded-md px-4 py-2 text-sm"
                      >
                        <ExternalLink className="mr-2" size={16} />
                        View Project
                      </a>
                    ) : (
                      <Button
                        variant="secondary"
                        disabled
                        className="w-full bg-white/10 backdrop-blur-sm text-white border-white/10 opacity-50 cursor-not-allowed"
                      >
                        <ExternalLink className="mr-2" size={16} />
                        View Project
                      </Button>
                    )}

                  </div>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{project.title}</h3>
                <p className="text-primary font-medium mb-2 sm:mb-3 text-sm sm:text-base">{project.techStack}</p>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
