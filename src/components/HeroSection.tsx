import type { Post } from "../types/type";
import { useName } from "../context/nameContext";

export default function HeroSection({ title, excerpt, label }: Post) {
  const { name } = useName();
  console.log('name', name)
  return (
    <section className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {title} - {name}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            {excerpt}
          </p>
          <a
            href="#"
            className="inline-block bg-white text-emerald-600 font-medium px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            {label}
          </a>
        </div>
      </div>
    </section>
  );
};
