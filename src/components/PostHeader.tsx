
export default function PostHeader({ id }: { id: string | undefined }) {
     return (
          <div>
               <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                    <img
                         src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                         alt="The Future of Web Development"
                         className="w-full h-64 md:h-80 object-cover"
                    />
                    <div className="p-6 md:p-8">
                         <div className="flex items-center mb-4">
                              <span
                                   className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                              >Technology</span
                              >
                              <span className="mx-2 text-gray-300">•</span>
                              <span className="text-gray-500 text-sm">May 12, 2025</span>
                              <span className="mx-2 text-gray-300">•</span>
                              <span className="text-gray-500 text-sm">10 min read</span>
                         </div>
                         <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                              The Future of Web Development: What to Expect in 2026 {id}
                         </h1>
                         <div className="flex items-center">
                              <img
                                   className="h-10 w-10 rounded-full mr-4"
                                   src="https://randomuser.me/api/portraits/men/32.jpg"
                                   alt="Alex Chen"
                              />
                              <div>
                                   <a
                                        href="author-profile.html"
                                        className="font-medium hover:text-emerald-600"
                                   >Alex Chen</a
                                   >
                                   <p className="text-gray-500 text-sm">
                                        Senior Tech Writer & Developer
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}
