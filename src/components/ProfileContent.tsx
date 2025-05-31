
export default function ProfileContent() {
     return (
          <div>
               <div className="container mx-auto px-4 py-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                         {/* <!-- Author's Posts --> */}
                         <div className="lg:w-2/3">
                              {/* <!-- Filter Tabs --> */}
                              <div className="mb-8 border-b">
                                   <div className="flex overflow-x-auto space-x-8">
                                        <button
                                             className="text-emerald-600 border-b-2 border-emerald-600 font-medium px-1 py-4"
                                        >
                                             Latest Posts
                                        </button>
                                        <button
                                             className="text-gray-500 hover:text-emerald-600 font-medium px-1 py-4"
                                        >
                                             Popular Posts
                                        </button>
                                        <button
                                             className="text-gray-500 hover:text-emerald-600 font-medium px-1 py-4"
                                        >
                                             Featured
                                        </button>
                                   </div>
                              </div>

                              {/* <!-- Posts Grid --> */}
                              <div className="space-y-8">
                                   {/* <!-- Post 1 --> */}
                                   <article
                                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                                   >
                                        <div className="md:flex">
                                             <div className="md:flex-shrink-0">
                                                  <img
                                                       className="h-48 w-full object-cover md:h-full md:w-48"
                                                       src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                                                       alt="Laptop and coffee"
                                                  />
                                             </div>
                                             <div className="p-6">
                                                  <div className="flex items-center mb-2">
                                                       <span
                                                            className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                                                       >Technology</span
                                                       >
                                                       <span className="ml-2 text-gray-500 text-sm">May 12, 2025</span>
                                                  </div>
                                                  <h2 className="text-xl font-bold mb-2">
                                                       The Future of Web Development: What to Expect in 2026
                                                  </h2>
                                                  <p className="text-gray-600 mb-4">
                                                       As we approach 2026, the web development landscape continues
                                                       to evolve at a rapid pace. In this article, I explore the
                                                       emerging technologies and trends that will shape the future
                                                       of web development.
                                                  </p>
                                                  <div className="flex items-center justify-between">
                                                       <div
                                                            className="flex items-center space-x-4 text-gray-500 text-sm"
                                                       >
                                                            <span className="flex items-center">
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
                                                                           d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                                      />
                                                                      <path
                                                                           stroke-linecap="round"
                                                                           stroke-linejoin="round"
                                                                           stroke-width="2"
                                                                           d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                                      />
                                                                 </svg>
                                                                 4.2K
                                                            </span>
                                                            <span className="flex items-center">
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
                                                                           d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                                                      />
                                                                 </svg>
                                                                 128
                                                            </span>
                                                       </div>
                                                       <a
                                                            href="#"
                                                            className="text-emerald-600 hover:text-emerald-700 font-medium"
                                                       >Read More</a
                                                       >
                                                  </div>
                                             </div>
                                        </div>
                                   </article>

                                   {/* <!-- Post 2 --> */}
                                   <article
                                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                                   >
                                        <div className="md:flex">
                                             <div className="md:flex-shrink-0">
                                                  <img
                                                       className="h-48 w-full object-cover md:h-full md:w-48"
                                                       src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                                                       alt="Code on screen"
                                                  />
                                             </div>
                                             <div className="p-6">
                                                  <div className="flex items-center mb-2">
                                                       <span
                                                            className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                                                       >JavaScript</span
                                                       >
                                                       <span className="ml-2 text-gray-500 text-sm">May 5, 2025</span>
                                                  </div>
                                                  <h2 className="text-xl font-bold mb-2">
                                                       10 JavaScript Tricks That Will Blow Your Mind
                                                  </h2>
                                                  <p className="text-gray-600 mb-4">
                                                       JavaScript is full of surprises and powerful features that
                                                       many developers aren't aware of. In this article, I share 10
                                                       advanced JavaScript techniques that will make your code more
                                                       efficient and elegant.
                                                  </p>
                                                  <div className="flex items-center justify-between">
                                                       <div
                                                            className="flex items-center space-x-4 text-gray-500 text-sm"
                                                       >
                                                            <span className="flex items-center">
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
                                                                           d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                                      />
                                                                      <path
                                                                           stroke-linecap="round"
                                                                           stroke-linejoin="round"
                                                                           stroke-width="2"
                                                                           d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                                      />
                                                                 </svg>
                                                                 7.8K
                                                            </span>
                                                            <span className="flex items-center">
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
                                                                           d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                                                      />
                                                                 </svg>
                                                                 256
                                                            </span>
                                                       </div>
                                                       <a
                                                            href="#"
                                                            className="text-emerald-600 hover:text-emerald-700 font-medium"
                                                       >Read More</a
                                                       >
                                                  </div>
                                             </div>
                                        </div>
                                   </article>

                                   {/* <!-- Post 3 --> */}
                                   <article
                                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                                   >
                                        <div className="md:flex">
                                             <div className="md:flex-shrink-0">
                                                  <img
                                                       className="h-48 w-full object-cover md:h-full md:w-48"
                                                       src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
                                                       alt="Laptop with code"
                                                  />
                                             </div>
                                             <div className="p-6">
                                                  <div className="flex items-center mb-2">
                                                       <span
                                                            className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                                                       >Career</span
                                                       >
                                                       <span className="ml-2 text-gray-500 text-sm"
                                                       >April 28, 2025</span
                                                       >
                                                  </div>
                                                  <h2 className="text-xl font-bold mb-2">
                                                       From Junior to Senior Developer: A Roadmap for Success
                                                  </h2>
                                                  <p className="text-gray-600 mb-4">
                                                       Making the leap from junior to senior developer is a
                                                       significant career milestone. In this comprehensive guide, I
                                                       outline the skills, mindset, and experiences you need to
                                                       advance your career in software development.
                                                  </p>
                                                  <div className="flex items-center justify-between">
                                                       <div
                                                            className="flex items-center space-x-4 text-gray-500 text-sm"
                                                       >
                                                            <span className="flex items-center">
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
                                                                           d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                                      />
                                                                      <path
                                                                           stroke-linecap="round"
                                                                           stroke-linejoin="round"
                                                                           stroke-width="2"
                                                                           d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                                      />
                                                                 </svg>
                                                                 12.3K
                                                            </span>
                                                            <span className="flex items-center">
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
                                                                           d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                                                      />
                                                                 </svg>
                                                                 342
                                                            </span>
                                                       </div>
                                                       <a
                                                            href="#"
                                                            className="text-emerald-600 hover:text-emerald-700 font-medium"
                                                       >Read More</a
                                                       >
                                                  </div>
                                             </div>
                                        </div>
                                   </article>

                                   {/* <!-- Post 4 --> */}
                                   <article
                                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                                   >
                                        <div className="md:flex">
                                             <div className="md:flex-shrink-0">
                                                  <img
                                                       className="h-48 w-full object-cover md:h-full md:w-48"
                                                       src="https://images.unsplash.com/photo-1573164713988-8665fc963095"
                                                       alt="AI concept"
                                                  />
                                             </div>
                                             <div className="p-6">
                                                  <div className="flex items-center mb-2">
                                                       <span
                                                            className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                                                       >AI</span
                                                       >
                                                       <span className="ml-2 text-gray-500 text-sm"
                                                       >April 15, 2025</span
                                                       >
                                                  </div>
                                                  <h2 className="text-xl font-bold mb-2">
                                                       How AI is Transforming Web Development in 2025
                                                  </h2>
                                                  <p className="text-gray-600 mb-4">
                                                       Artificial Intelligence is revolutionizing how we build
                                                       websites and web applications. In this article, I explore
                                                       the latest AI tools and technologies that are changing the
                                                       landscape of web development.
                                                  </p>
                                                  <div className="flex items-center justify-between">
                                                       <div
                                                            className="flex items-center space-x-4 text-gray-500 text-sm"
                                                       >
                                                            <span className="flex items-center">
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
                                                                           d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                                      />
                                                                      <path
                                                                           stroke-linecap="round"
                                                                           stroke-linejoin="round"
                                                                           stroke-width="2"
                                                                           d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                                      />
                                                                 </svg>
                                                                 9.5K
                                                            </span>
                                                            <span className="flex items-center">
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
                                                                           d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                                                      />
                                                                 </svg>
                                                                 215
                                                            </span>
                                                       </div>
                                                       <a
                                                            href="#"
                                                            className="text-emerald-600 hover:text-emerald-700 font-medium"
                                                       >Read More</a
                                                       >
                                                  </div>
                                             </div>
                                        </div>
                                   </article>
                              </div>

                              {/* <!-- Pagination --> */}
                              <div className="mt-12 flex justify-center">
                                   <nav className="inline-flex rounded-md shadow">
                                        <a
                                             href="#"
                                             className="py-2 px-4 bg-white border border-gray-300 rounded-l-md text-gray-500 hover:bg-gray-50"
                                        >
                                             Previous
                                        </a>
                                        <a
                                             href="#"
                                             className="py-2 px-4 bg-white border-t border-b border-gray-300 text-emerald-600 font-medium"
                                        >
                                             1
                                        </a>
                                        <a
                                             href="#"
                                             className="py-2 px-4 bg-white border-t border-b border-gray-300 text-gray-500 hover:bg-gray-50 hover:text-emerald-600"
                                        >
                                             2
                                        </a>
                                        <a
                                             href="#"
                                             className="py-2 px-4 bg-white border-t border-b border-gray-300 text-gray-500 hover:bg-gray-50 hover:text-emerald-600"
                                        >
                                             3
                                        </a>
                                        <a
                                             href="#"
                                             className="py-2 px-4 bg-white border border-gray-300 rounded-r-md text-gray-500 hover:bg-gray-50"
                                        >
                                             Next
                                        </a>
                                   </nav>
                              </div>
                         </div>

                         {/* <!-- Sidebar --> */}
                         <div className="lg:w-1/3 space-y-8">
                              {/* <!-- About the Author --> */}
                              <div className="bg-white rounded-xl shadow-md p-6">
                                   <h3 className="text-lg font-bold mb-4">About Alex</h3>
                                   <p className="text-gray-600 mb-4">
                                        Alex Chen is a full-stack developer and technical writer based in
                                        San Francisco. With a background in computer science and 10+ years
                                        of industry experience, he specializes in JavaScript, React, and
                                        modern web technologies.
                                   </p>
                                   <p className="text-gray-600">
                                        When he's not coding or writing, Alex enjoys hiking, photography,
                                        and exploring new coffee shops.
                                   </p>
                              </div>

                              {/* <!-- Popular Categories --> */}
                              <div className="bg-white rounded-xl shadow-md p-6">
                                   <h3 className="text-lg font-bold mb-4">Popular Categories</h3>
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
                                        <a
                                             href="#"
                                             className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition"
                                        >
                                             <span className="font-medium">React</span>
                                             <span
                                                  className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                                             >38</span
                                             >
                                        </a>
                                        <a
                                             href="#"
                                             className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition"
                                        >
                                             <span className="font-medium">Web Development</span>
                                             <span
                                                  className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                                             >27</span
                                             >
                                        </a>
                                        <a
                                             href="#"
                                             className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition"
                                        >
                                             <span className="font-medium">Career Advice</span>
                                             <span
                                                  className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                                             >15</span
                                             >
                                        </a>
                                        <a
                                             href="#"
                                             className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition"
                                        >
                                             <span className="font-medium">AI & Machine Learning</span>
                                             <span
                                                  className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                                             >5</span
                                             >
                                        </a>
                                   </div>
                              </div>

                              {/* <!-- Featured Post --> */}
                              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                                   <img
                                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                                        alt="Featured post"
                                        className="w-full h-48 object-cover"
                                   />
                                   <div className="p-6">
                                        <div className="flex items-center mb-2">
                                             <span
                                                  className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                                             >Featured</span
                                             >
                                        </div>
                                        <h3 className="text-lg font-bold mb-2">
                                             Building Scalable Web Applications: A Comprehensive Guide
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                             Learn how to design and build web applications that can handle
                                             millions of users without breaking a sweat.
                                        </p>
                                        <div className="flex items-center justify-between">
                                             <span className="text-gray-500 text-sm">March 10, 2025</span>
                                             <a
                                                  href="#"
                                                  className="text-emerald-600 hover:text-emerald-700 font-medium"
                                             >Read More</a
                                             >
                                        </div>
                                   </div>
                              </div>

                              {/* <!-- Newsletter --> */}
                              <div
                                   className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-md p-6 text-white"
                              >
                                   <h3 className="text-lg font-bold mb-2">
                                        Subscribe to Alex's Newsletter
                                   </h3>
                                   <p className="mb-4 opacity-90">
                                        Get the latest articles and insights delivered straight to your
                                        inbox.
                                   </p>
                                   <form>
                                        <input
                                             type="email"
                                             placeholder="Your email address"
                                             className="w-full px-4 py-2 rounded-lg text-gray-800 mb-3"
                                        />
                                        <button
                                             type="submit"
                                             className="w-full bg-white text-emerald-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                                        >
                                             Subscribe
                                        </button>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}
