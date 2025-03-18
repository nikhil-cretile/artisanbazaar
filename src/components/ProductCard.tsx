
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { formatPrice, Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <div 
      className="product-card overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Product Image */}
        <div className="relative overflow-hidden h-64">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Product Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.bestseller && (
              <span className="px-2 py-1 bg-bazaar-saffron text-white text-xs font-semibold rounded">
                Bestseller
              </span>
            )}
            {product.new && (
              <span className="px-2 py-1 bg-bazaar-emerald text-white text-xs font-semibold rounded">
                New
              </span>
            )}
          </div>
          
          {/* Quick Actions */}
          <div className={`absolute right-3 top-3 flex flex-col gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <button 
              className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center transition-colors hover:bg-bazaar-saffron/10"
              aria-label="Wishlist"
            >
              <Heart size={18} className="text-foreground" />
            </button>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          <div className="flex items-center gap-1 mb-2">
            <Star size={16} className="fill-bazaar-saffron text-bazaar-saffron" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>
          
          <h3 className="font-medium text-foreground mb-1 leading-snug transition-colors group-hover:text-bazaar-saffron">
            {product.name}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-3">
            {product.category}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="font-semibold text-foreground">
              {formatPrice(product.price)}
            </span>
            
            <button 
              onClick={handleAddToCart}
              className="w-10 h-10 rounded-full bg-bazaar-saffron/10 hover:bg-bazaar-saffron text-bazaar-saffron hover:text-white flex items-center justify-center transition-colors duration-300"
              aria-label="Add to cart"
            >
              <ShoppingBag size={18} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
