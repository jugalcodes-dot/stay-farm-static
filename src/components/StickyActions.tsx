import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyActions = () => {
  const phoneNumber = "+91 99989 07887";
  const whatsappNumber = "919998907887";
  const whatsappMessage = "Hi! I'm interested in booking Khushi Farm. Please share availability and pricing.";
  const mapsUrl = "https://www.google.com/maps/?q=22.070234,73.265417";

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border p-4 md:hidden">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href={`tel:${phoneNumber}`}>
              <Phone className="h-4 w-4" />
              Call
            </a>
          </Button>
          
          <Button
            variant="default"
            size="sm"
            className="flex-1 flex items-center gap-2 bg-[#25D366] hover:bg-[#25D366]/90"
            asChild
          >
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            asChild
          >
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
              <MapPin className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Desktop Floating Actions */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col gap-3">
        <Button
          size="lg"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#25D366]/90 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1"
          asChild
        >
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact via WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
          </a>
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          className="w-14 h-14 rounded-full shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          asChild
        >
          <a href={`tel:${phoneNumber}`} aria-label="Call us">
            <Phone className="h-6 w-6" />
          </a>
        </Button>
      </div>
    </>
  );
};

export default StickyActions;