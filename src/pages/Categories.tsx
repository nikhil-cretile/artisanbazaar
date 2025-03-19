
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { categories } from '@/lib/data';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';

const Categories = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main className="flex-1 pt-24">
        <div className="bazaar-container py-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Browse Categories</h1>
            <p className="text-muted-foreground">
              Explore our handpicked collection of authentic Indian products across various categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className="category-card rounded-xl overflow-hidden shadow-md border border-bazaar-red/10 hover:shadow-lg transition-all duration-300"
              >
                <Link to={`/category/${category.id}`} className="block group relative">
                  <div className="relative h-60 overflow-hidden">
                    <AspectRatio ratio={16/9} className="bg-muted">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          // Fallback image in case the category image fails to load
                          e.currentTarget.src = "https://images.unsplash.com/photo-1605101100278-5d1deb2b6498?q=80&w=600&auto=format&fit=crop";
                          console.log(`Failed to load image for category: ${category.name}`);
                        }}
                      />
                    </AspectRatio>
                    <div className="absolute inset-0 bg-gradient-to-t from-bazaar-darkred/80 via-bazaar-red/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-display font-semibold text-white mb-1">
                        {category.name}
                      </h3>
                      <p className="text-white/90 text-sm mb-2">
                        {category.description}
                      </p>
                      <div className="flex items-center text-white/80 text-sm">
                        <span className="font-medium">{category.count} products</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-bazaar-red/0 group-hover:bg-bazaar-red/10 transition-colors duration-300"></div>
                </Link>
              </div>
            ))}
          </div>
          
          <Pagination className="mt-10">
            <PaginationContent>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
