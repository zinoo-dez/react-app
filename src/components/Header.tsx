"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { useCategories } from '../context/categoryContext';
// import { useName } from '../context/nameContext';
import { useAuth } from '../context/authContext';

export default function Header() {
  const { username, logout } = useAuth()
  const { categories } = useCategories()
  // const { name, setName } = useName()
  console.log('categories', categories)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }

  // const fetchCategories = async () => {
  //   await fetch('http://localhost:3003/categories')
  //     .then(res => res.json())
  //     .then(data => setCategories(data))
  // }
  // useEffect(() => {
  //   fetchCategories()
  // }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown()
      }
    }


    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isDropdownOpen])

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-emerald-600">
          BlogFolio
        </Link>
        <nav className="hidden md:flex space-x-8">

          <Link to="/" className="font-medium text-gray-900 hover:text-emerald-600 transition">
            Home
          </Link>
          <Link to="/blog" className="font-medium text-gray-500 hover:text-emerald-600 transition">
            Blog
          </Link>
          <Link to="/profile" className="font-medium text-gray-500 hover:text-emerald-600 transition">
            Profile
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="font-medium text-gray-500 hover:text-emerald-600 transition focus:outline-none flex items-center"
              id="category-dropdown"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              Categories
              <svg
                className={`ml-1 h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div
                className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50"
                aria-labelledby="category-dropdown"
                role="menu"
              >
                {
                  categories.map((category, index) => (
                    <Link
                      key={index}
                      to="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                      role="menuitem"
                      onClick={closeDropdown}
                    >
                      {category.name}
                    </Link>
                  ))}

              </div>
            )}
          </div>
          <Link to="/about" className="font-medium text-gray-500 hover:text-emerald-600 transition">
            About
          </Link>
          <Link to="/redux" className="font-medium text-gray-500 hover:text-emerald-600 transition">
            Redux
          </Link>
          <Link to="/contact" className="font-medium text-gray-500 hover:text-emerald-600 transition">
            Contact
          </Link>
          {
            !username ? (
              <Link to="/login" className="font-medium text-gray-500 hover:text-emerald-600 transition">
                Login
              </Link>
            ) : (
              <>
                <Link to="/logout" className="font-medium text-gray-500 hover:text-emerald-600 transition capitalize">
                  {username}
                </Link>
                <button onClick={logout} className="font-medium text-gray-500 hover:text-emerald-600 transition">
                  Logout
                </button>
              </>
            )
          }
        </nav>
        {/* <button onClick={() => setName('rose')} className=" text-gray-500 hover:text-gray-900 focus:outline-none">
          change name
         <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg> 
        </button> */}
      </div>
    </header>
  )
}
