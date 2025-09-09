import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PackageCard from "@/components/PackageCard";
import ContactForm from "@/components/ContactForm";
import StickyActions from "@/components/StickyActions";
import farmhouseHero from "@/assets/farmhouse-hero.jpg";
import outdoorDining from "@/assets/outdoor-dining.jpg";
import swimmingPool from "@/assets/swimming-pool.jpg";
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
  Clock
} from "lucide-react";

const Index = () => {
  const phoneNumber = "+91-9876543210";
  const whatsappNumber = "919876543210";
  const whatsappMessage = "Hi! I'm interested in booking your farmhouse. Please share availability and pricing.";
  
  const amenities = [
    { icon: Waves, title: "Private Pool", description: "Crystal clear swimming pool" },
    { icon: TreePine, title: "Large Lawn", description: "Perfect for outdoor activities" },
    { icon: Gamepad2, title: "Indoor Games", description: "Carrom, chess & more" },
    { icon: ChefHat, title: "BBQ Setup", description: "Outdoor cooking facilities" },
    { icon: Zap, title: "Power Backup", description: "Uninterrupted electricity" },
    { icon: Car, title: "Free Parking", description: "Ample parking space" },
    { icon: Wifi, title: "High-Speed WiFi", description: "Stay connected" },
    { icon: Users, title: "Event Space", description: "Perfect for celebrations" },
  ];

  const packages = [
    {
      title: "Overnight Stay",
      description: "Complete farmhouse experience",
      price: "₹8,000/night",
      duration: "24 hours",
      capacity: "Up to 20 guests",
      features: [
        "Private pool access",
        "All rooms & amenities",
        "BBQ & cooking facilities", 
        "Indoor & outdoor games",
        "Free parking & WiFi",
        "Caretaker assistance"
      ],
      image: farmhouseHero,
      imageAlt: "Beautiful farmhouse with pool and lawn",
      popular: true,
      ctaText: "Book Stay"
    },
    {
      title: "Day Picnic",
      description: "Fun-filled day experience",
      price: "₹500/person",
      duration: "10 AM - 6 PM",
      capacity: "10-30 guests",
      features: [
        "Pool & lawn access",
        "Indoor games room",
        "BBQ setup available",
        "Music till 6 PM",
        "Parking included",
        "Basic refreshments"
      ],
      image: swimmingPool,
      imageAlt: "Swimming pool and outdoor area",
      ctaText: "Book Picnic"
    }
  ];

  const handleBookNow = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={farmhouseHero}
            alt="Beautiful farmhouse with swimming pool and lush gardens"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            <Star className="h-4 w-4 mr-1" fill="currentColor" />
            Premium Farmhouse Experience
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Serenity Farmhouse
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl font-normal opacity-90">
              Delhi NCR
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Experience luxury farmhouse stays and day picnics with private pool, 
            large lawn, and premium amenities. Perfect for families and groups.
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
              className="w-full sm:w-auto bg-white/10 text-white border-white/30 hover:bg-white/20"
              asChild
            >
              <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}>
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
            
            <Button 
              size="hero" 
              variant="ghost"
              className="w-full sm:w-auto text-white hover:bg-white/10"
              asChild
            >
              <a href={`tel:${phoneNumber}`}>
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">20 Guests</div>
              <div className="text-sm opacity-75">Maximum Capacity</div>
            </div>
            <div>
              <div className="text-2xl font-bold">3PM/11AM</div>
              <div className="text-sm opacity-75">Check-in/Check-out</div>
            </div>
            <div>
              <div className="text-2xl font-bold">10-30</div>
              <div className="text-sm opacity-75">Day Picnic Range</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Pets allowed on request</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Music till 10pm</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Delhi NCR Location</span>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Experience</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you want a relaxing overnight stay or an exciting day picnic, 
              we have the perfect package for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <PackageCard
                key={index}
                {...pkg}
                onBook={handleBookNow}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Premium Amenities</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for a perfect getaway
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => {
              const IconComponent = amenity.icon;
              return (
                <Card key={index} className="card-farmhouse text-center">
                  <CardContent className="p-6">
                    <IconComponent className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">{amenity.title}</h3>
                    <p className="text-sm text-muted-foreground">{amenity.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h2>
            <p className="text-xl text-muted-foreground">
              See what makes our farmhouse special
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-card group">
              <img
                src={farmhouseHero}
                alt="Farmhouse exterior view"
                className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-card group">
              <img
                src={swimmingPool}
                alt="Swimming pool area"
                className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-card group">
              <img
                src={outdoorDining}
                alt="Outdoor dining space"
                className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Book Your Experience</h2>
            <p className="text-xl text-muted-foreground">
              Get instant pricing and availability. We respond within 2 hours!
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <Phone className="h-8 w-8 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Call Us</h4>
              <a href={`tel:${phoneNumber}`} className="hover:underline">
                +91-9876-543-210
              </a>
            </div>
            
            <div>
              <MessageCircle className="h-8 w-8 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">WhatsApp</h4>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quick Response
              </a>
            </div>
            
            <div>
              <MapPin className="h-8 w-8 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Location</h4>
              <a 
                href="https://maps.google.com/?q=28.4595,77.0266"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Delhi NCR
              </a>
            </div>
          </div>
        </div>
      </section>

      <StickyActions />
    </div>
  );
};

export default Index;
