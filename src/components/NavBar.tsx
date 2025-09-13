import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Home as HomeIcon, Phone, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'packages', label: 'Packages', href: '#packages' },
  { id: 'amenities', label: 'Amenities', href: '#amenities' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'reviews', label: 'Reviews', href: '#reviews' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const phoneNumber = '+91 99989 07887';
  const whatsappUrl = 'https://wa.me/919998907887';

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll spy
  useEffect(() => {
    const observers = new Map();

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    };

    const options = {
      threshold: 0.4,
      rootMargin: '-20% 0px -60% 0px',
    };

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(element);
        observers.set(id, observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'navbar-blur shadow-soft'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center space-x-2"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center">
                <HomeIcon className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-foreground">
                  Khushi Farm
                </h1>
                <p className="text-xs text-muted-foreground hidden md:block">
                  Premium Experience
                </p>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium transition-colors',
                    activeSection === item.id
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  )}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-primary rounded-full"
                      style={{ transform: 'translateX(-50%)' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex items-center space-x-3"
          >
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href={`tel:${phoneNumber}`}>
                <Phone className="h-4 w-4 mr-2" />
                Call
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </motion.div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <HomeIcon className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="font-bold">Khushi Farm</h2>
                      <p className="text-xs text-muted-foreground">Premium Experience</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <nav className="space-y-4">
                  {navItems.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        'w-full justify-start text-left',
                        activeSection === item.id && 'bg-accent text-accent-foreground'
                      )}
                    >
                      {item.label}
                    </Button>
                  ))}
                </nav>

                <div className="mt-8 space-y-3">
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="w-full"
                  >
                    <a href={`tel:${phoneNumber}`}>
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button size="lg" asChild className="w-full">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default NavBar;