
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { categories, getProductsByCategory } from "@/lib/data";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const Categories = () => {
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

    document.querySelectorAll(".category-card").forEach((item) => {
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll(".category-card").forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  const isVisible = (id: string) => visibleItems.includes(id);

  return (
    <section className="py-20 bg-bazaar-cream/30 artinci-pattern overflow-hidden">
      <div className="bazaar-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Explore Categories</h2>
          <p className="section-subtitle mt-8">
            Discover a wide range of authentic Indian products across various categories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const productsCount = getProductsByCategory(category.id).length;
            
            return (
              <div
                key={category.id}
                id={category.id}
                className={`category-card rounded-xl overflow-hidden shadow-md border border-bazaar-red/10 transition-all duration-500 ${
                  isVisible(category.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
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
                      <div className="flex items-center justify-between text-white/80 text-sm">
                        <span className="font-medium">{productsCount} products</span>
                        <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20 p-0 px-3 h-8">
                          Shop Now →
                        </Button>
                      </div>
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-bazaar-red/0 group-hover:bg-bazaar-red/10 transition-colors duration-300"></div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
