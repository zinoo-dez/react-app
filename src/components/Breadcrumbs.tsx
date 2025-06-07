import React from 'react'

export default function Breadcrumbs() {
     return (
          <div>
               <nav className="text-sm mb-6">
                    <ol className="flex items-center space-x-2">
                         <li>
                              <a
                                   href="index.html"
                                   className="text-gray-500 hover:text-emerald-600"
                              >Home</a
                              >
                         </li>
                         <li className="text-gray-500">/</li>
                         <li>
                              <a href="#" className="text-gray-500 hover:text-emerald-600"
                              >Blog</a
                              >
                         </li>
                         <li className="text-gray-500">/</li>
                         <li>
                              <a href="#" className="text-gray-500 hover:text-emerald-600"
                              >Technology</a
                              >
                         </li>
                         <li className="text-gray-500">/</li>
                         <li className="text-gray-800 font-medium">
                              The Future of Web Development
                         </li>
                    </ol>
               </nav>
          </div>
     )
}
