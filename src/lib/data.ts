export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number; // Added as optional property
  image: string;
  category: string;
  artisanId: string;
  rating: number;
  reviews: number;
  bestseller?: boolean;
  featured?: boolean;
  new?: boolean;
};

export type Artisan = {
  id: string;
  name: string;
  location: string;
  specialty: string;
  bio: string;
  image: string;
  featured?: boolean;
  rating: number;
  products: number;
};

export type Category = {
  id: string;
  name: string;
  image: string;
  description: string;
  count: number;
};

export const categories: Category[] = [
  {
    id: "cat1",
    name: "Handicrafts",
    image: "https://images.unsplash.com/photo-1590839335424-353cc9132771?q=80&w=800&auto=format&fit=crop",
    description: "Exquisite handcrafted items made by skilled artisans",
    count: 42
  },
  {
    id: "cat2",
    name: "Textiles",
    image: "https://images.unsplash.com/photo-1622892735236-a3c8f374cea0?q=80&w=800&auto=format&fit=crop",
    description: "Traditional fabrics, sarees, and garments",
    count: 36
  },
  {
    id: "cat3",
    name: "Pottery",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800&auto=format&fit=crop",
    description: "Beautiful clay pottery and ceramics",
    count: 28
  },
  {
    id: "cat4",
    name: "Sweets & Snacks",
    image: "https://images.unsplash.com/photo-1614948871270-f7b0a0d15581?q=80&w=800&auto=format&fit=crop",
    description: "Authentic Indian sweets, snacks, and delicacies",
    count: 31
  },
  {
    id: "cat5",
    name: "Jewelry",
    image: "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?q=80&w=800&auto=format&fit=crop",
    description: "Traditional and contemporary jewelry pieces",
    count: 35
  },
  {
    id: "cat6",
    name: "Home Decor",
    image: "https://images.unsplash.com/photo-1608716987742-7a5134d7d7b7?q=80&w=800&auto=format&fit=crop",
    description: "Decorative items to add cultural flair to your spaces",
    count: 45
  },
  {
    id: "cat7",
    name: "Clothing",
    image: "https://images.unsplash.com/photo-1592301933927-35b597393c0a?q=80&w=800&auto=format&fit=crop",
    description: "Traditional and fusion clothing for all occasions",
    count: 38
  },
  {
    id: "cat8",
    name: "Spices & Condiments",
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=800&auto=format&fit=crop",
    description: "Authentic Indian spices and condiments",
    count: 25
  }
];

export const artisans: Artisan[] = [
  {
    id: "art1",
    name: "Ranjana Devi",
    location: "Jaipur, Rajasthan",
    specialty: "Block Printing",
    bio: "Ranjana Devi continues her family's 300-year-old tradition of block printing, creating exquisite textiles using hand-carved wooden blocks and natural dyes.",
    image: "https://images.unsplash.com/photo-1594819047050-99defca82545?q=80&w=600&auto=format&fit=crop",
    featured: true,
    rating: 4.9,
    products: 32
  },
  {
    id: "art2",
    name: "Mohan Lal",
    location: "Varanasi, Uttar Pradesh",
    specialty: "Banarasi Silk Weaving",
    bio: "A master weaver for over four decades, Mohan Lal creates intricate Banarasi silk sarees using techniques passed down through generations.",
    image: "https://images.unsplash.com/photo-1585652757141-8837d676fac8?q=80&w=600&auto=format&fit=crop",
    featured: true,
    rating: 4.8,
    products: 24
  },
  {
    id: "art3",
    name: "Lakshmi Narayan",
    location: "Mathura, Uttar Pradesh",
    specialty: "Traditional Sweets",
    bio: "Lakshmi's family has been making traditional sweets for over five generations, preserving authentic recipes and techniques.",
    image: "https://images.unsplash.com/photo-1542367787-4861f0e38d3d?q=80&w=600&auto=format&fit=crop",
    rating: 4.9,
    products: 18
  },
  {
    id: "art4",
    name: "Sharma Rao",
    location: "Jaipur, Rajasthan",
    specialty: "Meenakari Jewelry",
    bio: "With over 25 years of experience, Sharma Rao is a master craftsman specializing in the ancient art of Meenakari, creating stunning jewelry with intricate enamel work.",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=600&auto=format&fit=crop",
    featured: true,
    rating: 4.7,
    products: 22
  },
  {
    id: "art5",
    name: "Neela Gupta",
    location: "Agra, Uttar Pradesh",
    specialty: "Marble Inlay Work",
    bio: "Neela Gupta learned the art of marble inlay from her father, who worked on the restoration of the Taj Mahal. Her intricate designs honor this centuries-old tradition.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    rating: 4.8,
    products: 15
  }
];

