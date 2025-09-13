import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import NavBar from '@/components/NavBar';
import PackageCard from '@/components/PackageCard';
import ContactForm from '@/components/ContactForm';
import StickyActions from '@/components/StickyActions';
import BackToTop from '@/components/BackToTop';
import GoogleReviews from '@/components/GoogleReviews';
import Footer from '@/components/Footer';
import HouseLoader from '@/components/HouseLoader';
import farmhouseHero from '@/assets/farmhouse-hero.jpg';
import outdoorDining from '@/assets/outdoor-dining.jpg';
import swimmingPool from '@/assets/swimming-pool.jpg';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Star, 
  Users, 
  Car, 
  Wifi, 
  Gamepad2, 
  ChefHat, 
  Waves, 
  TreePine, 
  Zap,
  CheckCircle,
  Calendar,
  Clock,
  PlayCircle
} from 'lucide-react';

// Import data
import siteData from '../../content/site.json';
import packagesData from '../../content/packages.json';
import amenitiesData from '../../content/amenities.json';
import galleryData from '../../content/gallery.json';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleBookNow = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center">
        <div className="text-center">
          <HouseLoader size="lg" className="mb-4" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-primary mb-2">{siteData.name}</h2>
            <p className="text-muted-foreground">Loading your premium experience...</p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-offset">
        <div className="absolute inset-0">
          <img
            src={farmhouseHero}
            alt="Khushi Farm - Premium farmhouse with swimming pool and lush gardens"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              <Star className="h-4 w-4 mr-1" fill="currentColor" />
              {siteData.tagline}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {siteData.name}
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl font-normal opacity-90">
                {siteData.location.city}, {siteData.location.state}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
              {siteData.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="hero" 
                variant="hero"
                onClick={handleBookNow}
                className="w-full sm:w-auto"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Your Stay
              </Button>
              
              <Button 
                size="hero" 
                variant="outline"
                className="w-full sm:w-auto bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
                asChild
              >
                <a href={siteData.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-subtle-gradient scroll-offset">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Experience</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated packages designed for unforgettable moments
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packagesData.map((pkg, index) => (
              <PackageCard
                key={pkg.id}
                {...pkg}
                image={
                  pkg.id === 'overnight-stay' ? farmhouseHero :
                  pkg.id === 'day-picnic' ? swimmingPool :
                  outdoorDining
                }
                onBook={handleBookNow}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20 scroll-offset">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Premium Amenities</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for a perfect getaway
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenitiesData.map((amenity, index) => {
              const IconMap = { Waves, TreePine, Gamepad2, ChefHat, Zap, Car, Wifi, Users };
              const IconComponent = IconMap[amenity.icon as keyof typeof IconMap];
              
              return (
                <motion.div
                  key={amenity.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="card-premium text-center group">
                    <CardContent className="p-6">
                      <IconComponent className="h-12 w-12 mx-auto mb-4 text-primary transition-all duration-300 group-hover:scale-110" />
                      <h3 className="font-semibold mb-2">{amenity.title}</h3>
                      <p className="text-sm text-muted-foreground">{amenity.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="py-20 bg-warm-gradient scroll-offset">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h2>
            <p className="text-xl text-muted-foreground">
              See what makes our farmhouse special
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryData.slice(0, 6).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl shadow-card group cursor-pointer"
              >
                <img
                  src={
                    item.category === 'pool' ? swimmingPool :
                    item.category === 'dining' ? outdoorDining :
                    farmhouseHero
                  }
                  alt={item.alt}
                  className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section id="reviews" className="py-20 scroll-offset">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Guests Say</h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from real people
            </p>
          </motion.div>
          
          <GoogleReviews />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-subtle-gradient scroll-offset">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Book Your Experience</h2>
            <p className="text-xl text-muted-foreground">
              Get instant pricing and availability. We respond within 2 hours!
            </p>
          </motion.div>
          
          <ContactForm />
        </div>
      </section>

      <Footer />
      <StickyActions />
      <BackToTop />
    </div>
  );
};

export default Index;