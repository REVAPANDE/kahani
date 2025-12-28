export interface Story {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  community: string;
  theme: string;
  imageUrl: string;
  featured?: boolean;
}

export const stories: Story[] = [
  {
    id: "1",
    title: "Breaking Barriers in STEM: My Journey as a First-Generation Engineer",
    excerpt: "Growing up in a small village, I never imagined I would become an engineer. This is my story of defying expectations and paving the way for others.",
    content: "Full story content here...",
    author: "Priya Sharma",
    community: "South Asian Women",
    theme: "Breaking Barriers",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    featured: true,
  },
  {
    id: "2",
    title: "From Refugee Camp to Medical School: A Story of Resilience",
    excerpt: "I spent my childhood in a refugee camp, dreaming of becoming a doctor. Today, I am one step closer to that dream.",
    content: "Full story content here...",
    author: "Amara Hassan",
    community: "Refugee Women",
    theme: "Resilience",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
    featured: true,
  },
  {
    id: "3",
    title: "Preserving My Grandmother's Recipes: A Culinary Heritage",
    excerpt: "Through food, I found a way to connect with my roots and share my culture with the world.",
    content: "Full story content here...",
    author: "Maria Elena Cruz",
    community: "Latina Women",
    theme: "Culture & Heritage",
    imageUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
    featured: true,
  },
  {
    id: "4",
    title: "Starting My Business at 50: It's Never Too Late",
    excerpt: "After raising four children, I decided to pursue my dream of becoming an entrepreneur. Age is just a number.",
    content: "Full story content here...",
    author: "Grace Okonkwo",
    community: "African Women",
    theme: "Empowerment",
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
  },
  {
    id: "5",
    title: "Finding My Voice Through Spoken Word Poetry",
    excerpt: "Poetry became my refuge and my revolution. Through words, I found the courage to speak my truth.",
    content: "Full story content here...",
    author: "Jasmine Williams",
    community: "Black Women",
    theme: "Empowerment",
    imageUrl: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80",
  },
  {
    id: "6",
    title: "The Art of Traditional Weaving: Keeping Ancestral Crafts Alive",
    excerpt: "My hands tell the stories of generations. Each thread connects me to my ancestors.",
    content: "Full story content here...",
    author: "Nayeli Mendoza",
    community: "Indigenous Women",
    theme: "Culture & Heritage",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: "7",
    title: "Overcoming Domestic Violence: From Survivor to Advocate",
    excerpt: "I survived, and now I help others find their way to safety and healing.",
    content: "Full story content here...",
    author: "Sarah Chen",
    community: "Asian Women",
    theme: "Resilience",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
  },
  {
    id: "8",
    title: "Leading Change in My Rural Community",
    excerpt: "When there was no one to advocate for our village, I became the voice we needed.",
    content: "Full story content here...",
    author: "Fatima Al-Rashid",
    community: "Middle Eastern Women",
    theme: "Breaking Barriers",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
  },
];

export const themes = [
  "Empowerment",
  "Resilience",
  "Culture & Heritage",
  "Breaking Barriers",
];

export const communities = [
  "South Asian Women",
  "Refugee Women",
  "Latina Women",
  "African Women",
  "Black Women",
  "Indigenous Women",
  "Asian Women",
  "Middle Eastern Women",
];
