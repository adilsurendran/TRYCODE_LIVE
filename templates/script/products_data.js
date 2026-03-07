const products = [
  {
    id: 1,
    name: "Floral Midi Dress",
    category: "Products • Casual",
    price: 1499,
    originalPrice: 2499,
    rating: 4.6,
    manufacturer: "Loft Originals Co.",
    companyDetails: "Loft Originals Co. is a premium fashion house based in Kerala, specializing in eco-friendly and sustainable fabrics. With over 10 years of experience, they blend traditional craftsmanship with modern designs.",
    description: "A beautiful floral midi dress perfect for summer outings. Made from high-quality breathable fabric to keep you comfortable all day long.",
    images: [
      "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    reviews: [
      { user: "Aditi S.", rating: 5, comment: "Love the fit and the fabric!", date: "2026-03-01" },
      { user: "Meera K.", rating: 4, comment: "Beautiful colors, slightly tight on the waist.", date: "2026-02-28" }
    ]
  },
  {
    id: 2,
    name: "Men Linen Shirt",
    category: "Men • Summer",
    price: 999,
    originalPrice: 1999,
    rating: 4.5,
    manufacturer: "Vanta Trends",
    companyDetails: "Vanta Trends is known for its minimalist and high-performance garments. They focus on versatile styles that transition seamlessly from work to play, using premium textiles sourced from around the globe.",
    description: "Lightweight and stylish linen shirt for men. Ideal for casual wear or beach vacations.",
    images: [
      "https://5.imimg.com/data5/KK/YQ/MY-10139824/mens-linen-casual-shirt.jpg",
      "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    reviews: [
      { user: "Rahul M.", rating: 5, comment: "Perfect for the summer heat.", date: "2026-03-02" }
    ]
  },
  {
    id: 3,
    name: "Kids Denim Set",
    category: "Kids • Trendy",
    price: 1199,
    originalPrice: 1599,
    rating: 4.7,
    manufacturer: "Little Loft",
    companyDetails: "Little Loft focuses on child-safe materials and vibrant designs. Their mission is to create durable clothing that can withstand the adventures of childhood while keeping kids stylish and comfortable.",
    description: "Durable denim set for kids. Includes a stylish jacket and matching pants.",
    images: [
      "https://jujujam.in/cdn/shop/files/Denim_on_Denim_Boys_and_Girls_Classy_Co-ord_Set_3.jpg?v=1754491490&width=1100",
      "https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1094084/pexels-photo-1094084.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    reviews: [
      { user: "Sneha P.", rating: 5, comment: "My son looks so cool in this!", date: "2026-03-03" }
    ]
  },
  {
    id: 4,
    name: "Satin Party Dress",
    category: "Products • Party",
    price: 1899,
    originalPrice: 2999,
    rating: 4.7,
    manufacturer: "Loft Originals Co.",
    companyDetails: "Loft Originals Co. is a premium fashion house based in Kerala, specializing in eco-friendly and sustainable fabrics. With over 10 years of experience, they blend traditional craftsmanship with modern designs.",
    description: "Elegant satin dress for evening parties. Smooth texture and a flattering silhouette.",
    images: [
      "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3387507/pexels-photo-3387507.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    reviews: [
      { user: "Priya R.", rating: 5, comment: "Absolutely stunning dress!", date: "2026-03-04" }
    ]
  },
  {
    id: 5,
    name: "Cotton Crew Tee",
    category: "Men • Casual",
    price: 699,
    originalPrice: 999,
    rating: 4.5,
    manufacturer: "Basic Wear",
    companyDetails: "Basic Wear is dedicated to perfecting the essentials. They believe that high-quality basics are the foundation of every great wardrobe, focusing on fit, fabric, and longevity.",
    description: "Classic cotton crew neck tee. Essential for every wardrobe.",
    images: [
      "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2983463/pexels-photo-2983463.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/634785/pexels-photo-634785.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    reviews: [
      { user: "Arjun V.", rating: 4, comment: "Good quality for the price.", date: "2026-03-04" }
    ]
  },
  {
    id: 6,
    name: "Kids Summer Set",
    category: "Kids • Comfort",
    price: 899,
    originalPrice: 1299,
    rating: 4.6,
    manufacturer: "Little Loft",
    companyDetails: "Little Loft focuses on child-safe materials and vibrant designs. Their mission is to create durable clothing that can withstand the adventures of childhood while keeping kids stylish and comfortable.",
    description: "Breathable cotton summer set for kids. Keep them cool and active.",
    images: [
      "https://tse4.mm.bing.net/th/id/OIP.eJ4mIEzm5rAG0JqS6Ucn4gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://images.pexels.com/photos/1619698/pexels-photo-1619698.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3661247/pexels-photo-3661247.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    reviews: [
      { user: "Deepa S.", rating: 5, comment: "Very soft fabric.", date: "2026-03-05" }
    ]
  },
  {
    id: 7,
    name: "Streetwear Hoodie",
    category: "Unisex • Street",
    price: 1399,
    originalPrice: 2199,
    rating: 4.4,
    manufacturer: "Vanta Trends",
    companyDetails: "Vanta Trends is known for its minimalist and high-performance garments. They focus on versatile styles that transition seamlessly from work to play, using premium textiles sourced from around the globe.",
    description: "Trendy oversized hoodie for a relaxed streetwear look.",
    images: [
      "https://i.pinimg.com/736x/10/de/a8/10dea87e4b1d052e4f1f16f877e13fe0.jpg",
      "https://images.pexels.com/photos/702350/pexels-photo-702350.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    reviews: []
  },
  {
    id: 8,
    name: "Oversized Hoodie",
    category: "Unisex • Street",
    price: 1299,
    originalPrice: 1999,
    rating: 4.4,
    manufacturer: "Vanta Trends",
    companyDetails: "Vanta Trends is known for its minimalist and high-performance garments. They focus on versatile styles that transition seamlessly from work to play, using premium textiles sourced from around the globe.",
    description: "Comfortable oversized hoodie with a modern design.",
    images: [
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?auto=format&fit=crop&w=1200&q=80",
      "https://images.pexels.com/photos/6311607/pexels-photo-6311607.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/459486/pexels-photo-459486.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    reviews: []
  },
  {
    id: 9,
    name: "Blazer Co-ord Set",
    category: "Products • Formal",
    price: 2499,
    originalPrice: 3999,
    rating: 4.6,
    manufacturer: "Formal Loft",
    companyDetails: "Formal Loft provides executive-level attire for the modern professional. Their designs emphasize sharp tailoring and premium finish to boost confidence in the workplace.",
    description: "Professional blazer co-ord set for Products. Perfect for office and meetings.",
    images: [
      "https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/7622259/pexels-photo-7622259.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    reviews: []
  },
  {
    id: 10,
    name: "Denim Jacket",
    category: "Men • Street",
    price: 1799,
    originalPrice: 2999,
    rating: 4.5,
    manufacturer: "Vanta Trends",
    companyDetails: "Vanta Trends is known for its minimalist and high-performance garments. They focus on versatile styles that transition seamlessly from work to play, using premium textiles sourced from around the globe.",
    description: "Rugged denim jacket for men. A timeless addition to any outfit.",
    images: [
      "https://images.pexels.com/photos/2857037/pexels-photo-2857037.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3055456/pexels-photo-3055456.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1344839/pexels-photo-1344839.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    reviews: []
  },
  {
    id: 11,
    name: "Kids Kurta Set",
    category: "Kids • Ethnic",
    price: 1099,
    originalPrice: 1599,
    rating: 4.7,
    manufacturer: "Little Loft",
    companyDetails: "Little Loft focuses on child-safe materials and vibrant designs. Their mission is to create durable clothing that can withstand the adventures of childhood while keeping kids stylish and comfortable.",
    description: "Traditional kurta set for kids. Ideal for festivals and family functions.",
    images: [
      "https://images.pexels.com/photos/3667816/pexels-photo-3667816.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3661247/pexels-photo-3661247.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1619698/pexels-photo-1619698.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    reviews: []
  },
  {
    id: 12,
    name: "Chunky Sneakers",
    category: "Products • Footwear",
    price: 1599,
    originalPrice: 2599,
    rating: 4.5,
    manufacturer: "Loft Footwear",
    companyDetails: "Loft Footwear creates ergonomically designed shoes that don't compromise on style. They use advanced cushioning technology to ensure maximum comfort for long-lasting wear.",
    description: "Modern chunky sneakers for Products. Stylish and comfortable for everyday wear.",
    images: [
      "https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ],
    reviews: []
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = products;
}
