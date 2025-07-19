import React from 'react';
import { Code, Palette, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Code,
    title: 'Web Developer',
    description: 'Vision to Virtual Reality: Expert Web Development Services Tailored for Seamless Functionality and Engaging User Experiences.',
  },
  {
    icon: Palette,
    title: 'Web Designer',
    description: 'Translating Ideas into Artistry: Premier Web Design Solutions Focused on Elegance, Functionality, and Brand Resonance.',
  },
  {
    icon: Smartphone,
    title: 'Interfaces UI/UX',
    description: 'Immersive Journeys: Exceptional UI/UX Design Elevating User Experiences with Intuitive Interfaces and Dynamic Engagement.',
  },
];

export function ServicesSection() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Transforming ideas into digital experiences</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 card-hover">
              <CardContent className="p-0">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="text-white text-2xl" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                <Button 
                  variant="outline"
                  className="w-full bg-primary/5 dark:bg-primary/10 text-primary border-primary/20 hover:bg-primary/10 dark:hover:bg-primary/20 py-3 rounded-xl font-semibold transition-colors"
                >
                  Know More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
