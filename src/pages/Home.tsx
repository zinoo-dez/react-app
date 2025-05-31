
import type { Post } from "../types/type";
import HeroSection from "../components/HeroSection";
import FeaturedPost from "../components/FeaturedPost";
import RecentPosts from "../components/RecentPosts";
import Newsletter from "../components/Newsletter";
import Categories from "../components/Categories";

export default function Home() {
     const posts: Post =
     {
          title: "The Power of Positive Thinking",
          description: "Learn how to cultivate a positive mindset and transform your life.",
          label: "Start Reading",

     }
     const featuredPosts: Post[] = [
          {
               id: 1,
               category: "Travel",
               title: "Discovering Hidden Gems in the Mountains",
               description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
               imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
               author: "Sarah Johnson",
               authorImg: "https://randomuser.me/api/portraits/women/17.jpg",
               date: "May 15, 2025",
               readTime: "6 min read",
          },
          {
               id: 2,
               category: "Technology",
               title: "The Future of Artificial Intelligence",
               description:
                    "Exploring the latest developments in AI technology and their impact on our daily lives and future society.",
               imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
               author: "Sarah Johnson",
               authorImg: "https://randomuser.me/api/portraits/women/17.jpg",
               date: "May 15, 2025",
               readTime: "6 min read",
          },
          {
               id: 3,
               category: "Lifestyle",
               title: "Minimalist Living: Less is More",
               description:
                    "Discover how embracing minimalism can lead to a more fulfilling and stress-free lifestyle in our modern world.",
               imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
               author: "Sarah Johnson",
               authorImg: "https://randomuser.me/api/portraits/women/17.jpg",
               date: "May 15, 2025",
               readTime: "6 min read",
          },
          {
               id: 4,
               category: "Food",
               title: "Farm-to-Table: A Culinary Journey",
               description: "Experience the freshest flavors and sustainable practices that define the farm-to-table movement.",
               imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
               author: "Sarah Johnson",
               authorImg: "https://randomuser.me/api/portraits/women/17.jpg",
               date: "May 15, 2025",
               readTime: "6 min read",
          },
     ]

     return (
          <div className="bg-gray-50 text-gray-800">
               <HeroSection title={posts.title} description={posts.description} label={posts.label} />
               <FeaturedPost featuredPosts={featuredPosts} />
               <RecentPosts />
               <Newsletter />
               <Categories />
          </div>
     );
};
