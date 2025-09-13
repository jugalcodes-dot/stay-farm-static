import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Clock, Star, Phone } from "lucide-react";

interface PackageCardProps {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  duration: string;
  capacity: string;
  features: string[];
  image: string;
  imageAlt: string;
  popular?: boolean;
  ctaText?: string;
  timing?: string;
  onBook?: () => void;
}

const PackageCard = ({
  title,
  description,
  price,
  originalPrice,
  duration,
  capacity,
  features,
  image,
  imageAlt,
  popular = false,
  ctaText = "Book Now",
  timing,
  onBook
}: PackageCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Cursor glow effect
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card 
        ref={cardRef}
        className="overflow-hidden card-premium relative group cursor-pointer"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
                      rgba(var(--glow-rgb), 0.03), transparent 40%)`
        }}
      >
        {popular && (
          <motion.div
            initial={{ scale: 0, rotate: -12 }}
            animate={{ scale: 1, rotate: -12 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
          >
            <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground shadow-hero">
              <Star className="h-3 w-3 mr-1" fill="currentColor" />
              Most Popular
            </Badge>
          </motion.div>
        )}
        
        <div className="relative overflow-hidden">
          <motion.img
            src={image}
            alt={imageAlt}
            className="w-full h-72 object-cover transition-all duration-500 group-hover:scale-110"
            loading="lazy"
            whileHover={{ scale: 1.05 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold mb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              {title}
            </motion.h3>
            <motion.p 
              className="text-sm opacity-90 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {description}
            </motion.p>
          </div>
        </div>

        <CardContent className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <div className="text-3xl font-bold text-primary">{price}</div>
                {originalPrice && (
                  <div className="text-lg text-muted-foreground line-through">{originalPrice}</div>
                )}
              </div>
              {timing && (
                <div className="text-sm text-muted-foreground">{timing}</div>
              )}
            </div>
            <div className="text-right text-sm text-muted-foreground space-y-1">
              <div className="flex items-center gap-2 justify-end">
                <Clock className="h-4 w-4" />
                {duration}
              </div>
              <div className="flex items-center gap-2 justify-end">
                <Users className="h-4 w-4" />
                {capacity}
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex items-center text-sm"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <div className="w-2 h-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                <span className="leading-relaxed">{feature}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-3">
            <Button 
              className="flex-1 btn-premium" 
              onClick={onBook}
              size="lg"
            >
              <Calendar className="h-4 w-4 mr-2" />
              {ctaText}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="tel:+91 99989 07887" aria-label="Call to book">
                <Phone className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PackageCard;

export default PackageCard;