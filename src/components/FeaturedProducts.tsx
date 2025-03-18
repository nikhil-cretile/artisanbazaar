
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { getFeaturedProducts, Product } from '@/lib/data';

interface FeaturedProductsProps {
  onAddToCart?: (product: Product) => void;
}

const FeaturedProducts = ({ onAddToCart }: FeaturedProductsProps) => {
  const featuredProducts = getFeaturedProducts();
  const [activeTab, setActiveTab] = useState('all');
  const [visibleItems, setVisibleItems] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".product-item").forEach((item) => {
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll(".product-item").forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  const isVisible = (id: string) => visibleItems.includes(id);

  const filteredProducts = 
    activeTab === 'all' 
      ? featuredProducts 
      : featuredProducts.filter(product => product.category.toLowerCase() === activeTab);

  const categories = Array.from(
    new Set(featuredProducts.map(product => product.category.toLowerCase()))
  );

  return (
    <section className="py-20 bg-gradient-to-b from-white to-bazaar-cream/50">
      <div className="bazaar-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle mt-8">
            Handpicked treasures crafted by our skilled artisans across India
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          <button 
            className={`px-4 py-2 rounded-full transition-colors duration-300 ${
              activeTab === 'all' 
                ? 'bg-bazaar-red text-white font-medium'
                : 'bg-muted hover:bg-muted/80 text-foreground'
            }`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          
          {categories.map((category) => (
            <button 
              key={category}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeTab === category 
                  ? 'bg-bazaar-red text-white font-medium'
                  : 'bg-muted hover:bg-muted/80 text-foreground'
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              id={product.id} 
              className={`product-item transition-all duration-500 ${
                isVisible(product.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
