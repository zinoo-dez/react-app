"use client"

import { useEffect, useRef, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Nav() {
     const [isDropdownOpen, setIsDropdownOpen] = useState(false)
     const dropdownRef = useRef<HTMLDivElement>(null)

     const toggleDropdown = () => {
          setIsDropdownOpen(!isDropdownOpen)
     }

     const closeDropdown = () => {
          setIsDropdownOpen(false)
     }

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
                              <a
                                   href="#"
                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                                   role="menuitem"
                                   onClick={closeDropdown}
                              >
                                   Technology
                              </a>
                              <a
                                   href="#"
                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                                   role="menuitem"
                                   onClick={closeDropdown}
                              >
                                   Food
                              </a>
                              <a
                                   href="#"
                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                                   role="menuitem"
                                   onClick={closeDropdown}
                              >
                                   Health
                              </a>
                         </div>
                    )}
               </div>
               <a href="#" className="font-medium text-gray-500 hover:text-emerald-600 transition">
                    About
               </a>
               <a href="#" className="font-medium text-gray-500 hover:text-emerald-600 transition">
                    Contact
               </a>
               <a href="#" className="font-medium text-gray-500 hover:text-emerald-600 transition">
                    Login
               </a>
               <Outlet />
          </nav>
     )
}
