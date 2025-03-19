
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you shortly.",
      duration: 3000,
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      
      <main className="flex-1 pt-24">
        <div className="bazaar-container py-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-muted-foreground">
              Have a question or need assistance? We're here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border">
              <h2 className="text-xl font-display font-semibold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Your Name <span className="text-red-500">*</span></label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address <span className="text-red-500">*</span></label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                    <Input 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject <span className="text-red-500">*</span></label>
                    <Input 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Order Inquiry"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Your Message <span className="text-red-500">*</span></label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                    className="min-h-[150px]"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-bazaar-saffron hover:bg-bazaar-saffron/90">
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border">
                <h2 className="text-xl font-display font-semibold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-bazaar-saffron/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-bazaar-saffron" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Address</h3>
                      <p className="text-muted-foreground">123 Crafts Street, Artisan Market,<br />New Delhi, India - 110001</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-bazaar-saffron/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-bazaar-saffron" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:info@artisanbazaar.com" className="hover:text-bazaar-saffron transition-colors">
                          info@artisanbazaar.com
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <a href="mailto:support@artisanbazaar.com" className="hover:text-bazaar-saffron transition-colors">
                          support@artisanbazaar.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-bazaar-saffron/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-bazaar-saffron" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+911234567890" className="hover:text-bazaar-saffron transition-colors">
                          +91 123 456 7890
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <a href="tel:+911098765432" className="hover:text-bazaar-saffron transition-colors">
                          +91 109 876 5432
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-bazaar-saffron/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-bazaar-saffron" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 8:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 10:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border">
                <h2 className="text-xl font-display font-semibold mb-6">Follow Us</h2>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-bazaar-saffron/10 flex items-center justify-center hover:bg-bazaar-saffron hover:text-white transition-colors">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-bazaar-saffron/10 flex items-center justify-center hover:bg-bazaar-saffron hover:text-white transition-colors">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-bazaar-saffron/10 flex items-center justify-center hover:bg-bazaar-saffron hover:text-white transition-colors">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-bazaar-saffron/10 flex items-center justify-center hover:bg-bazaar-saffron hover:text-white transition-colors">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
