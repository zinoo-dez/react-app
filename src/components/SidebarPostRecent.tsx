
export default function SidebarPostRecent() {
     return (
          <div>
               <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
                    <div className="space-y-4">
                         <div className="flex gap-3">
                              <img
                                   className="h-16 w-16 object-cover rounded-md"
                                   src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                                   alt="JavaScript Tricks"
                              />
                              <div>
                                   <h4 className="font-medium text-sm line-clamp-2">
                                        <a href="#" className="hover:text-emerald-600"
                                        >10 JavaScript Tricks That Will Blow Your Mind</a
                                        >
                                   </h4>
                                   <p className="text-gray-500 text-xs mt-1">May 5, 2025</p>
                              </div>
                         </div>
                         <div className="flex gap-3">
                              <img
                                   className="h-16 w-16 object-cover rounded-md"
                                   src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
                                   alt="Career Development"
                              />
                              <div>
                                   <h4 className="font-medium text-sm line-clamp-2">
                                        <a href="#" className="hover:text-emerald-600"
                                        >From Junior to Senior Developer: A Roadmap for Success</a
                                        >
                                   </h4>
                                   <p className="text-gray-500 text-xs mt-1">April 28, 2025</p>
                              </div>
                         </div>
                         <div className="flex gap-3">
                              <img
                                   className="h-16 w-16 object-cover rounded-md"
                                   src="https://images.unsplash.com/photo-1573164713988-8665fc963095"
                                   alt="AI in Development"
                              />
                              <div>
                                   <h4 className="font-medium text-sm line-clamp-2">
                                        <a href="#" className="hover:text-emerald-600"
                                        >How AI is Transforming Web Development in 2025</a
                                        >
                                   </h4>
                                   <p className="text-gray-500 text-xs mt-1">April 15, 2025</p>
                              </div>
                         </div>
                         <div className="flex gap-3">
                              <img
                                   className="h-16 w-16 object-cover rounded-md"
                                   src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                                   alt="Scalable Web Applications"
                              />
                              <div>
                                   <h4 className="font-medium text-sm line-clamp-2">
                                        <a href="#" className="hover:text-emerald-600"
                                        >Building Scalable Web Applications: A Comprehensive
                                             Guide</a
                                        >
                                   </h4>
                                   <p className="text-gray-500 text-xs mt-1">March 10, 2025</p>
                              </div>
                         </div>
                         <div className="flex gap-3">
                              <img
                                   className="h-16 w-16 object-cover rounded-md"
                                   src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613"
                                   alt="React Hooks"
                              />
                              <div>
                                   <h4 className="font-medium text-sm line-clamp-2">
                                        <a href="#" className="hover:text-emerald-600"
                                        >Advanced React Hooks: Patterns and Best Practices</a
                                        >
                                   </h4>
                                   <p className="text-gray-500 text-xs mt-1">March 2, 2025</p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}
