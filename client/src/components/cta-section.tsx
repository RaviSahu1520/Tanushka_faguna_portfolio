import React from 'react';
import { Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-orange-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gray-800 dark:text-gray-100">Let's Work Together</h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          Have a project in mind? I'd love to discuss how we can bring your vision to life with modern web solutions.
        </p>
        <Button 
  onClick={() => window.open('https://www.linkedin.com/in/tanushka-faguna-485045346', '_blank')}
  className="btn-primary text-white px-8 py-3 sm:px-12 sm:py-4 rounded-full font-semibold text-base sm:text-lg"
>
  <Rocket className="mr-2" size={18} />
  Contact Me
</Button>

      </div>
    </section>
  );
}
