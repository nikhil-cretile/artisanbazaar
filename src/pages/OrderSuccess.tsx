
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, Box, Truck, ShoppingBag, Award, MapPin, ArrowRight } from 'lucide-react';

const OrderSuccess = () => {
  const [orderNumber, setOrderNumber] = useState('');
  
  useEffect(() => {
    // Generate a random order number
    const random = Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(`ORD-${random}`);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Navbar />
      
      <main className="flex-1 pt-8">
        <div className="bazaar-container py-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full animate-ping bg-bazaar-red/30"></div>
                <CheckCircle size={80} className="text-bazaar-red relative" />
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Thank You for Your Order!
            </h1>
            
            <p className="text-xl mb-2">Your order has been placed successfully.</p>
            <p className="text-muted-foreground mb-10">
              Order number: <span className="font-semibold text-foreground">{orderNumber}</span>
            </p>
            
            {/* Order Timeline */}
            <div className="bg-white p-8 rounded-lg shadow-sm border mb-10">
              <h2 className="text-xl font-semibold mb-6">Order Timeline</h2>
              
              <div className="flex items-start">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-bazaar-red text-white flex items-center justify-center">
                    <CheckCircle size={20} />
                  </div>
                  <div className="h-16 w-0.5 bg-bazaar-red/20"></div>
                </div>
                <div className="ml-4 pb-8">
                  <h3 className="font-medium">Order Confirmed</h3>
                  <p className="text-sm text-muted-foreground">We've received your order and payment.</p>
                  <p className="text-xs text-muted-foreground mt-1">June 15, 2023 • 10:30 AM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-muted text-muted-foreground flex items-center justify-center">
                    <Box size={20} />
                  </div>
                  <div className="h-16 w-0.5 bg-muted"></div>
                </div>
                <div className="ml-4 pb-8">
                  <h3 className="font-medium text-muted-foreground">Processing</h3>
                  <p className="text-sm text-muted-foreground">Your order is being prepared for shipping.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-muted text-muted-foreground flex items-center justify-center">
                    <Truck size={20} />
                  </div>
                  <div className="h-16 w-0.5 bg-muted"></div>
                </div>
                <div className="ml-4 pb-8">
                  <h3 className="font-medium text-muted-foreground">Shipped</h3>
                  <p className="text-sm text-muted-foreground">Your package is on its way to you.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-muted text-muted-foreground flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-muted-foreground">Delivered</h3>
                  <p className="text-sm text-muted-foreground">Package delivered to your address.</p>
                </div>
              </div>
            </div>
            
            {/* What's Next */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-bazaar-red/10 flex items-center justify-center text-bazaar-red">
                    <Truck size={24} />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Shipping Updates</h3>
                <p className="text-sm text-muted-foreground">
                  We'll send you shipping confirmation and tracking details via email.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-bazaar-peacock/10 flex items-center justify-center text-bazaar-peacock">
                    <ShoppingBag size={24} />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Order Management</h3>
                <p className="text-sm text-muted-foreground">
                  Track your order or manage returns from your account dashboard.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-bazaar-saffron/10 flex items-center justify-center text-bazaar-saffron">
                    <Award size={24} />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Share & Earn</h3>
                <p className="text-sm text-muted-foreground">
                  Share your purchase on social media and earn reward points!
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="px-6 py-3 bg-bazaar-red text-white font-medium rounded-md hover:bg-bazaar-red/90 transition-colors flex items-center justify-center gap-2"
              >
                Continue Shopping
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/account"
                className="px-6 py-3 bg-white border border-bazaar-red/20 text-foreground font-medium rounded-md hover:bg-bazaar-red/5 transition-colors"
              >
                View My Orders
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderSuccess;
