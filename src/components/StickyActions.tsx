import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyActions = () => {
  const phoneNumber = "+91-9876543210";
  const whatsappNumber = "919876543210";
  const whatsappMessage = "Hi! I'm interested in booking your farmhouse. Please share availability and pricing.";
  const mapsUrl = "https://maps.google.com/?q=28.4595,77.0266"; // Delhi coordinates as placeholder

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border p-4 md:hidden">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 flex items-center gap-2"
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
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#25D366]/90 shadow-lg"
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
          className="w-14 h-14 rounded-full shadow-lg"
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