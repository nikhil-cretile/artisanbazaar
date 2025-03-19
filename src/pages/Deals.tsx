
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products, CartItem, Product } from '@/lib/data';
import { toast } from '@/components/ui/use-toast';
import Cart from '@/components/Cart';
import { Percent, Timer, Gift, Tag } from 'lucide-react';

const Deals = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [dealsProducts, setDealsProducts] = useState<Product[]>([]);
  
  // Load cart items from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    
    // Filter for products with deals - in a real app this would come from an API
    // Here we'll just use the bestseller flag as a proxy for deals
    const filtered = products.filter(product => product.bestseller);
    setDealsProducts(filtered);
  }, []);
  
  // Save cart items to localStorage when they change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);
  
  const handleAddToCart = (product: Product) => {
    const existingItem = cartItems.find(item => item.product.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.product.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
    
    setIsCartOpen(true);
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
  
  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Navbar 
        cartItemsCount={totalCartItems}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main className="flex-1">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-bazaar-saffron to-bazaar-saffron/90 text-white py-16">
          <div className="bazaar-container text-center">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Special Deals & Offers
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto">
              Exclusive discounts on handcrafted treasures. 
              Limited-time offers that celebrate artisan excellence at special prices.
            </p>
          </div>
        </div>
        
        {/* Featured Deals */}
        <div className="bazaar-container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Deal Card 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-bazaar-saffron/20 transition-all hover:shadow-md">
              <div className="bg-bazaar-saffron/10 deal-pattern p-6 text-center">
                <div className="inline-flex items-center justify-center bg-bazaar-saffron text-white rounded-full w-16 h-16 mb-4">
                  <Percent size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Up to 30% Off</h3>
                <p className="text-muted-foreground">
                  Special discounts on selected items across all categories
                </p>
                <button className="mt-4 px-6 py-2 bg-bazaar-saffron text-white rounded-md font-medium hover:bg-bazaar-saffron/90 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
            
            {/* Deal Card 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-bazaar-peacock/20 transition-all hover:shadow-md">
              <div className="bg-bazaar-peacock/10 p-6 text-center">
                <div className="inline-flex items-center justify-center bg-bazaar-peacock text-white rounded-full w-16 h-16 mb-4">
                  <Timer size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Flash Sale</h3>
                <p className="text-muted-foreground">
                  24-hour deals on our most popular artisan products
                </p>
                <button className="mt-4 px-6 py-2 bg-bazaar-peacock text-white rounded-md font-medium hover:bg-bazaar-peacock/90 transition-colors">
                  View Offers
                </button>
              </div>
            </div>
            
            {/* Deal Card 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-bazaar-red/20 transition-all hover:shadow-md">
              <div className="bg-bazaar-red/10 p-6 text-center">
                <div className="inline-flex items-center justify-center bg-bazaar-red text-white rounded-full w-16 h-16 mb-4">
                  <Gift size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Free Gift</h3>
                <p className="text-muted-foreground">
                  Get a complimentary gift on orders above ₹1500
                </p>
                <button className="mt-4 px-6 py-2 bg-bazaar-red text-white rounded-md font-medium hover:bg-bazaar-red/90 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-display font-semibold mb-6">Deal Products</h2>
          
          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {dealsProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
          
          {/* Deal Banner */}
          <div className="mt-12 bg-gradient-to-r from-bazaar-red to-bazaar-crimson text-white rounded-lg overflow-hidden shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">Limited Time Offer</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Festival Season Sale</h3>
                <p className="mb-6 text-white/80">
                  Celebrate with special discounts on our entire collection of festive items.
                  Perfect for gifts and home decoration.
                </p>
                <div className="flex gap-4">
                  <button className="px-6 py-2.5 bg-white text-bazaar-red font-medium rounded-md hover:bg-white/90 transition-colors">
                    Shop Now
                  </button>
                  <button className="px-6 py-2.5 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
              <div className="hidden md:block h-full">
                <img 
                  src="https://images.unsplash.com/photo-1604505761739-7fcefc002f98?q=80&w=1000&auto=format&fit=crop" 
                  alt="Festival decorations" 
                  className="h-full w-full object-cover"
                />
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

export default Deals;
