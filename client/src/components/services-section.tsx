import React from 'react';
import { Code, Palette, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Building responsive, high-performance web applications using modern frameworks like React.js, with clean code architecture and optimal user experience.',
  },
  {
    icon: Palette,
    title: 'Web Design',
    description: 'Creating visually appealing and user-friendly designs that balance aesthetics with functionality, ensuring consistent brand identity across platforms.',
  },
  {
    icon: Smartphone,
    title: 'UI/UX Design',
    description: 'Designing intuitive user interfaces and seamless user experiences through research-driven design principles and usability best practices.',
  },
];

export function ServicesSection() {
  return (
    <section id="about" className="py-12 sm:py-16 bg-cyan-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">What I Do</h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Specialized in creating modern, scalable web solutions with focus on performance and user experience
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 dark:border-gray-700 card-hover">
              <CardContent className="p-0">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg ${
                  index === 0 ? 'bg-blue-500' : 
                  index === 1 ? 'bg-pink-500' : 
                  'bg-purple-500'
                }`}>
                  <service.icon className="text-white drop-shadow-md" size={28} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-100">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>
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
