
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ShippingPolicy = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      
      <main className="flex-1 pt-24">
        <div className="bazaar-container py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">Shipping Policy</h1>
            
            <div className="space-y-6 text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">Delivery Timeframes</h2>
                <p>All orders are processed within 1-2 business days. Orders are not shipped on weekends or holidays. If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery.</p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">Shipping Rates & Delivery Times</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Free shipping on all orders above ₹599</li>
                  <li>Standard shipping (5-7 business days): ₹99</li>
                  <li>Express shipping (2-3 business days): ₹199</li>
                  <li>Next-day delivery (order before 2 PM): ₹349 (Available only in select metro cities)</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">Shipment Confirmation & Order Tracking</h2>
                <p>You will receive a shipment confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.</p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">Customs, Duties, and Taxes</h2>
                <p>ArtisanBazaar is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.).</p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">Damages</h2>
                <p>ArtisanBazaar is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim.</p>
                <p className="mt-2">Please save all packaging materials and damaged goods before filing a claim.</p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">International Shipping</h2>
                <p>We currently ship to select countries internationally. International shipping rates vary by location and order value. Estimated delivery time is 10-15 business days, depending on the destination country.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ShippingPolicy;
