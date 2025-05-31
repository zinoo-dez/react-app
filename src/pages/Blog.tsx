import HeroSection from "../components/HeroSection";
import RecentPosts from "../components/RecentPosts";

export default function Blog() {
     return (
          <div className="min-h-screen">
               <HeroSection title="Welcome to Our Blog" description="Read our latest articles and stay updated." label="Read Now" />
               <RecentPosts />
          </div>
     )
}
