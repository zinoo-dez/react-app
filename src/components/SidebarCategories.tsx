import React from 'react'

export default function SidebarCategories() {
     return (
          <div>
               <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-bold mb-4">Categories</h3>
                    <div className="space-y-2">
                         <a
                              href="#"
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition"
                         >
                              <span className="font-medium">JavaScript</span>
                              <span
                                   className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                              >42</span
                              >
                         </a>
                    </div>
               </div>
          </div>
     )
}
