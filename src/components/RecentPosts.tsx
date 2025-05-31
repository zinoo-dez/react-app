import { Link } from "react-router-dom";

const posts = [
  {
    title: "The Future of Web Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    authorName: "Alex Chen",
    authorImg: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "May 12, 2025",
  },
  {
    title: "10 Easy Recipes for Beginners",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Food",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    authorName: "Maria Garcia",
    authorImg: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "May 10, 2025",
  },
  {
    title: "5 Morning Habits for Better Health",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Health",
    imageUrl: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
    authorName: "James Wilson",
    authorImg: "https://randomuser.me/api/portraits/men/67.jpg",
    date: "May 8, 2025",
  },
];

export default function RecentPosts() {
  return (
    <section className="py-12 bg-gray-100" id="blog">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Recent Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <Link to={`/posts/${index + 1}`}>
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt={post.title}
                />
              </Link>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span
                    className={`bg-${post.category === "Technology"
                      ? "blue"
                      : post.category === "Food"
                        ? "amber"
                        : "green"
                      }-100 text-${post.category === "Technology"
                        ? "blue"
                        : post.category === "Food"
                          ? "amber"
                          : "green"
                      }-800 text-xs font-semibold px-2.5 py-0.5 rounded`}
                  >
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full mr-2"
                    src={post.authorImg}
                    alt="Author"
                  />
                  <div>
                    <p className="text-sm font-medium">{post.authorName}</p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-block bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-emerald-700 transition"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};
