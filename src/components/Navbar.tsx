
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  cartItemsCount?: number;
  onCartClick?: () => void;
}

const Navbar = ({ cartItemsCount = 0, onCartClick }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 transition-all duration-300 shadow-sm">
      <div className="bazaar-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-display font-bold text-bazaar-saffron">
              Artisan<span className="text-bazaar-peacock">Bazaar</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link active">Home</Link>
            <Link to="/categories" className="nav-link">Categories</Link>
            <Link to="/products" className="nav-link">All Products</Link>
            <Link to="/artisans" className="nav-link">Artisans</Link>
            <Link to="/about" className="nav-link">Our Story</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-foreground hover:text-bazaar-saffron transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-foreground hover:text-bazaar-saffron transition-colors">
              <User size={20} />
            </button>
            <button 
              onClick={onCartClick}
              className="p-2 text-foreground hover:text-bazaar-saffron transition-colors relative"
            >
              <ShoppingBag size={20} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-bazaar-saffron text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border animate-fade-in">
          <div className="bazaar-container py-4 flex flex-col">
            <nav className="flex flex-col space-y-4 mb-6">
              <Link to="/" 
                className="py-2 font-medium text-foreground hover:text-bazaar-saffron transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link to="/categories" 
                className="py-2 font-medium text-foreground hover:text-bazaar-saffron transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link to="/products" 
                className="py-2 font-medium text-foreground hover:text-bazaar-saffron transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                All Products
              </Link>
              <Link to="/artisans" 
                className="py-2 font-medium text-foreground hover:text-bazaar-saffron transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Artisans
              </Link>
              <Link to="/about" 
                className="py-2 font-medium text-foreground hover:text-bazaar-saffron transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </Link>
            </nav>
            
            <div className="flex space-x-6 py-2 border-t border-border">
              <button className="p-2 text-foreground hover:text-bazaar-saffron transition-colors">
                <Search size={20} />
              </button>
              <button className="p-2 text-foreground hover:text-bazaar-saffron transition-colors">
                <User size={20} />
              </button>
              <button 
                onClick={onCartClick}
                className="p-2 text-foreground hover:text-bazaar-saffron transition-colors relative"
              >
                <ShoppingBag size={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-bazaar-saffron text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
