import React from 'react'

export default function PostDetailsComment() {
     return (
          <div>
               <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <h3 className="text-xl font-bold mb-6">Comments (38)</h3>

                    {/* <!-- Comment Form --> */}
                    <div className="mb-8">
                         <div className="flex items-start gap-4">
                              <img
                                   className="h-10 w-10 rounded-full"
                                   src="https://randomuser.me/api/portraits/women/44.jpg"
                                   alt="Your Avatar"
                              />
                              <div className="flex-grow">
                                   <textarea
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                        rows="3"
                                        placeholder="Add a comment..."
                                   ></textarea>
                                   <div className="mt-2 flex justify-end">
                                        <button
                                             className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded-lg shadow-sm transition"
                                        >
                                             Post Comment
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>

                    {/* <!-- Comments List --> */}
                    <div className="space-y-6">
                         {/* <!-- Comment 1 --> */}
                         <div className="flex gap-4">
                              <img
                                   className="h-10 w-10 rounded-full"
                                   src="https://randomuser.me/api/portraits/women/17.jpg"
                                   alt="Sarah Johnson"
                              />
                              <div className="flex-grow">
                                   <div className="bg-gray-50 p-4 rounded-lg">
                                        <div className="flex items-center justify-between mb-2">
                                             <div>
                                                  <span className="font-medium">Sarah Johnson</span>
                                                  <span className="text-gray-500 text-sm ml-2"
                                                  >2 days ago</span
                                                  >
                                             </div>
                                             <button className="text-gray-400 hover:text-gray-600">
                                                  <svg
                                                       xmlns="http://www.w3.org/2000/svg"
                                                       className="h-5 w-5"
                                                       fill="none"
                                                       viewBox="0 0 24 24"
                                                       stroke="currentColor"
                                                  >
                                                       <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                                       />
                                                  </svg>
                                             </button>
                                        </div>
                                        <p className="text-gray-700">
                                             Great article! I'm particularly excited about the
                                             potential of WebAssembly. The performance gains could be
                                             game-changing for complex web applications.
                                        </p>
                                        <div className="mt-3 flex items-center space-x-4 text-sm">
                                             <button
                                                  className="flex items-center text-gray-500 hover:text-emerald-600"
                                             >
                                                  <svg
                                                       xmlns="http://www.w3.org/2000/svg"
                                                       className="h-4 w-4 mr-1"
                                                       fill="none"
                                                       viewBox="0 0 24 24"
                                                       stroke="currentColor"
                                                  >
                                                       <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                                       />
                                                  </svg>
                                                  <span>24</span>
                                             </button>
                                             <button
                                                  className="flex items-center text-gray-500 hover:text-emerald-600"
                                             >
                                                  <svg
                                                       xmlns="http://www.w3.org/2000/svg"
                                                       className="h-4 w-4 mr-1"
                                                       fill="none"
                                                       viewBox="0 0 24 24"
                                                       stroke="currentColor"
                                                  >
                                                       <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2"
                                                       />
                                                  </svg>
                                                  <span>2</span>
                                             </button>
                                             <button className="text-gray-500 hover:text-emerald-600">
                                                  Reply
                                             </button>
                                        </div>
                                   </div>

                                   {/* <!-- Nested Reply --> */}
                                   <div className="mt-4 ml-6">
                                        <div className="flex gap-4">
                                             <img
                                                  className="h-8 w-8 rounded-full"
                                                  src="https://randomuser.me/api/portraits/men/32.jpg"
                                                  alt="Alex Chen"
                                             />
                                             <div className="flex-grow">
                                                  <div className="bg-gray-50 p-4 rounded-lg">
                                                       <div className="flex items-center justify-between mb-2">
                                                            <div>
                                                                 <span className="font-medium">Alex Chen</span>
                                                                 <span className="text-emerald-600 text-xs ml-1"
                                                                 >(Author)</span
                                                                 >
                                                                 <span className="text-gray-500 text-sm ml-2"
                                                                 >1 day ago</span
                                                                 >
                                                            </div>
                                                            <button className="text-gray-400 hover:text-gray-600">
                                                                 <svg
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      className="h-5 w-5"
                                                                      fill="none"
                                                                      viewBox="0 0 24 24"
                                                                      stroke="currentColor"
                                                                 >
                                                                      <path
                                                                           stroke-linecap="round"
                                                                           stroke-linejoin="round"
                                                                           stroke-width="2"
                                                                           d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                                                      />
                                                                 </svg>
                                                            </button>
                                                       </div>
                                                       <p className="text-gray-700">
                                                            Thanks, Sarah! I agree - WebAssembly is going to be
                                                            transformative. I'm working on a follow-up article
                                                            that goes deeper into specific use cases.
                                                       </p>
                                                       <div className="mt-3 flex items-center space-x-4 text-sm">
                                                            <button
                                                                 className="flex items-center text-gray-500 hover:text-emerald-600"
                                                            >
                                                                 <svg
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      className="h-4 w-4 mr-1"
                                                                      fill="none"
                                                                      viewBox="0 0 24 24"
                                                                      stroke="currentColor"
                                                                 >
                                                                      <path
                                                                           stroke-linecap="round"
                                                                           stroke-linejoin="round"
                                                                           stroke-width="2"
                                                                           d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                                                      />
                                                                 </svg>
                                                                 <span>12</span>
                                                            </button>
                                                            <button
                                                                 className="flex items-center text-gray-500 hover:text-emerald-600"
                                                            >
                                                                 <svg
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      className="h-4 w-4 mr-1"
                                                                      fill="none"
                                                                      viewBox="0 0 24 24"
                                                                      stroke="currentColor"
                                                                 >
                                                                      <path
                                                                           stroke-linecap="round"
                                                                           stroke-linejoin="round"
                                                                           stroke-width="2"
                                                                           d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2"
                                                                      />
                                                                 </svg>
                                                                 <span>0</span>
                                                            </button>
                                                            <button
                                                                 className="text-gray-500 hover:text-emerald-600"
                                                            >
                                                                 Reply
                                                            </button>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         {/* <!-- Comment 2 --> */}
                         <div className="flex gap-4">
                              <img
                                   className="h-10 w-10 rounded-full"
                                   src="https://randomuser.me/api/portraits/men/67.jpg"
                                   alt="James Wilson"
                              />
                              <div className="flex-grow">
                                   <div className="bg-gray-50 p-4 rounded-lg">
                                        <div className="flex items-center justify-between mb-2">
                                             <div>
                                                  <span className="font-medium">James Wilson</span>
                                                  <span className="text-gray-500 text-sm ml-2"
                                                  >3 days ago</span
                                                  >
                                             </div>
                                             <button className="text-gray-400 hover:text-gray-600">
                                                  <svg
                                                       xmlns="http://www.w3.org/2000/svg"
                                                       className="h-5 w-5"
                                                       fill="none"
                                                       viewBox="0 0 24 24"
                                                       stroke="currentColor"
                                                  >
                                                       <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                                       />
                                                  </svg>
                                             </button>
                                        </div>
                                        <p className="text-gray-700">
                                             I'm skeptical about the "end of traditional JavaScript
                                             frameworks" prediction. React has shown incredible staying
                                             power and continues to evolve. What makes you think
                                             developers will move away from these established
                                             ecosystems?
                                        </p>
                                        <div className="mt-3 flex items-center space-x-4 text-sm">
                                             <button
                                                  className="flex items-center text-gray-500 hover:text-emerald-600"
                                             >
                                                  <svg
                                                       xmlns="http://www.w3.org/2000/svg"
                                                       className="h-4 w-4 mr-1"
                                                       fill="none"
                                                       viewBox="0 0 24 24"
                                                       stroke="currentColor"
                                                  >
                                                       <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                                       />
                                                  </svg>
                                                  <span>8</span>
                                             </button>
                                             <button
                                                  className="flex items-center text-gray-500 hover:text-emerald-600"
                                             >
                                                  <svg
                                                       xmlns="http://www.w3.org/2000/svg"
                                                       className="h-4 w-4 mr-1"
                                                       fill="none"
                                                       viewBox="0 0 24 24"
                                                       stroke="currentColor"
                                                  >
                                                       <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2"
                                                       />
                                                  </svg>
                                                  <span>1</span>
                                             </button>
                                             <button className="text-gray-500 hover:text-emerald-600">
                                                  Reply
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         {/* <!-- View More Comments Button --> */}
                         <div className="text-center pt-4">
                              <button
                                   className="text-emerald-600 hover:text-emerald-700 font-medium"
                              >
                                   View More Comments
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     )
}
