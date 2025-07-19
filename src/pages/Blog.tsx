import HeroSection from "../components/HeroSection";
import RecentPosts from "../components/RecentPosts";
// import { posts } from "../data/posts";
import ProductReducer from "../reducer/ProductReducer";

export default function Blog() {
     return (
          <div className="min-h-screen">
               <HeroSection title="Welcome to Our Blog" excerpt="Read our latest articles and stay updated." label="Read Now" />
               {/* <RecentPosts posts={posts} /> */}

               <ProductReducer />
          </div>
     )
}
