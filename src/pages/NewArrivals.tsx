
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products, CartItem, Product } from '@/lib/data';
import { toast } from '@/components/ui/use-toast';
import Cart from '@/components/Cart';
import { Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const NewArrivals = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  
  // Load cart items from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    
    // Filter for new products - in a real app this would come from an API
    const filtered = products.filter(product => product.new);
    setNewProducts(filtered);
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
        <div className="bg-gradient-to-r from-bazaar-red/90 to-bazaar-crimson/90 text-white py-16">
          <div className="bazaar-container text-center">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">New Arrivals</h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Discover our latest collection of handcrafted products from across India. 
              Fresh designs and traditional craftsmanship to brighten your home and wardrobe.
            </p>
          </div>
        </div>
        
        <div className="bazaar-container py-8">
          {/* Filters and Sort */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-muted-foreground" />
              <span className="font-medium">Filters</span>
            </div>
            
            <div className="flex items-center flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Category:</span>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px] h-9">
                    <SelectValue placeholder="All categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All categories</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="home-decor">Home Decor</SelectItem>
                    <SelectItem value="jewelry">Jewelry</SelectItem>
                    <SelectItem value="pottery">Pottery</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Price:</span>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px] h-9">
                    <SelectValue placeholder="All prices" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All prices</SelectItem>
                    <SelectItem value="0-500">Under ₹500</SelectItem>
                    <SelectItem value="500-1000">₹500 - ₹1000</SelectItem>
                    <SelectItem value="1000-2000">₹1000 - ₹2000</SelectItem>
                    <SelectItem value="2000+">Above ₹2000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort:</span>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-[180px] h-9">
                    <SelectValue placeholder="Newest first" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest first</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="popular">Popularity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {newProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={handleAddToCart} 
              />
            ))}
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

export default NewArrivals;
