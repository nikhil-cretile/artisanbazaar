
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { artisans, getProductsByArtisan, Product, CartItem } from '@/lib/data';
import { Star } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { toast } from '@/components/ui/use-toast';
import Cart from '@/components/Cart';

const ArtisanDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [artisan, setArtisan] = useState(artisans.find(a => a.id === id));
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  useEffect(() => {
    if (id) {
      const artisanData = artisans.find(a => a.id === id);
      setArtisan(artisanData);
      
      if (artisanData) {
        const artisanProducts = getProductsByArtisan(id);
        setProducts(artisanProducts);
      }
    }
  }, [id]);
  
  const handleAddToCart = (product: Product) => {
    const existingItem = cartItems.find(item => item.product.id === product.id);
    
    if (existingItem) {
      // Update quantity if item already exists
      setCartItems(cartItems.map(item => 
        item.product.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      // Add new item to cart
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
    
    // Open the cart when an item is added
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
  
  if (!artisan) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar 
          cartItemsCount={totalCartItems}
          onCartClick={() => setIsCartOpen(true)}
        />
        <main className="flex-1 pt-24">
          <div className="bazaar-container py-12 text-center">
            <h1 className="text-3xl font-display font-bold mb-4">Artisan Not Found</h1>
            <p className="mb-8">The artisan you're looking for doesn't exist.</p>
            <Link to="/artisans" className="text-bazaar-saffron hover:underline">
              Browse all artisans
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {/* Artisan Image */}
            <div className="md:col-span-1">
              <div className="rounded-xl overflow-hidden shadow-md">
                <img 
                  src={artisan.image} 
                  alt={artisan.name} 
                  className="w-full h-auto"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1590254553744-7bc4802c13dc?q=80&w=600&auto=format&fit=crop";
                  }}
                />
              </div>
            </div>
            
            {/* Artisan Info */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <h1 className="text-3xl font-display font-bold mb-2">{artisan.name}</h1>
                <p className="text-muted-foreground mb-4">{artisan.location}</p>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < Math.floor(artisan.rating) 
                          ? "fill-bazaar-saffron text-bazaar-saffron" 
                          : "text-muted"
                        } 
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{artisan.rating.toFixed(1)}</span>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Specialty</h3>
                  <p className="text-muted-foreground">{artisan.specialty}</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Bio</h3>
                  <p className="text-muted-foreground">{artisan.bio}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Artisan Products */}
          <div>
            <h2 className="text-2xl font-display font-semibold mb-8">Products by {artisan.name}</h2>
            
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-muted-foreground">No products found for this artisan.</p>
              </div>
            )}
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

export default ArtisanDetail;