export const products: Product[] = [
  {
    id: "prod1",
    name: "Handwoven Banarasi Silk Saree",
    description: "Exquisite silk saree with intricate golden zari work, crafted by master weavers in Varanasi",
    price: 12500,
    image: "https://images.unsplash.com/photo-1623000751941-1083af430e6b?q=80&w=600&auto=format&fit=crop",
    category: "Textiles",
    artisanId: "art2",
    rating: 4.9,
    reviews: 127,
    featured: true
  },
  {
    id: "prod2",
    name: "Blue Pottery Tea Set",
    description: "Hand-painted blue pottery tea set featuring intricate floral patterns, made in Jaipur",
    price: 3200,
    image: "https://images.unsplash.com/photo-1530018352490-c6eef07fd7e0?q=80&w=600&auto=format&fit=crop",
    category: "Pottery",
    artisanId: "art1",
    rating: 4.7,
    reviews: 89,
    bestseller: true
  },
  {
    id: "prod3",
    name: "Madhubani Painting - Tree of Life",
    description: "Authentic Madhubani painting depicting the Tree of Life, created using natural dyes on handmade paper",
    price: 4500,
    image: "https://images.unsplash.com/photo-1605101100278-5d1deb2b6498?q=80&w=600&auto=format&fit=crop",
    category: "Handicrafts",
    artisanId: "art1",
    rating: 4.8,
    reviews: 62,
    featured: true
  },
  {
    id: "prod4",
    name: "Traditional Besan Laddu (500g)",
    description: "Authentic homemade besan laddus made with ghee, gram flour, and sugar, prepared with a traditional recipe",
    price: 450,
    image: "https://images.unsplash.com/photo-1589466080748-d1504e9f11ea?q=80&w=600&auto=format&fit=crop",
    category: "Sweets & Snacks",
    artisanId: "art3",
    rating: 4.9,
    reviews: 214,
    bestseller: true
  },
  {
    id: "prod5",
    name: "Handcrafted Brass Diya Set",
    description: "Set of 5 intricately designed brass diyas for festive occasions and home decor",
    price: 1800,
    image: "https://images.unsplash.com/photo-1604823419645-5ff5a3a2e856?q=80&w=600&auto=format&fit=crop",
    category: "Home Decor",
    artisanId: "art1",
    rating: 4.6,
    reviews: 73,
    featured: true
  },
  {
    id: "prod6",
    name: "Silver Anklet with Bells",
    description: "Traditional silver anklet featuring tiny bells that create a melodious sound with movement",
    price: 2200,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop",
    category: "Jewelry",
    artisanId: "art2",
    rating: 4.8,
    reviews: 91,
    new: true
  },
  {
    id: "prod7",
    name: "Hand Block Printed Bedsheet Set",
    description: "Cotton bedsheet set with two pillow covers, featuring traditional Rajasthani block printed designs",
    price: 2800,
    image: "https://images.unsplash.com/photo-1583953729307-a4a440b0bc9b?q=80&w=600&auto=format&fit=crop",
    category: "Textiles",
    artisanId: "art1",
    rating: 4.7,
    reviews: 118,
    bestseller: true
  },
  {
    id: "prod8",
    name: "Kaju Katli Sweet Box (400g)",
    description: "Premium diamond-shaped sweets made from cashews, sugar, and cardamom, perfect for gifting",
    price: 650,
    image: "https://images.unsplash.com/photo-1615487978845-681e8bf1fe54?q=80&w=600&auto=format&fit=crop",
    category: "Sweets & Snacks",
    artisanId: "art3",
    rating: 4.9,
    reviews: 173,
    featured: true
  },
  {
    id: "prod9",
    name: "Meenakari Pendant Necklace",
    description: "Stunning gold-plated pendant with traditional Meenakari enamel work, handcrafted by skilled artisans",
    price: 3650,
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=600&auto=format&fit=crop",
    category: "Jewelry",
    artisanId: "art4",
    rating: 4.8,
    reviews: 58,
    new: true,
    featured: true
  },
  {
    id: "prod10",
    name: "Marble Elephant Figurine",
    description: "Elegant marble elephant with intricate inlay work using semi-precious stones, a perfect home accent",
    price: 4200,
    image: "https://images.unsplash.com/photo-1599619585752-c3edb42a414c?q=80&w=600&auto=format&fit=crop",
    category: "Home Decor",
    artisanId: "art5",
    rating: 4.7,
    reviews: 42,
    new: true
  },
  {
    id: "prod11",
    name: "Pashmina Wool Shawl",
    description: "Luxuriously soft Pashmina wool shawl with traditional embroidery, perfect for special occasions",
    price: 5800,
    image: "https://images.unsplash.com/photo-1594761051656-153faa48d523?q=80&w=600&auto=format&fit=crop",
    category: "Textiles",
    artisanId: "art2",
    rating: 4.9,
    reviews: 87,
    bestseller: true
  },
  {
    id: "prod12",
    name: "Handcrafted Wooden Chess Set",
    description: "Beautifully carved wooden chess set with intricate detailing, made from sustainable Indian rosewood",
    price: 3850,
    image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=600&auto=format&fit=crop",
    category: "Handicrafts",
    artisanId: "art1",
    rating: 4.8,
    reviews: 64,
    featured: true
  },
  {
    id: "prod13",
    name: "Clay Water Pot with Stand",
    description: "Traditional clay water pot that naturally cools water, complete with a decorative wooden stand",
    price: 1250,
    image: "https://images.unsplash.com/photo-1576004661646-61d7cbc4ddfc?q=80&w=600&auto=format&fit=crop",
    category: "Pottery",
    artisanId: "art5",
    rating: 4.6,
    reviews: 53,
    new: true
  },
  {
    id: "prod14",
    name: "Handmade Jaggery Candy (300g)",
    description: "Natural candy made from organic jaggery and select spices, a healthy alternative to refined sugar sweets",
    price: 320,
    image: "https://images.unsplash.com/photo-1597655601041-7c65d84ab8a9?q=80&w=600&auto=format&fit=crop",
    category: "Sweets & Snacks",
    artisanId: "art3",
    rating: 4.7,
    reviews: 95
  },
  {
    id: "prod15",
    name: "Silver Filigree Earrings",
    description: "Delicate silver filigree earrings showcasing the ancient art of intricate metalwork, lightweight and elegant",
    price: 1850,
    image: "https://images.unsplash.com/photo-1631965004544-1762fc696476?q=80&w=600&auto=format&fit=crop",
    category: "Jewelry",
    artisanId: "art4",
    rating: 4.9,
    reviews: 47,
    bestseller: true
  },
  {
    id: "prod16",
    name: "Hand-Embroidered Cushion Covers (Set of 2)",
    description: "Vibrant cushion covers featuring traditional hand embroidery with mirror work, adds a pop of color to any space",
    price: 1450,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop",
    category: "Home Decor",
    artisanId: "art1",
    rating: 4.8,
    reviews: 76,
    new: true
  },
  {
    id: "prod17",
    name: "Handwoven Cotton Kurta",
    description: "Comfortable handwoven cotton kurta with traditional block prints, perfect for casual wear",
    price: 1450,
    originalPrice: 1800,
    image: "https://images.unsplash.com/photo-1620381537132-31dd3101ac68?q=80&w=600&auto=format&fit=crop",
    category: "Clothing",
    artisanId: "art1",
    rating: 4.7,
    reviews: 68,
    new: true
  },
  {
    id: "prod18",
    name: "Embroidered Silk Shawl",
    description: "Luxurious silk shawl with intricate hand embroidery, adds elegance to any outfit",
    price: 3950,
    originalPrice: 4500,
    image: "https://images.unsplash.com/photo-1597983073453-ef06cfc2240e?q=80&w=600&auto=format&fit=crop",
    category: "Clothing",
    artisanId: "art2",
    rating: 4.9,
    reviews: 42,
    bestseller: true
  },
  {
    id: "prod19",
    name: "Men's Handloom Cotton Shirt",
    description: "Classic handloom cotton shirt with subtle texture, comfortable for everyday wear",
    price: 1850,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=600&auto=format&fit=crop",
    category: "Clothing",
    artisanId: "art2",
    rating: 4.6,
    reviews: 53
  },
  {
    id: "prod20",
    name: "Traditional Bandhani Dupatta",
    description: "Vibrant bandhani dupatta in pure cotton, featuring traditional tie-dye patterns",
    price: 1250,
    originalPrice: 1500,
    image: "https://images.unsplash.com/photo-1628944682084-831f35256238?q=80&w=600&auto=format&fit=crop",
    category: "Clothing",
    artisanId: "art1",
    rating: 4.8,
    reviews: 37,
    new: true
  },
  {
    id: "prod21",
    name: "Premium Garam Masala (100g)",
    description: "Aromatic blend of traditional spices, hand-ground and roasted to perfection",
    price: 350,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop",
    category: "Spices & Condiments",
    artisanId: "art3",
    rating: 4.9,
    reviews: 86,
    bestseller: true
  },
  {
    id: "prod22",
    name: "Organic Turmeric Powder (250g)",
    description: "Pure organic turmeric powder, grown without pesticides and hand-harvested",
    price: 280,
    originalPrice: 320,
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9027c4?q=80&w=600&auto=format&fit=crop",
    category: "Spices & Condiments",
    artisanId: "art3",
    rating: 4.8,
    reviews: 65
  },
  {
    id: "prod23",
    name: "Handcrafted Pickle Trio Set",
    description: "Set of three traditional pickles - mango, lemon, and mixed vegetable, made with authentic recipes",
    price: 850,
    image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?q=80&w=600&auto=format&fit=crop",
    category: "Spices & Condiments",
    artisanId: "art3",
    rating: 4.7,
    reviews: 42,
    new: true
  },
  {
    id: "prod24",
    name: "Temple Design Gold Plated Necklace",
    description: "Intricately designed temple jewelry inspired necklace, gold-plated with antique finish",
    price: 4250,
    originalPrice: 4800,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=600&auto=format&fit=crop",
    category: "Jewelry",
    artisanId: "art4",
    rating: 4.8,
    reviews: 39,
    featured: true
  },
  {
    id: "prod25",
    name: "Tribal Silver Cuff Bracelet",
    description: "Bold tribal design silver cuff bracelet, handcrafted by skilled silversmiths",
    price: 1950,
    image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&w=600&auto=format&fit=crop",
    category: "Jewelry",
    artisanId: "art4",
    rating: 4.7,
    reviews: 28,
    new: true
  },
  {
    id: "prod26",
    name: "Kundan Pearl Drop Earrings",
    description: "Elegant kundan earrings with pearl drops, perfect for traditional occasions",
    price: 2850,
    originalPrice: 3200,
    image: "https://images.unsplash.com/photo-1672246243648-23afd9995a04?q=80&w=600&auto=format&fit=crop",
    category: "Jewelry",
    artisanId: "art4",
    rating: 4.9,
    reviews: 53,
    bestseller: true
  },
  {
    id: "prod27",
    name: "Terracotta Wall Hanging Set",
    description: "Set of 3 decorative terracotta wall hangings with traditional motifs, handpainted",
    price: 1850,
    image: "https://images.unsplash.com/photo-1604409853888-950253930deb?q=80&w=600&auto=format&fit=crop",
    category: "Pottery",
    artisanId: "art5",
    rating: 4.6,
    reviews: 34,
    new: true
  },
  {
    id: "prod28",
    name: "Black Pottery Coffee Mug Set",
    description: "Set of 4 elegantly designed black pottery coffee mugs, microwave and dishwasher safe",
    price: 1450,
    originalPrice: 1800,
    image: "https://images.unsplash.com/photo-1530010645967-39de4cd1d6a8?q=80&w=600&auto=format&fit=crop",
    category: "Pottery",
    artisanId: "art5",
    rating: 4.8,
    reviews: 47,
    bestseller: true
  }
];

