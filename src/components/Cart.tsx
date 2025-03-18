
import { useState } from 'react';
import { X, ShoppingBag, Plus, Minus } from 'lucide-react';
import { CartItem, formatPrice } from '@/lib/data';
import { Link } from 'react-router-dom';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

const Cart = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartProps) => {
  const totalAmount = items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'visible' : 'invisible'}`}>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      ></div>
      
      {/* Cart Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-xl flex flex-col transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div className="flex items-center">
            <ShoppingBag size={20} className="mr-2" />
            <h2 className="text-lg font-medium">Your Cart ({items.length})</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Cart Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6">
            <ShoppingBag size={64} className="text-muted-foreground mb-4" />
            <p className="text-foreground font-medium mb-2">Your cart is empty</p>
            <p className="text-muted-foreground text-sm mb-6 text-center">
              Add some products to your cart and they will appear here
            </p>
            <button 
              onClick={onClose}
              className="btn-primary"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto py-4">
            {items.map((item) => (
              <div key={item.product.id} className="px-6 py-3 border-b">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-20 h-20 bg-muted rounded-md overflow-hidden flex-shrink-0">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground mb-1 leading-snug">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">
                      {item.product.category}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border rounded-md">
                        <button 
                          onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          className="px-2 py-1 text-foreground hover:bg-muted transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 py-1 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 text-foreground hover:bg-muted transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="text-right">
                    <p className="font-medium text-foreground">
                      {formatPrice(item.product.price)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">{formatPrice(totalAmount)}</span>
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-muted-foreground">Shipping</span>
              <span className="font-medium text-bazaar-emerald">Free</span>
            </div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b">
              <span className="text-foreground font-medium">Total</span>
              <span className="font-bold text-lg">{formatPrice(totalAmount)}</span>
            </div>
            <Link 
              to="/checkout"
              className="w-full btn-primary block text-center"
              onClick={onClose}
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
