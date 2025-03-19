
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star, Eye, ShoppingCart } from 'lucide-react';
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

  // Calculate discount if there's a difference between original and current price
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount 
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100) 
    : 0;

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block h-full">
        {/* Product Image */}
        <div className="relative overflow-hidden h-60 md:h-64">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1605101100278-5d1deb2b6498?q=80&w=600&auto=format&fit=crop";
            }}
          />
          
          {/* Product Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {product.bestseller && (
              <span className="deal-tag flex items-center gap-1">
                <Star size={12} className="fill-current" /> Bestseller
              </span>
            )}
            {product.new && (
              <span className="new-tag flex items-center gap-1">
                New
              </span>
            )}
            {hasDiscount && (
              <span className="discount-tag flex items-center gap-1">
                {discountPercent}% OFF
              </span>
            )}
          </div>
          
          {/* Quick Actions */}
          <div className={`absolute right-2 top-2 flex flex-col gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 transform-none' : 'opacity-0 translate-x-4'}`}>
            <button 
              className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center transition-colors hover:bg-bazaar-red hover:text-white"
              aria-label="Add to wishlist"
            >
              <Heart size={16} />
            </button>
            <Link 
              to={`/product/${product.id}`}
              className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center transition-colors hover:bg-bazaar-peacock hover:text-white"
              aria-label="Quick view"
            >
              <Eye size={16} />
            </Link>
          </div>
          
          {/* Add to Cart Button - Shown on hover */}
          <div className={`absolute left-0 right-0 bottom-0 transition-all duration-300 ${isHovered ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`}>
            <button 
              onClick={handleAddToCart}
              className="w-full bg-bazaar-red text-white py-2.5 text-sm font-medium flex items-center justify-center gap-2 hover:bg-bazaar-darkred transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingCart size={16} />
              Add to Cart
            </button>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          <div className="flex items-center gap-1 mb-1">
            <Star size={14} className="fill-bazaar-saffron text-bazaar-saffron" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>
          
          <p className="text-xs text-muted-foreground uppercase mb-1">
            {product.category}
          </p>
          
          <h3 className="font-medium text-foreground mb-2 line-clamp-2 leading-snug transition-colors group-hover:text-bazaar-red">
            {product.name}
          </h3>
          
          <div className="flex items-baseline gap-2">
            <span className="font-semibold text-foreground">
              {formatPrice(product.price)}
            </span>
            
            {hasDiscount && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice!)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
