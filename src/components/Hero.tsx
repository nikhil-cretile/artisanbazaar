
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-bazaar-cream/50">
      <div className="bazaar-container">
        <div className="flex flex-col md:flex-row items-center">
          {/* Hero Content */}
          <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-10 md:mb-0 staggered-fade-in">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-bazaar-sage/30 text-bazaar-emerald rounded-full animate-pulse-slow">
              Supporting Local Indian Artisans
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              Discover <span className="text-bazaar-saffron">Handcrafted</span> Treasures from <span className="text-bazaar-peacock">India</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl">
              Connecting you directly with skilled artisans across India. Each purchase supports traditional craftsmanship and sustainable livelihoods.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/products"
                className="btn-primary flex items-center"
              >
                Explore Products
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                to="/artisans"
                className="btn-secondary flex items-center"
              >
                Meet Artisans
              </Link>
            </div>
          </div>
          
          {/* Hero Images */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[420px] md:h-[480px]">
              {/* Main image - Indian Handicrafts */}
              <div className="absolute top-0 left-0 w-3/4 h-3/4 z-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1625795214995-6e9626d78f51?q=80&w=800&auto=format&fit=crop"
                  alt="Indian Handicrafts" 
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
                <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
                  <p className="text-white font-medium">Traditional Handicrafts</p>
                </div>
              </div>
              
              {/* Secondary image - Traditional Sweets */}
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 z-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1617541391432-bd530bd8bf67?q=80&w=800&auto=format&fit=crop"
                  alt="Traditional Sweets" 
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
                <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
                  <p className="text-white font-medium">Traditional Sweets</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full bg-bazaar-saffron/10 z-0"></div>
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-bazaar-peacock/10 z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
