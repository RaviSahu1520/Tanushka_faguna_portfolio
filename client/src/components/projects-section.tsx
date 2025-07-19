import React from 'react';
import { ExternalLink, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    title: 'Ecommerce Website',
    techStack: 'Website Designer',
    description: 'Full-stack ecommerce platform with React, Node.js, Express, and MongoDB',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
  },
  {
    title: 'Pokemon Website',
    techStack: 'React Js / Hooks / Debouncing',
    description: 'Interactive Pokemon search app with real-time filtering and API integration',
    image: 'https://images.unsplash.com/photo-1613771404721-1f92d799e49f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
  },
  {
    title: 'Tic Tac Toe Website',
    techStack: 'React Js / React-Dom / UseState',
    description: 'Classic game built with React hooks and state management',
    image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Projects</h2>
          <div className="flex items-center justify-center space-x-2">
            <p className="text-xl text-gray-600 dark:text-gray-400">Explore MERN Projects in My CV</p>
            <Download className="text-primary" size={20} />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
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
                    <Button 
                      variant="secondary"
                      className="w-full bg-white/20 backdrop-blur-sm text-white border-white/20 hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="mr-2" size={16} />
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{project.title}</h3>
                <p className="text-primary font-medium mb-3">{project.techStack}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
