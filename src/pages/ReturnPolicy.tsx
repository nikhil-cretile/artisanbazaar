
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ReturnPolicy = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      
      <main className="flex-1 pt-24">
        <div className="bazaar-container py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">Return & Refund Policy</h1>
            
            <div className="space-y-6 text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">Returns</h2>
                <p>Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can't offer you a refund or exchange.</p>
                <p className="mt-2">To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">Refunds</h2>
                <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</p>
                <p className="mt-2">If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within 7-10 business days.</p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">Late or Missing Refunds</h2>
                <p>If you haven't received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted.</p>
                <p className="mt-2">Next contact your bank. There is often some processing time before a refund is posted. If you've done all of this and you still have not received your refund yet, please contact us at support@artisanbazaar.com.</p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">Exchanges</h2>
                <p>We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at support@artisanbazaar.com and we will guide you through the process.</p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">Shipping</h2>
                <p>To return your product, you should mail your product to: 123 Crafts Street, Artisan Market, New Delhi, India - 110001.</p>
                <p className="mt-2">You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ReturnPolicy;
