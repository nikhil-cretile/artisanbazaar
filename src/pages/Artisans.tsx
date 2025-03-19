
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { artisans } from '@/lib/data';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const Artisans = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main className="flex-1 pt-24">
        <div className="bazaar-container py-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Our Artisans</h1>
            <p className="text-muted-foreground">
              Meet the skilled craftspeople behind our authentic Indian products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artisans.map((artisan) => (
              <div 
                key={artisan.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-bazaar-red/10"
              >
                <Link to={`/artisan/${artisan.id}`} className="block">
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={artisan.image} 
                      alt={artisan.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1590254553744-7bc4802c13dc?q=80&w=600&auto=format&fit=crop";
                      }}
                    />
                    {artisan.featured && (
                      <div className="absolute top-4 right-4 bg-bazaar-saffron text-white text-sm font-medium py-1 px-2 rounded">
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold mb-1">{artisan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{artisan.location}</p>
                    <p className="text-sm mb-4">{artisan.specialty}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star size={16} className="fill-bazaar-saffron text-bazaar-saffron" />
                        <span className="text-sm font-medium">{artisan.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{artisan.products} products</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Artisans;
