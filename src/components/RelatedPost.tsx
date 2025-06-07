import React from 'react'

export default function RelatedPost() {
     return (
          <div>
               <div className="mb-8">
                    <h3 className="text-xl font-bold mb-6">Related Posts</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         {/* <!-- Related Post 1 --> */}
                         <div
                              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                         >
                              <img
                                   className="h-48 w-full object-cover"
                                   src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                                   alt="Code on screen"
                              />
                              <div className="p-4">
                                   <div className="flex items-center mb-2">
                                        <span
                                             className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                                        >JavaScript</span
                                        >
                                   </div>
                                   <h4 className="font-bold mb-2">
                                        10 JavaScript Tricks That Will Blow Your Mind
                                   </h4>
                                   <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                        JavaScript is full of surprises and powerful features that
                                        many developers aren't aware of. In this article, I share 10
                                        advanced JavaScript techniques...
                                   </p>
                                   <div className="flex items-center justify-between">
                                        <span className="text-gray-500 text-xs">May 5, 2025</span>
                                        <a
                                             href="#"
                                             className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
                                        >Read More</a
                                        >
                                   </div>
                              </div>
                         </div>

                         {/* <!-- Related Post 2 --> */}
                         <div
                              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                         >
                              <img
                                   className="h-48 w-full object-cover"
                                   src="https://images.unsplash.com/photo-1573164713988-8665fc963095"
                                   alt="AI concept"
                              />
                              <div className="p-4">
                                   <div className="flex items-center mb-2">
                                        <span
                                             className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                                        >AI</span
                                        >
                                   </div>
                                   <h4 className="font-bold mb-2">
                                        How AI is Transforming Web Development in 2025
                                   </h4>
                                   <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                        Artificial Intelligence is revolutionizing how we build
                                        websites and web applications. In this article, I explore
                                        the latest AI tools and technologies...
                                   </p>
                                   <div className="flex items-center justify-between">
                                        <span className="text-gray-500 text-xs">April 15, 2025</span>
                                        <a
                                             href="#"
                                             className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
                                        >Read More</a
                                        >
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}
