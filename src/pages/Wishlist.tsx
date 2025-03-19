
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Product, CartItem, products } from '@/lib/data';
import { ShoppingBag, Trash2, Heart } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import Cart from '@/components/Cart';
import { formatPrice } from '@/lib/data';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // For demo purposes, we'll show some example wishlist items
  useEffect(() => {
    // In a real app, this would be loaded from localStorage or a database
    const sampleWishlist = products.slice(0, 4);
    setWishlistItems(sampleWishlist);
    
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);
  
  // Save cart to localStorage when it changes
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

  const handleRemoveFromWishlist = (productId: string) => {
    setWishlistItems(wishlistItems.filter(product => product.id !== productId));
    
    toast({
      title: "Removed from wishlist",
      description: "The item has been removed from your wishlist.",
      duration: 3000,
    });
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
        <div className="bazaar-container py-12">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-display font-bold mb-2">My Wishlist</h1>
            <p className="text-muted-foreground">
              Items you've saved for later. Add them to your cart when you're ready to purchase.
            </p>
          </div>
          
          {wishlistItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-12 text-center">
              <div className="inline-flex items-center justify-center bg-muted rounded-full w-20 h-20 mb-4">
                <Heart size={32} className="text-muted-foreground" />
              </div>
              <h2 className="text-xl font-medium mb-2">Your wishlist is empty</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Browse our collection and heart your favorite items to add them to your wishlist.
              </p>
              <Link
                to="/products"
                className="inline-block px-6 py-3 bg-bazaar-red text-white font-medium rounded-md hover:bg-bazaar-red/90 transition-colors"
              >
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50 border-b">
                    <tr>
                      <th className="py-3 px-4 text-left font-medium text-muted-foreground">Product</th>
                      <th className="py-3 px-4 text-left font-medium text-muted-foreground">Price</th>
                      <th className="py-3 px-4 text-left font-medium text-muted-foreground">Stock Status</th>
                      <th className="py-3 px-4 text-right font-medium text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {wishlistItems.map((product) => (
                      <tr key={product.id}>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-4">
                            <Link to={`/product/${product.id}`} className="w-16 h-16 rounded-md overflow-hidden">
                              <img 
                                src={product.image} 
                                alt={product.name} 
                                className="w-full h-full object-cover"
                              />
                            </Link>
                            <div>
                              <Link 
                                to={`/product/${product.id}`} 
                                className="font-medium hover:text-bazaar-red transition-colors"
                              >
                                {product.name}
                              </Link>
                              <p className="text-sm text-muted-foreground">{product.category}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 font-medium">{formatPrice(product.price)}</td>
                        <td className="py-4 px-4">
                          <span className="text-sm text-emerald-600 font-medium">In Stock</span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex justify-end gap-2">
                            <button 
                              onClick={() => handleAddToCart(product)}
                              className="p-2 rounded-md hover:bg-muted transition-colors text-foreground"
                              title="Add to cart"
                            >
                              <ShoppingBag size={18} />
                            </button>
                            <button 
                              onClick={() => handleRemoveFromWishlist(product.id)}
                              className="p-2 rounded-md hover:bg-muted transition-colors text-destructive"
                              title="Remove from wishlist"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
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

export default Wishlist;
