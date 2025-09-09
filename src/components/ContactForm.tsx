import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Send, MessageCircle } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Enquiry Sent!",
        description: "We'll get back to you within 2 hours. Check WhatsApp for quick updates!",
      });
      
      // WhatsApp fallback
      const phone = formData.get('phone') as string;
      const enquiryType = formData.get('enquiryType') as string;
      const message = `Hi! I just submitted an enquiry for ${enquiryType}. My phone: ${phone}. Please confirm receipt.`;
      window.open(
        `https://wa.me/919876543210?text=${encodeURIComponent(message)}`,
        '_blank'
      );
      
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Card className="card-farmhouse">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Get Instant Pricing & Availability</CardTitle>
        <p className="text-center text-muted-foreground">
          Fill this form or WhatsApp us for immediate response
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot field */}
          <input 
            type="text" 
            name="website" 
            style={{ display: 'none' }} 
            tabIndex={-1} 
            autoComplete="off" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input 
                id="name" 
                name="name" 
                required 
                placeholder="Your full name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input 
                id="phone" 
                name="phone" 
                type="tel" 
                required 
                placeholder="+91-9876543210"
                pattern="[0-9+\-\s]+"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email (Optional)</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              placeholder="your@email.com"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Enquiry Type *</Label>
              <Select name="enquiryType" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="overnight-stay">Overnight Stay</SelectItem>
                  <SelectItem value="day-picnic">Day Picnic</SelectItem>
                  <SelectItem value="event">Private Events</SelectItem>
                  <SelectItem value="corporate">Corporate Bookings</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="headcount">Number of Guests *</Label>
              <Input 
                id="headcount" 
                name="headcount" 
                type="number" 
                required 
                min="1" 
                max="50"
                placeholder="10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="checkin">Check-in Date</Label>
              <Input 
                id="checkin" 
                name="checkin" 
                type="date" 
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="checkout">Check-out Date</Label>
              <Input 
                id="checkout" 
                name="checkout" 
                type="date" 
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Special Requests</Label>
            <Textarea 
              id="message" 
              name="message" 
              placeholder="Any special requirements, dietary preferences, or questions..."
              rows={3}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="consent" name="consent" required />
            <Label htmlFor="consent" className="text-sm">
              I agree to receive booking updates via WhatsApp/SMS *
            </Label>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Enquiry
                </>
              )}
            </Button>
            
            <Button 
              type="button"
              variant="outline" 
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white border-[#25D366]"
              asChild
            >
              <a 
                href="https://wa.me/919876543210?text=Hi! I need farmhouse booking details"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Direct
              </a>
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;