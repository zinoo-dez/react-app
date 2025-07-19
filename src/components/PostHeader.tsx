import { useState, useEffect, memo } from 'react';
import type { Post } from '../types/type';
import { formatDate, timeToRead } from '../helpers/functions';


const PostHeader = ({ id }: { id: string | undefined }) => {
     if (!id) {
          return null; // or handle the case where id is not provided
     }

     const [singlePost, setSinglePost] = useState<Post>();
     console.log("single Post =>", singlePost)
     const [loading, setLoading] = useState<boolean>(true);
     const [error, setError] = useState<string | null>(null);
     // console.log("header ",id)

     const fetchPost = async () => {
          setLoading(true);
          await fetch(`http://localhost:3003/posts/${id}`)
               .then(res => res.json())
               .then(data => setSinglePost(data))
               .catch(error => setError(error.message))
               .finally(() => setLoading(false));
     }
     useEffect(() => {
          fetchPost();
          // console.log('useEffect')
     }, [id]);
    
     if (loading) {
          return <div>Loading...</div>;
     }
     if (error) {
          return <div>Error: {error}</div>;
     }
     
     return (
          <div>
               <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                    <img
                         src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                         alt="The Future of Web Development"
                         className="w-full h-64 md:h-80 object-cover"
                    />
                    {/* post info */}
                    <div className="p-6 md:p-8">
                         <div className="flex items-center mb-4">
                              <span
                                   className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                              >{singlePost?.category?.name}</span
                              >
                              <span className="mx-2 text-gray-300">•</span>
                              <span className="text-gray-500 text-sm">
                                   {formatDate(singlePost?.published_at ?? new Date(), 'my')}
                              </span>
                              <span className="mx-2 text-gray-300">•</span>
                              <span className="text-gray-500 text-sm">
                                   {timeToRead(singlePost?.excerpt ?? '')}
                              </span>
                         </div>
                         <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                              {singlePost?.title || "The Future of Web Development"}
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
                                   >{singlePost?.author?.username}</a
                                   >
                                   <p className="text-gray-500 text-sm">
                                        {singlePost?.author?.job_title || "Web Developer"}
                                   </p>
                              </div>
                         </div>
                    </div>
                    {/* post body */}
                    <div className="p-6 md:p-8 border-t">
                         <p className="text-gray-700 text-base">
                              {singlePost?.excerpt || ""}
                         </p>
                    </div>
                    {/* post tags */}
                    <div className="p-6 md:p-8 border-t">
                         <div className="flex flex-wrap gap-2">
                              <span className="text-sm font-medium text-gray-700 mr-2">Tags:</span>
                              {singlePost?.category?.name && (
                                   <a
                                        href={`/category/${singlePost.category.slug}`}
                                        className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded hover:bg-gray-200"
                                   >
                                        {singlePost.category.name}
                                   </a>
                              )}
                              {singlePost?.tags?.map((tag, index) => (
                                   <a
                                        key={index}
                                        href={`/tag/${tag.slug}`}
                                        className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded hover:bg-gray-200"
                                   >
                                        {tag.name}
                                   </a>
                              ))}
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default memo(PostHeader); 