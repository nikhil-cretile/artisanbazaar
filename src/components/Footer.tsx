
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  MapPin, 
  Mail, 
  Phone 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bazaar-peacock/5 pt-16 pb-8">
      <div className="bazaar-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-display font-bold text-bazaar-saffron">
                Artisan<span className="text-bazaar-peacock">Bazaar</span>
              </span>
            </Link>
            
            <p className="text-muted-foreground mb-6">
              Connecting artisans from across India with customers who appreciate authentic handcrafted products.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-bazaar-saffron hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-bazaar-saffron hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-bazaar-saffron hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-bazaar-saffron transition-colors duration-200">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-bazaar-saffron transition-colors duration-200">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/artisans" className="text-muted-foreground hover:text-bazaar-saffron transition-colors duration-200">
                  Artisans
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-bazaar-saffron transition-colors duration-200">
                  Our Story
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-display font-semibold text-foreground mb-4">
              Customer Service
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-bazaar-saffron transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-muted-foreground hover:text-bazaar-saffron transition-colors duration-200">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping-policy" className="text-muted-foreground hover:text-bazaar-saffron transition-colors duration-200">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/return-policy" className="text-muted-foreground hover:text-bazaar-saffron transition-colors duration-200">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-semibold text-foreground mb-4">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="text-bazaar-saffron mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">
                  123 Crafts Street, Artisan Market,<br />New Delhi, India - 110001
                </span>
              </li>
              <li className="flex">
                <Mail size={20} className="text-bazaar-saffron mr-3 flex-shrink-0" />
                <a href="mailto:info@artisanbazaar.com" className="text-muted-foreground hover:text-bazaar-saffron transition-colors duration-200">
                  info@artisanbazaar.com
                </a>
              </li>
              <li className="flex">
                <Phone size={20} className="text-bazaar-saffron mr-3 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-muted-foreground hover:text-bazaar-saffron transition-colors duration-200">
                  +91 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="py-8 border-t border-border mb-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-display font-semibold text-foreground mb-3">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-muted-foreground mb-6">
              Stay updated with our latest products, artisan stories, and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-bazaar-saffron/50"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground pt-6 border-t border-border">
          <p>© {new Date().getFullYear()} ArtisanBazaar. All Rights Reserved.</p>
          <p className="mt-1">
            Empowering Indian Artisans & Preserving Traditional Craftsmanship
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
