
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { categories, getProductsByCategory, Product, CartItem } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { toast } from '@/components/ui/use-toast';
import Cart from '@/components/Cart';

const CategoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [category, setCategory] = useState(categories.find(c => c.id === id));
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  useEffect(() => {
    if (id) {
      const categoryData = categories.find(c => c.id === id);
      setCategory(categoryData);
      
      if (categoryData) {
        const categoryProducts = getProductsByCategory(id);
        setProducts(categoryProducts);
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
  
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar 
          cartItemsCount={totalCartItems}
          onCartClick={() => setIsCartOpen(true)}
        />
        <main className="flex-1 pt-24">
          <div className="bazaar-container py-12 text-center">
            <h1 className="text-3xl font-display font-bold mb-4">Category Not Found</h1>
            <p className="mb-8">The category you're looking for doesn't exist.</p>
            <Link to="/categories" className="text-bazaar-saffron hover:underline">
              Browse all categories
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
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1605101100278-5d1deb2b6498?q=80&w=800&auto=format&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bazaar-container">
            <div className="flex flex-col items-start justify-end h-full">
              <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                {category.name}
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-2xl">
                {category.description}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bazaar-container py-12">
          <h2 className="text-2xl font-display font-semibold mb-8">{category.count} Products</h2>
          
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
              <p className="text-muted-foreground mb-4">No products found in this category.</p>
              <Link to="/products" className="text-bazaar-saffron hover:underline">
                Browse all products
              </Link>
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

export default CategoryDetail;
