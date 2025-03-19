
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  User, Package, Heart, CreditCard, LogOut, Settings, 
  ShoppingBag, MapPin, ChevronRight, Bell
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Account = () => {
  const [cartItemsCount] = useState(0);
  
  // This would normally be fetched from a backend
  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    joined: "January 2023"
  };
  
  // Mock data for orders
  const orders = [
    { 
      id: "ORD-123456",
      date: "14 June 2023",
      amount: "₹4,250.00",
      status: "Delivered",
      items: 3
    },
    { 
      id: "ORD-789012",
      date: "2 May 2023",
      amount: "₹1,820.00",
      status: "Delivered",
      items: 2
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Navbar cartItemsCount={cartItemsCount} />
      
      <main className="flex-1">
        <div className="bazaar-container py-12">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-display font-bold mb-2">My Account</h1>
            <p className="text-muted-foreground">
              Manage your account details, orders, and preferences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* User info */}
                <div className="p-4 border-b flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-bazaar-red/10 flex items-center justify-center text-bazaar-red">
                    <User size={24} />
                  </div>
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-muted-foreground">{user.email}</div>
                  </div>
                </div>
                
                {/* Navigation */}
                <nav className="p-2">
                  <div className="px-2 py-3 text-sm font-medium text-muted-foreground">Account</div>
                  <ul className="space-y-1">
                    <li>
                      <Link to="/account" className="flex items-center gap-3 px-3 py-2 rounded-md bg-muted text-foreground font-medium">
                        <User size={18} />
                        <span>Profile</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/orders" className="flex items-center gap-3 px-3 py-2 rounded-md text-foreground hover:bg-muted transition-colors">
                        <Package size={18} />
                        <span>Orders</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/wishlist" className="flex items-center gap-3 px-3 py-2 rounded-md text-foreground hover:bg-muted transition-colors">
                        <Heart size={18} />
                        <span>Wishlist</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/account/addresses" className="flex items-center gap-3 px-3 py-2 rounded-md text-foreground hover:bg-muted transition-colors">
                        <MapPin size={18} />
                        <span>Addresses</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/account/payment" className="flex items-center gap-3 px-3 py-2 rounded-md text-foreground hover:bg-muted transition-colors">
                        <CreditCard size={18} />
                        <span>Payment Methods</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/account/notifications" className="flex items-center gap-3 px-3 py-2 rounded-md text-foreground hover:bg-muted transition-colors">
                        <Bell size={18} />
                        <span>Notifications</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/account/settings" className="flex items-center gap-3 px-3 py-2 rounded-md text-foreground hover:bg-muted transition-colors">
                        <Settings size={18} />
                        <span>Settings</span>
                      </Link>
                    </li>
                    <li>
                      <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-foreground hover:bg-muted transition-colors">
                        <LogOut size={18} />
                        <span>Logout</span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:col-span-2 lg:col-span-3">
              <Tabs defaultValue="profile">
                <TabsList className="mb-6 bg-white">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="orders">Recent Orders</TabsTrigger>
                  <TabsTrigger value="preferences">Preferences</TabsTrigger>
                </TabsList>
                
                <TabsContent value="profile" className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" value={user.name} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" value={user.email} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" value={user.phone} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="birthday">Birthday</Label>
                      <Input id="birthday" type="date" className="mt-1" />
                    </div>
                  </div>
                  
                  <div className="border-t mt-8 pt-6">
                    <Button className="bg-bazaar-red hover:bg-bazaar-red/90">Save Changes</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="orders" className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{order.id}</h3>
                            <span className="text-sm text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                              {order.status}
                            </span>
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            Placed on {order.date} • {order.items} items • {order.amount}
                          </div>
                        </div>
                        <Link 
                          to={`/orders/${order.id}`}
                          className="flex items-center text-sm font-medium text-bazaar-peacock hover:underline"
                        >
                          View Details
                          <ChevronRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-4 text-center">
                    <Link 
                      to="/orders"
                      className="inline-block text-bazaar-peacock hover:text-bazaar-peacock/80 font-medium"
                    >
                      View All Orders
                    </Link>
                  </div>
                </TabsContent>
                
                <TabsContent value="preferences" className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-6">Communication Preferences</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Email Notifications</h3>
                        <p className="text-sm text-muted-foreground">
                          Receive updates about your orders and products
                        </p>
                      </div>
                      <div className="flex items-center h-6">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-bazaar-red focus:ring-bazaar-red"
                          defaultChecked
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Marketing Emails</h3>
                        <p className="text-sm text-muted-foreground">
                          Receive special offers, discounts and promotions
                        </p>
                      </div>
                      <div className="flex items-center h-6">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-bazaar-red focus:ring-bazaar-red"
                          defaultChecked
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">SMS Notifications</h3>
                        <p className="text-sm text-muted-foreground">
                          Receive order updates via text message
                        </p>
                      </div>
                      <div className="flex items-center h-6">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-bazaar-red focus:ring-bazaar-red"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t mt-8 pt-6">
                    <Button className="bg-bazaar-red hover:bg-bazaar-red/90">Save Preferences</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Account;
