
"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Post } from "../types/type"


export default function FeaturedPost({ featuredPosts }: { featuredPosts: Post[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === featuredPosts.length - 1 ? 0 : prevIndex + 1))
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? featuredPosts.length - 1 : currentIndex - 1)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === featuredPosts.length - 1 ? 0 : currentIndex + 1)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        goToPrevious()
      } else if (event.key === "ArrowRight") {
        goToNext()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [currentIndex])

  const currentPost = featuredPosts[currentIndex]

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Featured Posts</h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Main slider container */}
          <div
            className="bg-white rounded-xl shadow-md overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0 relative">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-64 transition-opacity duration-300"
                  src={currentPost?.imageUrl || "/placeholder.svg"}
                  alt={currentPost?.title || ""}
                />
                <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                  {currentIndex + 1} / {featuredPosts.length}
                </div>
              </div>
              <div className="p-8 flex-1">
                <div className="uppercase tracking-wide text-sm text-emerald-600 font-semibold">
                  {currentPost?.category}
                </div>
                <a
                  href="#"
                  className="block mt-1 text-2xl font-semibold text-gray-900 hover:text-emerald-600 transition-colors duration-200"
                >
                  {currentPost?.title}
                </a>
                <p className="mt-2 text-gray-600">{currentPost?.description}</p>
                <div className="mt-4 flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={currentPost?.authorImg || "/placeholder.svg"}
                      alt={currentPost?.author || ""}
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{currentPost?.author || ""}</p>
                    <p className="text-sm text-gray-500">
                      {currentPost?.date} · {currentPost?.readTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-[-80px] top-[120px] transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all duration-200 hover:scale-110"
            aria-label="Previous post"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-[-80px] top-[120px] transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all duration-200 hover:scale-110"
            aria-label="Next post"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          {/* Dot indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {featuredPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex ? "bg-emerald-600 scale-110" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              {isAutoPlaying ? "Pause auto-play" : "Resume auto-play"}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

