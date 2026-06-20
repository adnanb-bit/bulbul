export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  category: 'book' | 'bundle';
  size: 'B5' | 'A5';
  ageRange: string;
  skills: string[];
  whatsInside: string[];
  image: string;
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isLaunchSale: boolean;
  pairsWellWith: string[];
  faq: { question: string; answer: string }[];
}

export interface Bundle {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  products: string[];
  price: number;
  originalPrice: number;
  savings: number;
  image: string;
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isPopular?: boolean;
  badge?: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  productId?: string;
  date: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const products: Product[] = [
  {
    id: 'alphabets-busy-book',
    slug: 'alphabets-busy-book',
    name: 'Alphabets Busy Book',
    shortName: 'Alphabets',
    price: 1499,
    description: 'A comprehensive Montessori-inspired busy book that teaches children the alphabet through interactive velcro activities. Each page features a different letter with matching objects, tracing guides, and hands-on learning elements that keep little hands busy while building essential pre-literacy skills.',
    shortDescription: 'Your child masters A-Z through velcro matching and tracing — thinking it\'s just a game.',
    category: 'book',
    size: 'B5',
    ageRange: '2-6 years',
    skills: ['Letter Recognition', 'Fine Motor Skills', 'Vocabulary Building', 'Hand-Eye Coordination', 'Pre-Writing Skills', 'Cognitive Development'],
    whatsInside: ['26 interactive alphabet pages', 'Velcro letter matching activities', 'Tracing guides for each letter', 'Object-letter association games', 'Wipe-clean laminated pages', 'Storage pouch for velcro pieces'],
    image: '/placeholder-alphabets.jpg',
    images: ['/placeholder-alphabets.jpg', '/placeholder-alphabets-2.jpg', '/placeholder-alphabets-3.jpg'],
    rating: 4.9,
    reviewCount: 127,
    inStock: true,
    isLaunchSale: true,
    pairsWellWith: ['numbers-busy-book', 'colors-busy-book'],
    faq: [
      { question: 'What age is this suitable for?', answer: 'The Alphabets Busy Book is designed for children aged 2-6 years. Younger children enjoy the velcro matching, while older children benefit from the tracing activities.' },
      { question: 'Are the pages durable?', answer: 'Yes! All pages are laminated and wipe-clean, designed to withstand enthusiastic toddler use.' },
      { question: 'How many velcro pieces are included?', answer: 'The book includes 50+ velcro pieces stored in a convenient attached pouch.' },
    ],
  },
  {
    id: 'numbers-busy-book',
    slug: 'numbers-busy-book',
    name: 'Numbers Busy Book',
    shortName: 'Numbers',
    price: 1499,
    description: 'Make counting fun and tactile with our Numbers Busy Book. Children learn numbers 1-20 through interactive counting activities, number matching, and quantity recognition exercises. Perfect for building early math foundations through play.',
    shortDescription: 'Teaches counting 1-20 and number sense through hands-on play they can\'t put down.',
    category: 'book',
    size: 'B5',
    ageRange: '2-6 years',
    skills: ['Number Recognition', 'Counting Skills', 'Quantity Matching', 'Fine Motor Skills', 'Logical Thinking', 'Pattern Recognition'],
    whatsInside: ['20 interactive number pages', 'Counting velcro activities', 'Number-quantity matching games', 'Number tracing guides', 'Wipe-clean laminated pages', 'Storage pouch for velcro pieces'],
    image: '/placeholder-numbers.jpg',
    images: ['/placeholder-numbers.jpg', '/placeholder-numbers-2.jpg', '/placeholder-numbers-3.jpg'],
    rating: 4.8,
    reviewCount: 98,
    inStock: true,
    isLaunchSale: true,
    pairsWellWith: ['alphabets-busy-book', 'shapes-busy-book'],
    faq: [
      { question: 'Does it teach addition?', answer: 'The book focuses on number recognition and counting (1-20). It introduces basic quantity concepts that form the foundation for addition.' },
      { question: 'Can my 18-month-old use this?', answer: 'While designed for 2+, some 18-month-olds enjoy the velcro activities with parental guidance. The counting concepts are best suited for 2+ years.' },
    ],
  },
  {
    id: 'colors-busy-book',
    slug: 'colors-busy-book',
    name: 'Colors Busy Book',
    shortName: 'Colors',
    price: 1499,
    description: 'Explore the rainbow with our vibrant Colors Busy Book. Children learn to identify, match, and sort colors through engaging velcro activities. Each page features a different color with real-world objects, helping children connect colors to their everyday environment.',
    shortDescription: 'Children learn all 12 colors by sorting and matching — education wrapped in colorful fun.',
    category: 'book',
    size: 'B5',
    ageRange: '1.5-5 years',
    skills: ['Color Recognition', 'Sorting & Categorizing', 'Visual Discrimination', 'Fine Motor Skills', 'Vocabulary Building', 'Cognitive Development'],
    whatsInside: ['12 color-themed pages', 'Color matching velcro activities', 'Sorting exercises', 'Real-world object associations', 'Wipe-clean laminated pages', 'Storage pouch for velcro pieces'],
    image: '/placeholder-colors.jpg',
    images: ['/placeholder-colors.jpg', '/placeholder-colors-2.jpg', '/placeholder-colors-3.jpg'],
    rating: 4.9,
    reviewCount: 112,
    inStock: true,
    isLaunchSale: true,
    pairsWellWith: ['shapes-busy-book', 'fruits-vegetables-busy-book'],
    faq: [
      { question: 'How many colors are covered?', answer: 'The book covers 12 colors: red, blue, yellow, green, orange, purple, pink, brown, black, white, grey, and rainbow/multicolor.' },
      { question: 'Is this good for toddlers?', answer: 'Absolutely! This is one of our most popular books for younger toddlers (18 months+) as color recognition is one of the earliest concepts children grasp.' },
    ],
  },
  {
    id: 'shapes-busy-book',
    slug: 'shapes-busy-book',
    name: 'Shapes Busy Book',
    shortName: 'Shapes',
    price: 1499,
    description: 'Discover geometry through play with our Shapes Busy Book. Children learn basic and advanced shapes through matching, tracing, and real-world identification activities. Builds spatial awareness and visual discrimination skills essential for math readiness.',
    shortDescription: 'Builds geometry foundations and spatial thinking — disguised as a shape-matching game.',
    category: 'book',
    size: 'B5',
    ageRange: '2-6 years',
    skills: ['Shape Recognition', 'Spatial Awareness', 'Visual Discrimination', 'Fine Motor Skills', 'Problem Solving', 'Pre-Math Skills'],
    whatsInside: ['15 shape-themed pages', 'Shape matching velcro activities', 'Tracing exercises', 'Real-world shape hunting', 'Wipe-clean laminated pages', 'Storage pouch for velcro pieces'],
    image: '/placeholder-shapes.jpg',
    images: ['/placeholder-shapes.jpg', '/placeholder-shapes-2.jpg', '/placeholder-shapes-3.jpg'],
    rating: 4.8,
    reviewCount: 89,
    inStock: true,
    isLaunchSale: true,
    pairsWellWith: ['colors-busy-book', 'numbers-busy-book'],
    faq: [
      { question: 'What shapes are included?', answer: 'The book covers circle, square, triangle, rectangle, oval, diamond, star, heart, hexagon, pentagon, and more — 15 shapes in total.' },
      { question: 'Is this suitable for preschoolers?', answer: 'Yes! Preschoolers (3-5) benefit greatly from the tracing and identification activities that prepare them for school.' },
    ],
  },
  {
    id: 'fruits-vegetables-busy-book',
    slug: 'fruits-vegetables-busy-book',
    name: 'Fruits & Vegetables Busy Book',
    shortName: 'Fruits & Veg',
    price: 1499,
    description: 'Make healthy eating exciting with our Fruits & Vegetables Busy Book. Children learn to identify common fruits and vegetables, sort them by type, and understand where food comes from — all through interactive velcro play.',
    shortDescription: 'Teaches food groups, healthy eating, and categorization — through play they love.',
    category: 'book',
    size: 'B5',
    ageRange: '2-6 years',
    skills: ['Food Recognition', 'Categorization', 'Healthy Eating Awareness', 'Fine Motor Skills', 'Vocabulary Building', 'Nature Awareness'],
    whatsInside: ['16 food-themed pages', 'Fruit & vegetable matching', 'Sorting by category activities', 'Farm-to-table concepts', 'Wipe-clean laminated pages', 'Storage pouch for velcro pieces'],
    image: '/placeholder-fruits-veg.jpg',
    images: ['/placeholder-fruits-veg.jpg', '/placeholder-fruits-veg-2.jpg', '/placeholder-fruits-veg-3.jpg'],
    rating: 4.7,
    reviewCount: 76,
    inStock: true,
    isLaunchSale: true,
    pairsWellWith: ['animals-busy-book', 'colors-busy-book'],
    faq: [
      { question: 'Does it include Pakistani fruits?', answer: 'Yes! We\'ve included locally relevant fruits like mango, guava, and pomegranate alongside universal favorites.' },
      { question: 'Will this help my picky eater?', answer: 'Many parents report that familiarizing children with fruits and vegetables through play makes them more willing to try new foods!' },
    ],
  },
  {
    id: 'animals-busy-book',
    slug: 'animals-busy-book',
    name: 'Animals Busy Book',
    shortName: 'Animals',
    price: 1499,
    description: 'Explore the animal kingdom with our Animals Busy Book. Children learn about different animals, their habitats, sounds, and characteristics through engaging velcro activities. From farm animals to jungle creatures, this book brings the natural world to tiny hands.',
    shortDescription: 'Teaches 40+ animals, habitats, and sounds — the nature lesson they actually enjoy.',
    category: 'book',
    size: 'B5',
    ageRange: '2-6 years',
    skills: ['Animal Recognition', 'Habitat Awareness', 'Sound Association', 'Fine Motor Skills', 'Vocabulary Building', 'Nature Connection'],
    whatsInside: ['18 animal-themed pages', 'Habitat matching activities', 'Animal sound associations', 'Sorting by type exercises', 'Wipe-clean laminated pages', 'Storage pouch for velcro pieces'],
    image: '/placeholder-animals.jpg',
    images: ['/placeholder-animals.jpg', '/placeholder-animals-2.jpg', '/placeholder-animals-3.jpg'],
    rating: 4.9,
    reviewCount: 134,
    inStock: true,
    isLaunchSale: true,
    pairsWellWith: ['fruits-vegetables-busy-book', 'colors-busy-book'],
    faq: [
      { question: 'What types of animals are included?', answer: 'The book covers farm animals, jungle/safari animals, ocean creatures, birds, and insects — over 40 animals in total.' },
      { question: 'Is this educational or just play?', answer: 'Both! Children learn animal names, sounds, habitats, and characteristics while having fun with velcro activities. It\'s Montessori-inspired learning through play.' },
    ],
  },
];

export const bundles: Bundle[] = [
  {
    id: 'literacy-starter',
    slug: 'literacy-starter',
    name: 'The Literacy Starter',
    description: 'Perfect for building reading and math foundations. Includes our Alphabets and Numbers Busy Books — the two most essential pre-school prep books.',
    shortDescription: 'Alphabets + Numbers — Essential pre-school prep',
    products: ['alphabets-busy-book', 'numbers-busy-book'],
    price: 2499,
    originalPrice: 2998,
    savings: 499,
    image: '/placeholder-bundle-literacy.jpg',
    images: ['/placeholder-bundle-literacy.jpg'],
    rating: 4.9,
    reviewCount: 67,
    inStock: true,
    badge: 'Best for School Prep',
  },
  {
    id: 'sensory-explorer',
    slug: 'sensory-explorer',
    name: 'The Sensory Explorer',
    description: 'Develop visual discrimination and spatial awareness. Includes Colors and Shapes Busy Books — perfect for children who love sorting and pattern activities.',
    shortDescription: 'Colors + Shapes — Visual learning & spatial skills',
    products: ['colors-busy-book', 'shapes-busy-book'],
    price: 2499,
    originalPrice: 2998,
    savings: 499,
    image: '/placeholder-bundle-sensory.jpg',
    images: ['/placeholder-bundle-sensory.jpg'],
    rating: 4.8,
    reviewCount: 54,
    inStock: true,
    badge: 'Great for Toddlers',
  },
  {
    id: 'world-around-me',
    slug: 'world-around-me',
    name: 'The World Around Me',
    description: 'Connect children to the natural world. Includes Fruits & Vegetables and Animals Busy Books — ideal for curious minds who love nature and living things.',
    shortDescription: 'Fruits & Veg + Animals — Nature & world discovery',
    products: ['fruits-vegetables-busy-book', 'animals-busy-book'],
    price: 2499,
    originalPrice: 2998,
    savings: 499,
    image: '/placeholder-bundle-world.jpg',
    images: ['/placeholder-bundle-world.jpg'],
    rating: 4.8,
    reviewCount: 48,
    inStock: true,
    badge: 'Nature Lovers',
  },
  {
    id: 'anywhere-bundle',
    slug: 'anywhere-bundle',
    name: 'The Anywhere Bundle',
    description: 'Compact A5-sized books perfect for on-the-go learning. Take them to restaurants, car rides, doctor visits, or grandma\'s house. Same quality activities in a travel-friendly size.',
    shortDescription: '3 compact A5 books — Perfect for travel & on-the-go',
    products: [],
    price: 2999,
    originalPrice: 3999,
    savings: 1000,
    image: '/placeholder-bundle-anywhere.jpg',
    images: ['/placeholder-bundle-anywhere.jpg'],
    rating: 4.7,
    reviewCount: 39,
    inStock: true,
    badge: 'Travel Friendly',
  },
  {
    id: 'complete-collection',
    slug: 'complete-collection',
    name: 'The Complete Collection',
    description: 'Get all 6 B5 Busy Books and save Rs.2,495! The ultimate learning library that covers every essential early learning topic. Most popular choice for parents who want comprehensive development.',
    shortDescription: 'All 6 B5 books — Complete early learning library',
    products: ['alphabets-busy-book', 'numbers-busy-book', 'colors-busy-book', 'shapes-busy-book', 'fruits-vegetables-busy-book', 'animals-busy-book'],
    price: 6499,
    originalPrice: 8994,
    savings: 2495,
    image: '/placeholder-bundle-complete.jpg',
    images: ['/placeholder-bundle-complete.jpg'],
    rating: 5.0,
    reviewCount: 89,
    inStock: true,
    isPopular: true,
    badge: 'Best Value — Save 28%',
  },
  {
    id: 'ultimate-bundle',
    slug: 'ultimate-bundle',
    name: 'The Ultimate Bundle',
    description: 'Everything Bulbul offers in one package. All 6 B5 books plus the complete A5 travel set. Perfect for families who want learning at home AND on the go. Save over Rs.3,000!',
    shortDescription: 'All B5 + A5 books — Home & travel learning',
    products: ['alphabets-busy-book', 'numbers-busy-book', 'colors-busy-book', 'shapes-busy-book', 'fruits-vegetables-busy-book', 'animals-busy-book'],
    price: 8999,
    originalPrice: 12993,
    savings: 3994,
    image: '/placeholder-bundle-ultimate.jpg',
    images: ['/placeholder-bundle-ultimate.jpg'],
    rating: 5.0,
    reviewCount: 34,
    inStock: true,
    badge: 'Everything Included',
  },
];

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Ayesha K.',
    location: 'Lahore',
    rating: 5,
    text: 'My 3-year-old is OBSESSED with the Alphabets book. She sits quietly for 30+ minutes matching the velcro letters. I finally get to drink my chai in peace! The quality is amazing — we\'ve had it for 2 months and it still looks brand new.',
    productId: 'alphabets-busy-book',
    date: '2024-01-15',
    verified: true,
  },
  {
    id: '2',
    name: 'Fatima R.',
    location: 'Karachi',
    rating: 5,
    text: 'Bought the Complete Collection and it was the best parenting decision I\'ve made this year. My twins fight over who gets which book (in a good way!). Screen time has dropped dramatically. Worth every rupee.',
    productId: 'complete-collection',
    date: '2024-01-20',
    verified: true,
  },
  {
    id: '3',
    name: 'Sarah M.',
    location: 'Islamabad',
    rating: 5,
    text: 'I was skeptical about the price but these are genuinely premium quality. The laminated pages survive my toddler\'s rough handling and the velcro is still sticky after months of daily use. Already bought a set as a gift for my niece.',
    date: '2024-02-01',
    verified: true,
  },
  {
    id: '4',
    name: 'Hina A.',
    location: 'Rawalpindi',
    rating: 4,
    text: 'The Animals book is my son\'s favorite — he carries it everywhere! Only giving 4 stars because I wish there were more pages. But the quality and educational value are top-notch. Will definitely buy more books as they release new topics.',
    productId: 'animals-busy-book',
    date: '2024-02-10',
    verified: true,
  },
  {
    id: '5',
    name: 'Zainab T.',
    location: 'Multan',
    rating: 5,
    text: 'The Anywhere Bundle is a lifesaver for restaurant visits and long car rides. My daughter used to have meltdowns but now she happily plays with her busy books. The A5 size fits perfectly in my handbag.',
    productId: 'anywhere-bundle',
    date: '2024-02-15',
    verified: true,
  },
  {
    id: '6',
    name: 'Amna S.',
    location: 'Faisalabad',
    rating: 5,
    text: 'As a Montessori teacher, I can say these books are genuinely well-designed for early learning. The progression of activities is age-appropriate and the skills covered align with what we teach in school. Highly recommend for home learning.',
    date: '2024-02-20',
    verified: true,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'screen-time-alternatives-toddlers',
    title: '7 Screen-Free Activities That Actually Keep Toddlers Busy',
    excerpt: 'Struggling to keep your toddler entertained without screens? Here are 7 proven activities that engage little minds and give you a moment of peace.',
    image: '/placeholder-blog-1.jpg',
    date: '2024-02-15',
    readTime: '5 min read',
    category: 'Parenting Tips',
  },
  {
    id: '2',
    slug: 'montessori-at-home-pakistan',
    title: 'Montessori at Home: A Pakistani Parent\'s Guide',
    excerpt: 'You don\'t need expensive materials or a special room. Here\'s how to bring Montessori principles into your Pakistani home with everyday items.',
    image: '/placeholder-blog-2.jpg',
    date: '2024-02-01',
    readTime: '7 min read',
    category: 'Education',
  },
  {
    id: '3',
    slug: 'fine-motor-skills-importance',
    title: 'Why Fine Motor Skills Matter More Than You Think',
    excerpt: 'From holding a pencil to buttoning a shirt — fine motor skills are the foundation for independence. Learn how to develop them through play.',
    image: '/placeholder-blog-3.jpg',
    date: '2024-01-20',
    readTime: '4 min read',
    category: 'Child Development',
  },
];