export type CartItem = {
  product: Product;
  quantity: number;
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categories.find(c => c.id === categoryId)?.name);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getBestsellerProducts = (): Product[] => {
  return products.filter(product => product.bestseller);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.new);
};

export const getProductsByArtisan = (artisanId: string): Product[] => {
  return products.filter(product => product.artisanId === artisanId);
};

export const getFeaturedArtisans = (): Artisan[] => {
  return artisans.filter(artisan => artisan.featured);
};

export const formatPrice = (price: number): string => {
  return `₹${price.toLocaleString('en-IN')}`;
};

export const saveCartToLocalStorage = (cartItems: CartItem[]): void => {
  localStorage.setItem('cart', JSON.stringify(cartItems));
};

export const loadCartFromLocalStorage = (): CartItem[] => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};

export const saveWishlistToLocalStorage = (products: Product[]): void => {
  localStorage.setItem('wishlist', JSON.stringify(products));
};

export const loadWishlistFromLocalStorage = (): Product[] => {
  const savedWishlist = localStorage.getItem('wishlist');
  return savedWishlist ? JSON.parse(savedWishlist) : [];
};

export type FilterOptions = {
  minPrice?: number;
  maxPrice?: number;
  categories?: string[];
  rating?: number;
  sortBy?: 'price-low-high' | 'price-high-low' | 'rating' | 'newest';
};

export const filterProducts = (allProducts: Product[], options: FilterOptions): Product[] => {
  return allProducts.filter(product => {
    if (options.minPrice !== undefined && product.price < options.minPrice) return false;
    if (options.maxPrice !== undefined && product.price > options.maxPrice) return false;
    
    if (options.categories && options.categories.length > 0 && !options.categories.includes(product.category)) return false;
    
    if (options.rating !== undefined && product.rating < options.rating) return false;
    
    return true;
  }).sort((a, b) => {
    if (!options.sortBy) return 0;
    
    switch (options.sortBy) {
      case 'price-low-high':
        return a.price - b.price;
      case 'price-high-low':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return a.new ? -1 : b.new ? 1 : 0;
      default:
        return 0;
    }
  });
};

export const calculateDiscount = (originalPrice: number, currentPrice: number): number => {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
};

export const getRelatedProducts = (product: Product, count: number = 4): Product[] => {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
};
