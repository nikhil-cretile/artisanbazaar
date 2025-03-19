
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';

const OrderSuccess = () => {
  const [orderNumber, setOrderNumber] = useState('');
  
  useEffect(() => {
    // Generate a random order number
    const random = Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(`ORD-${random}`);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <div className="bazaar-container py-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <CheckCircle size={80} className="text-bazaar-emerald" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Thank You for Your Order!
            </h1>
            
            <p className="text-xl mb-2">Your order has been placed successfully.</p>
            <p className="text-muted-foreground mb-6">
              Order number: <span className="font-semibold">{orderNumber}</span>
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
              <h2 className="text-xl font-semibold mb-4">What's Next?</h2>
              <p className="mb-4">
                We've sent a confirmation email with your order details. Our team 
                is already preparing your items for shipment.
              </p>
              <p>
                You'll receive another email with tracking information once your 
                order ships.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="px-6 py-3 bg-bazaar-red text-white font-medium rounded-md hover:bg-bazaar-red/90 transition-colors"
              >
                Continue Shopping
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 bg-white border border-bazaar-red/20 text-foreground font-medium rounded-md hover:bg-bazaar-red/5 transition-colors"
              >
                Learn More About Us
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
