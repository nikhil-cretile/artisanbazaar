
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Artisans from "./pages/Artisans";
import About from "./pages/About";
import CategoryDetail from "./pages/CategoryDetail";
import ProductDetail from "./pages/ProductDetail";
import ArtisanDetail from "./pages/ArtisanDetail";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import NotFound from "./pages/NotFound";
import NewArrivals from "./pages/NewArrivals";
import Deals from "./pages/Deals";
import Wishlist from "./pages/Wishlist";
import Account from "./pages/Account";
import PaymentGateway from "./pages/PaymentGateway";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/artisans" element={<Artisans />} />
          <Route path="/about" element={<About />} />
          <Route path="/category/:id" element={<CategoryDetail />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/artisan/:id" element={<ArtisanDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/account" element={<Account />} />
          <Route path="/payment" element={<PaymentGateway />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
