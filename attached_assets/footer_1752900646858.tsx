export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-16 h-16 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">TF</span>
            </div>
            <p className="text-slate-400">Creating beautiful digital experiences</p>
          </div>

          <div className="flex justify-center space-x-8 mb-8">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-primary transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-primary transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-primary transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="hover:text-primary transition-colors duration-200"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-primary transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <p className="text-sm text-slate-400">
              © 2023 Tanushka Faguna. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
