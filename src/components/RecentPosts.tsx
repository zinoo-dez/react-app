import { Link } from "react-router-dom";
import type { Post } from "../types/type";
import { useState } from "react";

// const randomNumber = Math.floor(Math.random() * 100)
// console.log(randomNumber)

// const posts = [
//   {
//     title: "The Future of Web Development",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     category: "Technology",
//     imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
//     authorName: "Alex Chen",
//     authorImg: `https://randomuser.me/api/portraits/men/${randomNumber}.jpg`,
//     date: "May 12, 2025",
//   },
//   {
//     title: "10 Easy Recipes for Beginners",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     category: "Food",
//     imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
//     authorName: "Maria Garcia",
//     authorImg: `https://randomuser.me/api/portraits/women/${randomNumber}.jpg`,
//     date: "May 10, 2025",
//   },
//   {
//     title: "5 Morning Habits for Better Health",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     category: "Health",
//     imageUrl: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
//     authorName: "James Wilson",
//     authorImg: `https://randomuser.me/api/portraits/men/${randomNumber}.jpg`,
//     date: "May 8, 2025",
//   },
// ];

export default function RecentPosts({ posts }: { posts: Post[] }) {
  const [visiblePosts, setVisiblePosts] = useState<number>(3);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadMorePosts = () => {
    setIsLoading(true);
    // for testing code(setTimeOut)
    setTimeout(() => {
      setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 3);
      setIsLoading(false);
    }, 800);
  };
  return (
    <section className="py-12 bg-gray-100" id="blog">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Recent Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, visiblePosts).map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <Link to={`/posts/${index + 1}`}>
                <img
                  className="h-48 w-full object-cover"
                  src={"https://placehold.co/600x400"}
                  alt={post.title}
                />
              </Link>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span
                    className={`bg-${post.category?.name === "Technology"
                      ? "blue"
                      : post.category?.name === "Food"
                        ? "amber"
                        : "green"
                      }-100 text-${post.category?.name === "Technology"
                        ? "blue"
                        : post.category?.name === "Food"
                          ? "amber"
                          : "green"
                      }-800 text-xs font-semibold px-2.5 py-0.5 rounded`}
                  >
                    {post.category?.name}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full mr-2"
                    src={post.author?.profile_image}
                    alt="Author"
                  />
                  <div>
                    <p className="text-sm font-medium">{post.author?.name}</p>
                    <p className="text-xs text-gray-500">{post.date ?? new Date().toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visiblePosts < posts.length && (
          <div className="text-center mt-10">
            <button
              onClick={loadMorePosts}
              disabled={isLoading}
              className="inline-flex items-center justify-center bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-emerald-700 transition min-w-40"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Loading...
                </>
              ) : (
                "Load More Posts"
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
