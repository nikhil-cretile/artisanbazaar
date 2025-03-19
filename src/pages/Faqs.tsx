
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      
      <main className="flex-1 pt-24">
        <div className="bazaar-container py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 text-center">Frequently Asked Questions</h1>
            
            <div className="mt-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">How do I track my order?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    You can track your order by logging into your account and navigating to the "My Orders" section. Alternatively, you can use the tracking link provided in your shipping confirmation email.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We accept all major credit cards, debit cards, UPI payments, net banking, and wallets including PayTM, PhonePe, and Google Pay. We also offer Cash on Delivery for orders under ₹10,000.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">Are the products handmade?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, all products on ArtisanBazaar are handcrafted by skilled artisans from across India. Each product is unique and made using traditional techniques passed down through generations.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium">How can I return a product?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    You can initiate a return within 30 days of receiving your order. Simply log into your account, go to "My Orders," select the order and click on "Return." Follow the instructions to complete the return process.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-lg font-medium">Do you ship internationally?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we ship to select countries worldwide. International shipping rates vary based on location and order value. Please note that customs duties and taxes may apply, which are the responsibility of the customer.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-lg font-medium">How long does shipping take?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Domestic shipping typically takes 5-7 business days for standard delivery, 2-3 days for express shipping, and 1 day for next-day delivery (available in select cities). International shipping can take 10-15 business days depending on the destination.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-lg font-medium">How do I contact customer service?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    You can reach our customer service team by email at support@artisanbazaar.com, by phone at +91 123 456 7890 (10 AM to 7 PM, Monday to Saturday), or through the live chat option on our website.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-lg font-medium">Are there any discounts for bulk orders?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we offer special pricing for bulk orders. Please contact our business team at business@artisanbazaar.com with your requirements for a customized quote.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Faqs;
