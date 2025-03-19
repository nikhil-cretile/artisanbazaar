
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products, artisans, categories, Product, CartItem } from '@/lib/data';
import { Star, Minus, Plus, Heart, ShoppingBag } from 'lucide-react';
import { formatPrice } from '@/lib/data';
import { toast } from '@/components/ui/use-toast';
import Cart from '@/components/Cart';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>(products.find(p => p.id === id));
  const [quantity, setQuantity] = useState(1);
  const [artisan, setArtisan] = useState(artisans.find(a => product && a.id === product.artisanId));
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  useEffect(() => {
    if (id) {
      const productData = products.find(p => p.id === id);
      setProduct(productData);
      
      if (productData) {
        const artisanData = artisans.find(a => a.id === productData.artisanId);
        setArtisan(artisanData);
      }
    }
  }, [id]);
  
  const handleAddToCart = () => {
    if (!product) return;
    
    const existingItem = cartItems.find(item => item.product.id === product.id);
    
    if (existingItem) {
      // Update quantity if item already exists
      setCartItems(cartItems.map(item => 
        item.product.id === product.id 
          ? { ...item, quantity: item.quantity + quantity } 
          : item
      ));
    } else {
      // Add new item to cart
      setCartItems([...cartItems, { product, quantity }]);
    }
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
    
    // Open the cart when an item is added
    setIsCartOpen(true);
  };
  
  const handleQuantityChange = (value: number) => {
    setQuantity(Math.max(1, value));
  };
  
  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems(cartItems.map(item => 
      item.product.id === productId 
        ? { ...item, quantity } 
        : item
    ));
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(cartItems.filter(item => item.product.id !== productId));
  };

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar 
          cartItemsCount={totalCartItems}
          onCartClick={() => setIsCartOpen(true)}
        />
        <main className="flex-1 pt-24">
          <div className="bazaar-container py-12 text-center">
            <h1 className="text-3xl font-display font-bold mb-4">Product Not Found</h1>
            <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
            <Link to="/products" className="text-bazaar-saffron hover:underline">
              Browse all products
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        cartItemsCount={totalCartItems}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main className="flex-1 pt-24">
        <div className="bazaar-container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product Image */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1605101100278-5d1deb2b6498?q=80&w=800&auto=format&fit=crop";
                }}
              />
            </div>
            
            {/* Product Info */}
            <div>
              <div className="mb-6">
                <Link 
                  to={`/category/${categories.find(c => c.name === product.category)?.id}`}
                  className="text-sm text-bazaar-saffron hover:underline"
                >
                  {product.category}
                </Link>
                <h1 className="text-2xl md:text-3xl font-display font-bold mt-2 mb-4">{product.name}</h1>
                
                {/* Product Badges */}
                <div className="flex gap-2 mb-4">
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
                
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < Math.floor(product.rating) 
                          ? "fill-bazaar-saffron text-bazaar-saffron" 
                          : "text-muted"
                        } 
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{product.rating.toFixed(1)}</span>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>
                
                <div className="text-2xl font-semibold mb-6">{formatPrice(product.price)}</div>
                
                <p className="text-muted-foreground mb-8">{product.description}</p>
                
                {/* Quantity Selector */}
                <div className="flex items-center gap-6 mb-8">
                  <label className="text-foreground font-medium">Quantity:</label>
                  <div className="flex items-center border rounded-md">
                    <button 
                      onClick={() => handleQuantityChange(quantity - 1)}
                      className="px-3 py-2 text-foreground hover:bg-muted transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 py-2 text-sm font-medium">{quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="px-3 py-2 text-foreground hover:bg-muted transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3 mb-8">
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 bg-bazaar-saffron hover:bg-bazaar-saffron/90 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <ShoppingBag size={18} />
                    Add to Cart
                  </button>
                  <button className="bg-white border border-bazaar-saffron/20 hover:bg-bazaar-saffron/5 p-3 rounded-md transition-colors">
                    <Heart size={20} className="text-foreground" />
                  </button>
                </div>
                
                {/* Artisan Info */}
                {artisan && (
                  <div className="border-t pt-6">
                    <h3 className="text-sm text-muted-foreground mb-2">Artisan</h3>
                    <Link 
                      to={`/artisan/${artisan.id}`}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img 
                          src={artisan.image} 
                          alt={artisan.name} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1590254553744-7bc4802c13dc?q=80&w=150&auto=format&fit=crop";
                          }}
                        />
                      </div>
                      <div>
                        <p className="font-medium group-hover:text-bazaar-saffron transition-colors">
                          {artisan.name}
                        </p>
                        <p className="text-sm text-muted-foreground">{artisan.location}</p>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default ProductDetail;
