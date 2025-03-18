
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
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
    image: "https://images.unsplash.com/photo-1608826001897-8056a9072d51?q=80&w=600&auto=format&fit=crop",
    description: "Exquisite handcrafted items made by skilled artisans",
    count: 42
  },
  {
    id: "cat2",
    name: "Textiles",
    image: "https://images.unsplash.com/photo-1582903222004-ca840217b7a0?q=80&w=600&auto=format&fit=crop",
    description: "Traditional fabrics, sarees, and garments",
    count: 36
  },
  {
    id: "cat3",
    name: "Pottery",
    image: "https://images.unsplash.com/photo-1554866585-41f1e3e80b82?q=80&w=600&auto=format&fit=crop",
    description: "Beautiful clay pottery and ceramics",
    count: 28
  },
  {
    id: "cat4",
    name: "Sweets & Snacks",
    image: "https://images.unsplash.com/photo-1611517976210-3a21742307c6?q=80&w=600&auto=format&fit=crop",
    description: "Authentic Indian sweets, snacks, and delicacies",
    count: 31
  },
  {
    id: "cat5",
    name: "Jewelry",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647ce2ef6?q=80&w=600&auto=format&fit=crop",
    description: "Traditional and contemporary jewelry pieces",
    count: 35
  },
  {
    id: "cat6",
    name: "Home Decor",
    image: "https://images.unsplash.com/photo-1594041680539-afac862af209?q=80&w=600&auto=format&fit=crop",
    description: "Decorative items to add cultural flair to your spaces",
    count: 45
  }
];

export const artisans: Artisan[] = [
  {
    id: "art1",
    name: "Ranjana Devi",
    location: "Jaipur, Rajasthan",
    specialty: "Block Printing",
    bio: "Ranjana Devi continues her family's 300-year-old tradition of block printing, creating exquisite textiles using hand-carved wooden blocks and natural dyes.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1569069109645-63f2a8ccc8a8?q=80&w=600&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?q=80&w=600&auto=format&fit=crop",
    rating: 4.9,
    products: 18
  }
];

export const products: Product[] = [
  {
    id: "prod1",
    name: "Handwoven Banarasi Silk Saree",
    description: "Exquisite silk saree with intricate golden zari work, crafted by master weavers in Varanasi",
    price: 12500,
    image: "https://images.unsplash.com/photo-1610186634258-5e952af3d2de?q=80&w=600&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1562847961-8f766d7ba8eb?q=80&w=600&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1579762593175-20226054cad0?q=80&w=600&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1633541825711-44e4d1dd1f84?q=80&w=600&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1603792959936-8ce68fc748c7?q=80&w=600&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1576937892519-93d11c3a42f5?q=80&w=600&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1576678433413-202829a1ab98?q=80&w=600&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1605195531959-391eed2f45e1?q=80&w=600&auto=format&fit=crop",
    category: "Sweets & Snacks",
    artisanId: "art3",
    rating: 4.9,
    reviews: 173,
    featured: true
  }
];

export type CartItem = {
  product: Product;
  quantity: number;
};

// Helper functions
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