export const faqItems: FAQItem[] = [
  {
    question: 'What age are Bulbul Busy Books suitable for?',
    answer: 'Our books are designed for children aged 1.5 to 6 years. Younger toddlers (1.5-2) enjoy the velcro matching activities, while older children (3-6) benefit from tracing, counting, and more complex sorting activities. Each book grows with your child!',
  },
  {
    question: 'Are the books durable? My child is rough with toys.',
    answer: 'Absolutely! Our books are built to last. All pages are laminated and wipe-clean, the velcro is industrial-strength, and the binding is reinforced. They\'re designed to withstand enthusiastic toddler use — spills, drops, and all.',
  },
  {
    question: 'How is delivery handled?',
    answer: 'We ship nationwide across Pakistan through Leopards, Call Courier, and Trax. Orders are dispatched same-day (if placed before 2 PM). Delivery takes 2-4 business days depending on your city. FREE delivery on orders over Rs.3,000!',
  },
  {
    question: 'Do you offer Cash on Delivery (COD)?',
    answer: 'Yes! COD is available nationwide. You can also pay via JazzCash, EasyPaisa, or Credit/Debit card at checkout.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We accept returns on unused items in their original condition. Simply contact us within 7 days of delivery. Please note that the buyer covers return shipping costs. Damaged or defective items are replaced free of charge.',
  },
  {
    question: 'How are these different from regular activity books?',
    answer: 'Unlike paper activity books that get used once and thrown away, Bulbul Busy Books are reusable. The velcro pieces can be attached and removed hundreds of times, and the wipe-clean pages mean tracing activities can be done over and over. They\'re also Montessori-inspired, focusing on hands-on learning rather than passive coloring.',
  },
  {
    question: 'Can I gift wrap my order?',
    answer: 'Yes! We offer beautiful gift wrapping for Rs.150. You can add this option at checkout. Perfect for birthdays, Eid gifts, or just because!',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getBundleBySlug(slug: string): Bundle | undefined {
  return bundles.find(b => b.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function formatPrice(price: number): string {
  return `Rs.${price.toLocaleString()}`;
}
