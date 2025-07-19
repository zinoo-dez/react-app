import { useParams } from "react-router-dom";
import Search from "../components/Search";
import SidebarPostRecent from "../components/SidebarPostRecent";
import SidebarCategories from "../components/SidebarCategories";
import RelatedPost from "../components/RelatedPost";
import Breadcrumbs from "../components/Breadcrumbs";
import PostHeader from "../components/PostHeader";
import ShareAndReaction from "../components/ShareAndReaction";
import AuthorBio from "../components/AuthorBio";
import PostDetailsComment from "../components/PostDetailsComment";
import { useName } from "../context/nameContext";

export default function PostDetail() {
     const { id } = useParams(); // destructure the id from useParams
     // console.log(id);
     const { name } = useName();
     return (
          //   < !--Main Content-- >
          <div className="container mx-auto px-4 py-8 md:py-12">
               <div className="flex flex-col lg:flex-row gap-8">
                    {/* <!-- Blog Post Content --> */}
                    <div className="lg:w-2/3">
                         {/* <!-- Breadcrumbs --> */}
                         <Breadcrumbs />

                         {/* <!-- Post Header --> */}
                         <PostHeader id={id} />

                         {/* <!-- Post Content --> */}
                         {/* <PostContent /> */}

                         {/* <!-- Share and Reactions --> */}
                         <ShareAndReaction />

                         {/* <!-- Author Bio --> */}
                         <AuthorBio />

                         {/* <!-- Comments Section --> */}
                         <PostDetailsComment />
                         {/* <!-- Related Posts --> */}
                         <RelatedPost />
                    </div>

                    {/* <!-- Sidebar --> */}
                    <div className="lg:w-1/3 space-y-8">
                         {/* <!-- Search --> */}
                         <Search />

                         {/* <!-- Recent Posts --> */}
                         <SidebarPostRecent />

                         {/* <!-- Most Read Posts --> */}
                         <div className="bg-white rounded-xl shadow-md p-6">
                              <h3 className="text-lg font-bold mb-4">Most Read Posts - {name}</h3>
                              <div className="space-y-4">
                                   <div className="flex items-center gap-3">
                                        <div
                                             className="bg-emerald-100 text-emerald-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
                                        >
                                             1
                                        </div>
                                        <div>
                                             <h4 className="font-medium text-sm line-clamp-2">
                                                  <a href="#" className="hover:text-emerald-600"
                                                  >From Junior to Senior Developer: A Roadmap for Success</a
                                                  >
                                             </h4>
                                             <div className="flex items-center text-xs text-gray-500 mt-1">
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
                                                  <span>42.5K views</span>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="flex items-center gap-3">
                                        <div
                                             className="bg-emerald-100 text-emerald-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
                                        >
                                             2
                                        </div>
                                        <div>
                                             <h4 className="font-medium text-sm line-clamp-2">
                                                  <a href="#" className="hover:text-emerald-600"
                                                  >10 JavaScript Tricks That Will Blow Your Mind</a
                                                  >
                                             </h4>
                                             <div className="flex items-center text-xs text-gray-500 mt-1">
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
                                                  <span>38.2K views</span>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="flex items-center gap-3">
                                        <div
                                             className="bg-emerald-100 text-emerald-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
                                        >
                                             3
                                        </div>
                                        <div>
                                             <h4 className="font-medium text-sm line-clamp-2">
                                                  <a href="#" className="hover:text-emerald-600"
                                                  >Building Scalable Web Applications: A Comprehensive
                                                       Guide</a
                                                  >
                                             </h4>
                                             <div className="flex items-center text-xs text-gray-500 mt-1">
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
                                                  <span>29.7K views</span>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="flex items-center gap-3">
                                        <div
                                             className="bg-emerald-100 text-emerald-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
                                        >
                                             4
                                        </div>
                                        <div>
                                             <h4 className="font-medium text-sm line-clamp-2">
                                                  <a href="#" className="hover:text-emerald-600"
                                                  >How AI is Transforming Web Development in 2025</a
                                                  >
                                             </h4>
                                             <div className="flex items-center text-xs text-gray-500 mt-1">
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
                                                  <span>24.3K views</span>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="flex items-center gap-3">
                                        <div
                                             className="bg-emerald-100 text-emerald-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
                                        >
                                             5
                                        </div>
                                        <div>
                                             <h4 className="font-medium text-sm line-clamp-2">
                                                  <a href="#" className="hover:text-emerald-600"
                                                  >Advanced React Hooks: Patterns and Best Practices</a
                                                  >
                                             </h4>
                                             <div className="flex items-center text-xs text-gray-500 mt-1">
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
                                                  <span>19.8K views</span>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         {/* <!-- Categories --> */}
                         <SidebarCategories />
                    </div>
               </div>
          </div>
     )
}
