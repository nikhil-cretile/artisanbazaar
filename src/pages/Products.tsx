
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products, loadCartFromLocalStorage, saveCartToLocalStorage, categories, FilterOptions, filterProducts } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';
import Cart from '@/components/Cart';
import { Product, CartItem } from '@/lib/data';
import { toast } from '@/components/ui/use-toast';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Products = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({});
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 15000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | undefined>(undefined);
  const [sortBy, setSortBy] = useState<string>('');
  
  const uniqueCategories = Array.from(new Set(products.map(product => product.category)));
  
  useEffect(() => {
    const savedCart = loadCartFromLocalStorage();
    setCartItems(savedCart);
  }, []);
  
  useEffect(() => {
    saveCartToLocalStorage(cartItems);
  }, [cartItems]);
  
  useEffect(() => {
    const options: FilterOptions = {
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      categories: selectedCategories.length > 0 ? selectedCategories : undefined,
      rating: selectedRating,
      sortBy: sortBy as any || undefined,
    };
    
    setFilterOptions(options);
    setFilteredProducts(filterProducts(products, options));
  }, [priceRange, selectedCategories, selectedRating, sortBy]);
  
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

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };
  
  const clearFilters = () => {
    setPriceRange([0, 15000]);
    setSelectedCategories([]);
    setSelectedRating(undefined);
    setSortBy('');
  };

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        cartItemsCount={totalCartItems}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main className="flex-1">
        <div className="bazaar-container py-12 mt-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">All Products</h1>
            <p className="text-muted-foreground">
              Browse our collection of authentic handcrafted products from India
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4 space-y-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div>
                <h3 className="font-medium text-lg mb-4">Filter Products</h3>
                <Button variant="outline" size="sm" onClick={clearFilters} className="mb-6">
                  Clear All Filters
                </Button>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="px-2">
                  <Slider 
                    defaultValue={[0, 15000]} 
                    max={15000} 
                    step={100} 
                    value={priceRange}
                    onValueChange={setPriceRange as any}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Categories</h4>
                <div className="space-y-2">
                  {uniqueCategories.map(category => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`category-${category}`} 
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => handleCategoryChange(category)}
                      />
                      <label 
                        htmlFor={`category-${category}`}
                        className="text-sm cursor-pointer"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Rating</h4>
                <Select
                  value={selectedRating?.toString() || ''}
                  onValueChange={(value) => setSelectedRating(value ? Number(value) : undefined)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Any rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any rating</SelectItem>
                    <SelectItem value="4">4+ Stars</SelectItem>
                    <SelectItem value="4.5">4.5+ Stars</SelectItem>
                    <SelectItem value="4.8">4.8+ Stars</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Sort By</h4>
                <Select
                  value={sortBy}
                  onValueChange={setSortBy}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Default" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Default</SelectItem>
                    <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                    <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Top Rated</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredProducts.length} products
                </p>
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onAddToCart={handleAddToCart} 
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-muted/20 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-6">Try adjusting your filters to find what you're looking for.</p>
                  <Button onClick={clearFilters} variant="default">Clear Filters</Button>
                </div>
              )}
              
              {filteredProducts.length > 12 && (
                <Pagination className="mt-10">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
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

export default Products;
