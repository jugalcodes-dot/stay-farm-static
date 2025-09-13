import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Home as HomeIcon,
} from 'lucide-react';
import siteData from '../../content/site.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Packages', href: '#packages' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <HomeIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{siteData.name}</h3>
                <p className="text-sm opacity-90">{siteData.tagline}</p>
              </div>
            </div>
            <p className="text-sm opacity-75 leading-relaxed">
              {siteData.description}
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <span className="font-semibold">Capacity:</span>
              <span>Up to {siteData.capacity.overnight} guests</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleScrollToSection(link.href)}
                  className="block text-sm opacity-75 hover:opacity-100 transition-opacity text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <a
                href={`tel:${siteData.contact.phone}`}
                className="flex items-center space-x-3 text-sm opacity-75 hover:opacity-100 transition-opacity"
              >
                <Phone className="h-4 w-4" />
                <span>{siteData.contact.phone}</span>
              </a>
              <a
                href={siteData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm opacity-75 hover:opacity-100 transition-opacity"
              >
                <Phone className="h-4 w-4" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={`mailto:${siteData.contact.email}`}
                className="flex items-center space-x-3 text-sm opacity-75 hover:opacity-100 transition-opacity"
              >
                <Mail className="h-4 w-4" />
                <span>{siteData.contact.email}</span>
              </a>
              <a
                href={siteData.location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-sm opacity-75 hover:opacity-100 transition-opacity"
              >
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{siteData.location.address}</span>
              </a>
            </div>
          </motion.div>

          {/* Social & Policies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-3">
              {siteData.social.instagram && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a
                    href={siteData.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
              )}
              {siteData.social.facebook && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a
                    href={siteData.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
              )}
            </div>

            <div className="space-y-2 text-xs opacity-75">
              <div>Check-in: {siteData.timing.checkIn}</div>
              <div>Check-out: {siteData.timing.checkOut}</div>
              <div>Music till: {siteData.timing.musicTill}</div>
              <div>{siteData.policies.pets}</div>
            </div>

            <div className="space-y-1 text-xs opacity-60">
              <div>Terms & Conditions</div>
              <div>Privacy Policy</div>
            </div>
          </motion.div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm opacity-75"
        >
          <div className="text-center md:text-left">
            © {currentYear} {siteData.name}. All rights reserved.
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-xs">
            <div>{siteData.business.gst}</div>
            <div>{siteData.business.cin}</div>
          </div>
        </motion.div>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LodgingBusiness',
            name: siteData.name,
            description: siteData.description,
            url: 'https://khushifarm.in',
            telephone: siteData.contact.phone,
            email: siteData.contact.email,
            address: {
              '@type': 'PostalAddress',
              addressLocality: siteData.location.city,
              addressRegion: siteData.location.state,
              postalCode: '391220',
              addressCountry: 'IN',
              streetAddress: siteData.location.address,
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: siteData.location.coordinates.lat,
              longitude: siteData.location.coordinates.lng,
            },
            openingHours: [
              'Mo-Su 00:00-23:59'
            ],
            amenityFeature: [
              { '@type': 'LocationFeatureSpecification', name: 'Swimming Pool' },
              { '@type': 'LocationFeatureSpecification', name: 'Free WiFi' },
              { '@type': 'LocationFeatureSpecification', name: 'Free Parking' },
              { '@type': 'LocationFeatureSpecification', name: 'BBQ Facilities' },
            ],
            makesOffer: [
              {
                '@type': 'Offer',
                name: 'Overnight Stay',
                price: '12000',
                priceCurrency: 'INR',
              },
              {
                '@type': 'Offer',
                name: 'Day Picnic',
                price: '600',
                priceCurrency: 'INR',
              },
            ],
          }),
        }}
      />
    </footer>
  );
};

export default Footer;