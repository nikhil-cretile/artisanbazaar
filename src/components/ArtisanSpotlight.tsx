
import { Link } from 'react-router-dom';
import { getFeaturedArtisans } from '@/lib/data';
import { MapPin, Star } from 'lucide-react';

const ArtisanSpotlight = () => {
  const featuredArtisans = getFeaturedArtisans();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-bazaar-cream/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full artinci-pattern opacity-30 pointer-events-none"></div>
      
      <div className="bazaar-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Meet Our Artisans</h2>
          <p className="section-subtitle mt-8">
            The skilled creators behind our beautiful handcrafted products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-xl p-8 border border-bazaar-mehendi/20">
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-bazaar-mehendi/20 text-bazaar-emerald rounded-full">
                Artisan Spotlight
              </div>
              
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
                {featuredArtisans[0].name}
              </h3>
              
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center text-bazaar-saffron">
                  <Star size={18} className="fill-bazaar-saffron mr-1" />
                  <span className="font-medium">{featuredArtisans[0].rating}</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <div className="flex items-center text-muted-foreground">
                  <MapPin size={16} className="mr-1" />
                  <span>{featuredArtisans[0].location}</span>
                </div>
              </div>
              
              <p className="text-foreground mb-3">
                Specialty: <span className="font-medium">{featuredArtisans[0].specialty}</span>
              </p>
              
              <p className="text-muted-foreground mb-6">
                {featuredArtisans[0].bio}
              </p>
              
              <Link 
                to={`/artisan/${featuredArtisans[0].id}`}
                className="btn-secondary inline-block"
              >
                View Artisan Profile
              </Link>
            </div>
          </div>
          
          {/* Artisan Image */}
          <div className="order-1 md:order-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="relative">
              <img 
                src={featuredArtisans[0].image}
                alt={featuredArtisans[0].name}
                className="w-full h-[400px] object-cover rounded-xl shadow-xl"
              />
              
              {/* Product count badge */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-full shadow-lg flex flex-col items-center justify-center p-4 text-center border border-bazaar-sage/20">
                <span className="text-3xl font-display font-bold text-bazaar-saffron">
                  {featuredArtisans[0].products}+
                </span>
                <span className="text-sm text-muted-foreground">Products</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/artisans" className="btn-primary inline-block">
            Meet All Artisans
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArtisanSpotlight;
