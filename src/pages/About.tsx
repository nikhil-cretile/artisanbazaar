
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main className="flex-1 pt-24">
        <div className="bazaar-container py-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Our Story</h1>
            <p className="text-muted-foreground">
              Connecting you with India's finest artisans and their authentic creations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1531951062382-471bfaf060a7?q=80&w=800&auto=format&fit=crop" 
                alt="Artisan working on traditional craft" 
                className="rounded-xl shadow-md"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1605101100278-5d1deb2b6498?q=80&w=600&auto=format&fit=crop";
                }}
              />
            </div>
            <div>
              <h2 className="text-2xl font-display font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                ArtisanBazaar was born from a passion to preserve and promote India's rich cultural heritage of handicrafts and artisanal products. We believe in creating sustainable livelihoods for artisans while connecting global customers with authentic Indian craftsmanship.
              </p>
              <p className="text-muted-foreground">
                Founded in 2022, we work directly with over 500 artisans across 15 states in India, eliminating middlemen and ensuring fair compensation for their exceptional skills and craftsmanship.
              </p>
            </div>
          </div>
          
          <div className="bg-bazaar-cream/30 p-8 md:p-12 rounded-xl mb-20">
            <h2 className="text-2xl font-display font-semibold text-center mb-12">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-bazaar-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-bazaar-red">✦</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Authenticity</h3>
                <p className="text-muted-foreground text-sm">
                  We celebrate genuine craftsmanship and traditional techniques passed down through generations.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-bazaar-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-bazaar-red">✦</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Sustainability</h3>
                <p className="text-muted-foreground text-sm">
                  We promote eco-friendly practices and support sustainable production methods.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-bazaar-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-bazaar-red">✦</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Fair Trade</h3>
                <p className="text-muted-foreground text-sm">
                  We ensure artisans receive fair compensation for their skills and creative work.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-display font-semibold mb-6">Join Our Journey</h2>
            <p className="text-muted-foreground mb-8">
              Every purchase you make supports an artisan family and helps preserve centuries-old traditions. Thank you for being part of our community and supporting ethical commerce.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
