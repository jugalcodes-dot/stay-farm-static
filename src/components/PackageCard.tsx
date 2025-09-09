import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Clock, Star } from "lucide-react";

interface PackageCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  capacity: string;
  features: string[];
  image: string;
  imageAlt: string;
  popular?: boolean;
  ctaText?: string;
  onBook?: () => void;
}

const PackageCard = ({
  title,
  description,
  price,
  duration,
  capacity,
  features,
  image,
  imageAlt,
  popular = false,
  ctaText = "Book Now",
  onBook
}: PackageCardProps) => {
  return (
    <Card className="overflow-hidden card-farmhouse relative group">
      {popular && (
        <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground">
          <Star className="h-3 w-3 mr-1" fill="currentColor" />
          Popular
        </Badge>
      )}
      
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-2xl font-bold mb-1">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="text-3xl font-bold text-primary">{price}</div>
          <div className="text-right text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {duration}
            </div>
            <div className="flex items-center gap-1 mt-1">
              <Users className="h-4 w-4" />
              {capacity}
            </div>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
              {feature}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <Button 
            className="flex-1" 
            onClick={onBook}
          >
            {ctaText}
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            asChild
          >
            <a href="tel:+91-9876543210" aria-label="Call to book">
              <Calendar className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PackageCard;