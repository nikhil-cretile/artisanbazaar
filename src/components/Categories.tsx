
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { categories } from "@/lib/data";

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
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="bazaar-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Explore Categories</h2>
          <p className="section-subtitle">
            Discover a wide range of authentic Indian products across various categories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className={`category-card rounded-xl overflow-hidden shadow-md transition-all duration-500 ${
                isVisible(category.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Link to={`/category/${category.id}`} className="block group">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
