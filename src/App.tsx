
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostDetail from "./pages/PostDetail";
import About from "./pages/About";

export default function App() {

  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <Routes>
        {/* pages */}
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
};
