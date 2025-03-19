
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CreditCard, Check, Lock, AlertCircle, ShieldCheck } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PaymentGateway = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [amount, setAmount] = useState("0");
  
  useEffect(() => {
    // This would normally come from the checkout page state/params
    // For demo purposes we'll just set a sample value
    setAmount("2,450.00");
  }, []);
  
  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      
      toast({
        title: "Payment successful",
        description: "Your payment has been processed successfully.",
        duration: 5000,
      });
      
      // Clear cart
      localStorage.removeItem('cart');
      
      // Redirect to order success page
      navigate('/order-success');
    }, 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Navbar />
      
      <main className="flex-1">
        <div className="bazaar-container py-12 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="mb-4 inline-flex items-center justify-center bg-bazaar-peacock/10 rounded-full p-3">
              <CreditCard size={24} className="text-bazaar-peacock" />
            </div>
            <h1 className="text-2xl md:text-3xl font-display font-bold mb-2">Secure Payment</h1>
            <p className="text-muted-foreground">
              Complete your purchase securely with our trusted payment gateway
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Order Summary */}
            <div className="bg-muted/20 border-b p-6">
              <h2 className="text-lg font-medium mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Subtotal</span>
                <span>₹{amount}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-emerald-600">Free</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Tax</span>
                <span>₹0.00</span>
              </div>
              <div className="flex justify-between font-medium text-lg border-t mt-3 pt-3">
                <span>Total</span>
                <span>₹{amount}</span>
              </div>
            </div>
            
            {/* Payment Methods */}
            <div className="p-6">
              <Tabs defaultValue="card">
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="card">Credit Card</TabsTrigger>
                  <TabsTrigger value="upi">UPI</TabsTrigger>
                  <TabsTrigger value="wallet">Wallet</TabsTrigger>
                </TabsList>
                
                <TabsContent value="card">
                  <form onSubmit={handlePayment}>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input 
                          id="cardName" 
                          placeholder="John Doe" 
                          className="mt-1" 
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <div className="relative mt-1">
                          <Input 
                            id="cardNumber" 
                            placeholder="1234 5678 9012 3456" 
                            required
                          />
                          <div className="absolute right-3 top-2.5">
                            <div className="flex space-x-1">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/120px-Mastercard-logo.svg.png" alt="Mastercard" className="h-5 w-auto" />
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/120px-Visa_Inc._logo.svg.png" alt="Visa" className="h-5 w-auto" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input 
                            id="expiry" 
                            placeholder="MM/YY" 
                            className="mt-1" 
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input 
                            id="cvv" 
                            placeholder="123" 
                            className="mt-1" 
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <Button 
                          type="submit" 
                          className="w-full bg-bazaar-red hover:bg-bazaar-red/90 h-12"
                          disabled={isProcessing}
                        >
                          {isProcessing ? (
                            <span className="flex items-center">
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Processing Payment...
                            </span>
                          ) : (
                            <span className="flex items-center">
                              <Lock size={16} className="mr-2" />
                              Pay Securely ₹{amount}
                            </span>
                          )}
                        </Button>
                      </div>
                    </div>
                  </form>
                </TabsContent>
                
                <TabsContent value="upi">
                  <div className="text-center p-6">
                    <div className="mb-6">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png" 
                        alt="UPI Logo" 
                        className="h-12 mx-auto mb-4"
                      />
                      <p className="text-muted-foreground mb-4">
                        Pay using any UPI app like Google Pay, PhonePe, Paytm, etc.
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <Label htmlFor="upiId">Enter UPI ID</Label>
                      <Input 
                        id="upiId" 
                        placeholder="yourname@upi" 
                        className="mt-2 max-w-xs mx-auto"
                      />
                    </div>
                    
                    <Button 
                      className="bg-bazaar-red hover:bg-bazaar-red/90"
                      onClick={handlePayment}
                    >
                      Pay ₹{amount}
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="wallet">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
                    <button className="aspect-video border rounded-lg p-4 hover:border-bazaar-red hover:bg-bazaar-red/5 transition-colors flex flex-col items-center justify-center gap-2">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/120px-Paytm_Logo_%28standalone%29.svg.png" alt="Paytm" className="h-8" />
                      <span className="text-sm">Paytm</span>
                    </button>
                    
                    <button className="aspect-video border rounded-lg p-4 hover:border-bazaar-red hover:bg-bazaar-red/5 transition-colors flex flex-col items-center justify-center gap-2">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Amazon_Pay_logo.svg/120px-Amazon_Pay_logo.svg.png" alt="Amazon Pay" className="h-8" />
                      <span className="text-sm">Amazon Pay</span>
                    </button>
                    
                    <button className="aspect-video border rounded-lg p-4 hover:border-bazaar-red hover:bg-bazaar-red/5 transition-colors flex flex-col items-center justify-center gap-2">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/PhonePe_logo.png/120px-PhonePe_logo.png" alt="PhonePe" className="h-8" />
                      <span className="text-sm">PhonePe</span>
                    </button>
                    
                    <button className="aspect-video border rounded-lg p-4 hover:border-bazaar-red hover:bg-bazaar-red/5 transition-colors flex flex-col items-center justify-center gap-2">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Google_Pay_Logo.svg/120px-Google_Pay_Logo.svg.png" alt="Google Pay" className="h-8" />
                      <span className="text-sm">Google Pay</span>
                    </button>
                  </div>
                  
                  <div className="p-4 text-center">
                    <Button 
                      className="bg-bazaar-red hover:bg-bazaar-red/90 mt-4"
                      onClick={handlePayment}
                    >
                      Continue
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Security Info */}
            <div className="bg-muted/10 border-t p-4 text-center text-sm text-muted-foreground">
              <div className="flex justify-center items-center mb-2 gap-2">
                <Lock size={14} />
                <span>Secure Payment</span>
                <ShieldCheck size={14} />
                <span>100% Safe</span>
              </div>
              <p>Your payment information is encrypted and secure. We don't store your card details.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PaymentGateway;
