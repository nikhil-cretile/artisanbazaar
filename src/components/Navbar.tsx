
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, X, ShoppingBag, Search, User, Heart, 
  LogIn, Bell, Gift, Tag, TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NavbarProps {
  cartItemsCount?: number;
  onCartClick?: () => void;
}

const Navbar = ({ cartItemsCount = 0, onCartClick }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  // Track scroll position to add shadow and background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top notification bar */}
      <div className="bg-bazaar-peacock text-white text-sm py-1.5">
        <div className="bazaar-container text-center">
          <p>Free shipping on orders over ₹599 | Extra 10% off on first order</p>
        </div>
      </div>
      
      <header className={`fixed top-7 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-md"
      }`}>
        <div className="bazaar-container">
          {/* Main navbar */}
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-display font-bold">
                <span className="text-bazaar-red">Artisan</span>
                <span className="text-bazaar-peacock">Bazaar</span>
              </span>
            </Link>
            
            {/* Search - Desktop */}
            <div className="hidden md:flex flex-1 max-w-xl mx-6">
              <div className="relative w-full">
                <Input 
                  type="search"
                  placeholder="Search for products, artisans, and more..."
                  className="pl-10 pr-4 py-2 h-10 w-full rounded-md border border-input bg-background"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-5">
              <Link 
                to="/new-arrivals" 
                className={`nav-link ${isActive('/new-arrivals') ? 'active' : ''}`}
              >
                New
              </Link>
              <Link 
                to="/deals" 
                className={`nav-link ${isActive('/deals') ? 'active' : ''}`}
              >
                Deals
              </Link>
              <Link 
                to="/categories" 
                className={`nav-link ${isActive('/categories') ? 'active' : ''}`}
              >
                Categories
              </Link>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/wishlist" className="p-2 text-foreground hover:text-bazaar-red transition-colors relative">
                <Heart size={20} />
              </Link>
              <Link to="/account" className="p-2 text-foreground hover:text-bazaar-red transition-colors">
                <User size={20} />
              </Link>
              <button 
                onClick={onCartClick}
                className="p-2 text-foreground hover:text-bazaar-red transition-colors relative"
              >
                <ShoppingBag size={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-bazaar-red text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button 
                onClick={onCartClick}
                className="p-2 text-foreground hover:text-bazaar-red transition-colors relative"
              >
                <ShoppingBag size={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-bazaar-red text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold">
                    {cartItemsCount}
                  </span>
                )}
              </button>
              <button 
                className="p-2 text-foreground"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search size={20} />
              </button>
              <button 
                className="p-2 text-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Category Navigation Bar */}
          <div className="hidden md:block border-t border-border">
            <nav className="flex items-center py-2 overflow-x-auto scrollbar-hide">
              <Link to="/products" className="whitespace-nowrap text-sm font-medium px-3 py-1 hover:text-bazaar-red transition-colors">All Products</Link>
              <Link to="/category/clothing" className="whitespace-nowrap text-sm font-medium px-3 py-1 hover:text-bazaar-red transition-colors">Clothing</Link>
              <Link to="/category/home-decor" className="whitespace-nowrap text-sm font-medium px-3 py-1 hover:text-bazaar-red transition-colors">Home Decor</Link>
              <Link to="/category/jewelry" className="whitespace-nowrap text-sm font-medium px-3 py-1 hover:text-bazaar-red transition-colors">Jewelry</Link>
              <Link to="/category/pottery" className="whitespace-nowrap text-sm font-medium px-3 py-1 hover:text-bazaar-red transition-colors">Pottery</Link>
              <Link to="/category/textiles" className="whitespace-nowrap text-sm font-medium px-3 py-1 hover:text-bazaar-red transition-colors">Textiles</Link>
              <Link to="/artisans" className="whitespace-nowrap text-sm font-medium px-3 py-1 hover:text-bazaar-red transition-colors">Artisans</Link>
              <Link to="/about" className="whitespace-nowrap text-sm font-medium px-3 py-1 hover:text-bazaar-red transition-colors">Our Story</Link>
            </nav>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden bg-white border-t border-border py-3 px-4 animate-fade-in">
            <div className="relative">
              <Input 
                type="search"
                placeholder="Search for products, artisans..."
                className="pl-10 pr-4 py-2 h-10 w-full rounded-md border border-input bg-background"
                autoFocus
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-border animate-fade-in">
            <div className="bazaar-container py-4 flex flex-col">
              <nav className="flex flex-col space-y-3">
                <Link to="/" 
                  className="py-2 font-medium text-foreground hover:text-bazaar-red transition-colors flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link to="/new-arrivals" 
                  className="py-2 font-medium text-foreground hover:text-bazaar-red transition-colors flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <TrendingUp size={18} />
                  New Arrivals
                </Link>
                <Link to="/deals" 
                  className="py-2 font-medium text-foreground hover:text-bazaar-red transition-colors flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Tag size={18} />
                  Deals
                </Link>
                <Link to="/categories" 
                  className="py-2 font-medium text-foreground hover:text-bazaar-red transition-colors flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Categories
                </Link>
                <Link to="/products" 
                  className="py-2 font-medium text-foreground hover:text-bazaar-red transition-colors flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Products
                </Link>
                <Link to="/artisans" 
                  className="py-2 font-medium text-foreground hover:text-bazaar-red transition-colors flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Artisans
                </Link>
                <Link to="/about" 
                  className="py-2 font-medium text-foreground hover:text-bazaar-red transition-colors flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Story
                </Link>
              </nav>
              
              <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-border">
                <Link 
                  to="/account" 
                  className="flex flex-col items-center gap-1 p-2 rounded-md hover:bg-muted transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User size={20} />
                  <span className="text-xs">Account</span>
                </Link>
                <Link 
                  to="/wishlist" 
                  className="flex flex-col items-center gap-1 p-2 rounded-md hover:bg-muted transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Heart size={20} />
                  <span className="text-xs">Wishlist</span>
                </Link>
                <Link 
                  to="/orders" 
                  className="flex flex-col items-center gap-1 p-2 rounded-md hover:bg-muted transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Bell size={20} />
                  <span className="text-xs">Orders</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className="h-24 md:h-32"></div>
    </>
  );
};

export default Navbar;
