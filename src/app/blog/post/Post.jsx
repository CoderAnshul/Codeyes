// import React from 'react'
// import { GoDotFill } from 'react-icons/go'
// import { Link } from 'react-router-dom';
// import Banner from '../../../component/home/Banner';
// import Sidebar from '../Sidebar';

// const blogPosts = [
//     {
//         id: 1,
//         image: '/image/home/blog1.jpg',
//         date: '13 MAR',
//         category: 'creative',
//         title: 'Got Your Eye On This Season’s Trends',
//         content: 'Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et doloum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autm neque volu ptatum. Et et ducimus ut est aut. Voluptatem ea rerum nisi. Turpis nunc eget lorem dolor sed viverra ipsum. Non consectetur a erat nam at bibendum.'
//     },
//     {
//         id: 2,
//         image: '/image/home/blog2.jpg',
//         date: '13 MAR',
//         category: 'creative',
//         title: 'Got Your Eye On This Season’s Trends',
//         content: 'Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et doloum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autm neque volu ptatum. Et et ducimus ut est aut. Voluptatem ea rerum nisi. Turpis nunc eget lorem dolor sed viverra ipsum. Non consectetur a erat nam at bibendum.'
//     },
//     {
//         id: 3,
//         image: '/image/home/blog3.jpg',
//         date: '13 MAR',
//         category: 'creative',
//         title: 'Got Your Eye On This Season’s Trends',
//         content: 'Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et doloum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autm neque volu ptatum. Et et ducimus ut est aut. Voluptatem ea rerum nisi. Turpis nunc eget lorem dolor sed viverra ipsum. Non consectetur a erat nam at bibendum.'
//     },
//     {
//         id: 4,
//         image: '/image/home/blog1.jpg',
//         date: '13 MAR',
//         category: 'creative',
//         title: 'Got Your Eye On This Season’s Trends',
//         content: 'Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et doloum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autm neque volu ptatum. Et et ducimus ut est aut. Voluptatem ea rerum nisi. Turpis nunc eget lorem dolor sed viverra ipsum. Non consectetur a erat nam at bibendum.'
//     },
//     {
//         id: 5,
//         image: '/image/home/blog2.jpg',
//         date: '13 MAR',
//         category: 'creative',
//         title: 'Got Your Eye On This Season’s Trends',
//         content: 'Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et doloum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autm neque volu ptatum. Et et ducimus ut est aut. Voluptatem ea rerum nisi. Turpis nunc eget lorem dolor sed viverra ipsum. Non consectetur a erat nam at bibendum.'
//     },
//     {
//         id: 6,
//         image: '/image/home/blog3.jpg',
//         date: '13 MAR',
//         category: 'creative',
//         title: 'Got Your Eye On This Season’s Trends',
//         content: 'Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et doloum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autm neque volu ptatum. Et et ducimus ut est aut. Voluptatem ea rerum nisi. Turpis nunc eget lorem dolor sed viverra ipsum. Non consectetur a erat nam at bibendum.'
//     },
//     {
//         id: 7,
//         image: '/image/home/blog1.jpg',
//         date: '13 MAR',
//         category: 'creative',
//         title: 'Got Your Eye On This Season’s Trends',
//         content: 'Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et doloum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autm neque volu ptatum. Et et ducimus ut est aut. Voluptatem ea rerum nisi. Turpis nunc eget lorem dolor sed viverra ipsum. Non consectetur a erat nam at bibendum.'
//     },
//     {
//         id: 8,
//         image: '/image/home/blog2.jpg',
//         date: '13 MAR',
//         category: 'creative',
//         title: 'Got Your Eye On This Season’s Trends',
//         content: 'Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et doloum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autm neque volu ptatum. Et et ducimus ut est aut. Voluptatem ea rerum nisi. Turpis nunc eget lorem dolor sed viverra ipsum. Non consectetur a erat nam at bibendum.'
//     },
//     {
//         id: 9,
//         image: '/image/home/blog3.jpg',
//         date: '13 MAR',
//         category: 'creative',
//         title: 'Got Your Eye On This Season’s Trends',
//         content: 'Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et doloum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autm neque volu ptatum. Et et ducimus ut est aut. Voluptatem ea rerum nisi. Turpis nunc eget lorem dolor sed viverra ipsum. Non consectetur a erat nam at bibendum.'
//     },
//     {
//         id: 10,
//         image: '/image/home/blog1.jpg',
//         date: '13 MAR',
//         category: 'creative',
//         title: 'Got Your Eye On This Season’s Trends',
//         content: 'Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et doloum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autm neque volu ptatum. Et et ducimus ut est aut. Voluptatem ea rerum nisi. Turpis nunc eget lorem dolor sed viverra ipsum. Non consectetur a erat nam at bibendum.'
//     },
//     {
//         id: 11,
//         image: '/image/home/blog2.jpg',
//         date: '13 MAR',
//         category: 'creative',
//         title: 'Got Your Eye On This Season’s Trends',
//         content: 'Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et doloum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autm neque volu ptatum. Et et ducimus ut est aut. Voluptatem ea rerum nisi. Turpis nunc eget lorem dolor sed viverra ipsum. Non consectetur a erat nam at bibendum.'
//     },
//     {
//         id: 12,
//         image: '/image/home/blog3.jpg',
//         date: '13 MAR',
//         category: 'creative',
//         title: 'Got Your Eye On This Season’s Trends',
//         content: 'Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi repellat sit fugiat dolor manet. Officia et doloum. Eos non itaque ut libero dolorum hic voluptas repudiandae. Fugiat bisun quos et odit vel optio. Autm neque volu ptatum. Et et ducimus ut est aut. Voluptatem ea rerum nisi. Turpis nunc eget lorem dolor sed viverra ipsum. Non consectetur a erat nam at bibendum.'
//     },
// ];

// export default function Blog() {
//     return (
//         <>
//             <Banner />
//             <div className="custom_container my-24">
//                 {/* <h2 className="uppercase text-6xl md:text-[90px] md:leading-[100px] font-extrabold">
//                     Latest <span style={{ WebkitTextStroke: '1px black', color: 'transparent' }}>BLOGS</span>
//                 </h2> */}
//                 <div className={`grid grid-cols-12 gap-y-10 w-[90%] m-auto`}>
//                     <div className='col-span-12 md:col-span-4 lg:col-span-3 max-lg:order-1'>
//                         <Sidebar />
//                     </div>
//                     <div className='col-span-12 lg:col-span-1 hidden lg:block'></div>

//                     <div className='col-span-12 lg:col-span-8'>
//                         <div className="grid">
//                             {blogPosts.map((post) => (
//                                 <div key={post.id} className="space-y-4">
//                                     <Link to={`/post/${post.id}`} >
//                                         <div className="relative h-[500px] rounded-2xl overflow-hidden">
//                                             <img src={post.image} alt={`blog${post.id}`} className="h-full object-cover w-full" />
//                                             <div className="border border-black rounded-xl bg-[#ffde8b] absolute top-6 left-6 p-2 w-min text-center">
//                                                 <h4 className="text-2xl font-semibold">{post.date}</h4>
//                                             </div>
//                                         </div>
//                                         <div className="space-y-2 py-4 lg:py-8">
//                                             <p className="uppercase ">({post.category})</p>
//                                             <h2 className="capitalize text-2xl sm:text-3xl lg:text-5xl font-semibold">{post.title}</h2>
//                                             <p>{post?.content}</p>
//                                             <button className={`relative border border-black rounded-full font-semibold px-3 group hover:px-0 py-2 duration-100 ease-in-out cursor-pointer uppercase w-[160px]  text-lg overflow-hidden flex items-center mt-10`}>
//                                                 <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ffde8b] rounded-full group-hover:w-full group-hover:h-56"></span>
//                                                 <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
//                                                 <div className="sliding-text-wrapper flex items-center whitespace-nowrap relative z-10">
//                                                     <GoDotFill className="text-[#ffde8b]" />
//                                                     <span className="sliding-text hidden group-hover:block">Read More</span>
//                                                     <GoDotFill className="text-[#ffde8b] hidden group-hover:block" />
//                                                     <span className="sliding-text hidden group-hover:block">Read More</span>
//                                                     <GoDotFill className="text-[#ffde8b] hidden group-hover:block" />
//                                                     <span className="sliding-text">Read More</span>
//                                                 </div>
//                                             </button>
//                                         </div>
//                                     </Link>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </>

//     );
// }












// import React, { useEffect, useState } from 'react'
// import Sidebar from '../Sidebar'
// import CommentForm from './CommentForm'
// import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
// import CommentSection from './Commnet'
// import ProfileCard from './ProfileCard'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
// import moment from 'moment'
// import Loader from '../../../component/layout/Loader'
// import { BASE_URL } from '../../../utils/config'
// import { useSelector } from 'react-redux'
// import {LinkedinShareButton,TwitterShareButton,
//     FacebookShareButton} from "react-share"

// export default function Post() {

//     const { id } = useParams()

//     const newCommentId=useSelector(store=> store.blog.newAddedCommentId)
   
//     // console.log(newCommentId)

//     const [blogPosts, setBlogData] = useState();
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchBlogs = async () => {
//             try {
//                 const response = await axios.get(`${BASE_URL}/get-blog/${id}`);
//                 setBlogData(response.data.data);
//                 // console.log(response.data.data)
//                 setLoading(false);
//             } catch (err) {
//                 setError("Failed to fetch blog data.");
//                 setLoading(false);
//             }
//         };

//         fetchBlogs();
//     }, [newCommentId,id]);


// const currentPageUrl = window.location.href;

//     if (loading) {
//         return <Loader />;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     return (
//         <>
//             <div className='space-y-5'>
//                 <div className={`grid grid-cols-12 gap-y-10 w-[90%] m-auto`}>
//                     <div className='col-span-12 lg:col-span-8'>
//                         <div className="grid">
//                             <div className="space-y-4">
//                                 <div className="relative h-[500px] rounded-2xl overflow-hidden">
//                                     <img src={blogPosts?.banner_image} alt={blogPosts?._id} className="h-full object-cover w-full" />
//                                     <div className="border border-black rounded-xl bg-[#ffde8b] absolute top-6 left-6 p-2 w-min text-center">
//                                         <h4 className="text-2xl font-semibold">{blogPosts?.createdAt ? moment(blogPosts?.createdAt).format("DD MMM") : null}</h4>
//                                     </div>
//                                 </div>
//                                 <div className="space-y-2 py-4 lg:py-8">
//                                     <p className="uppercase ">({blogPosts?.category?.name})</p>
//                                     <h2 className="capitalize text-2xl sm:text-3xl lg:text-5xl font-semibold">{blogPosts?.title}</h2>
//                                     <p dangerouslySetInnerHTML={{ __html: blogPosts?.content }}></p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='flex justify-between flex-wrap gap-x-4 gap-4 mt-6'>
//                             <div className='flex gap-3'>
//                                 {
//                                     blogPosts && blogPosts.tags && blogPosts?.tags?.map((item, index) => {
//                                         return (
//                                             <p className='border border-black rounded-[50px] px-4 w-fit py-1' key={index}>{item}</p>
//                                         )
//                                     })
//                                 }
//                             </div>
//                             <div className="custom_tool_tip z-20 text-xl px-6 font-semibold relative  border border-black p-2 w-fit whitespace-nowrap bg-white rounded-lg shadow-lg" >
//                                 <div className='flex gap-4'>
//                                   <LinkedinShareButton url={currentPageUrl}  >  <div className={`hover:text-[#ffde8b] text-sm cursor-pointer`}><FaLinkedin /></div></LinkedinShareButton>
//                                    <FacebookShareButton url={currentPageUrl} quote="Please share this post" hashtag='#codeyes'> <div className={`hover:text-[#ffde8b] text-sm cursor-pointer `}><FaFacebook /></div></FacebookShareButton>
//                                    <TwitterShareButton url={currentPageUrl}> <div className={`hover:text-[#ffde8b] text-sm cursor-pointer `}><FaTwitter /></div></TwitterShareButton>
             
//                                 </div>
//                             </div>
//                         </div>
//                         <ProfileCard
//                             name={blogPosts?.authorName || "Steven Zissou"}
//                             role={blogPosts?.authorRole ||"MARKETING"}
//                             description={blogPosts?.authorDescription ||"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua."}
//                             imageUrl={blogPosts?.authorProfile ||"https://i.pravatar.cc/150?img=32"}
//                         />
//                         <div >
//                         <CommentSection blogPosts={blogPosts}  />
//                         </div>
//                         <CommentForm />
//                     </div>
//                     <div className='col-span-12 lg:col-span-1 hidden lg:block'></div>
//                     <div className='col-span-12 md:col-span-4 lg:col-span-3 max-lg:order-1'>
//                         <Sidebar />
//                     </div>

//                 </div>
//             </div >

//         </>
//     )
// }



import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import CommentForm from './CommentForm'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import CommentSection from './Commnet'
import ProfileCard from './ProfileCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import Loader from '../../../component/layout/Loader'
import { BASE_URL } from '../../../utils/config'
import { useSelector } from 'react-redux'
import {
    LinkedinShareButton,
    TwitterShareButton,
    FacebookShareButton
} from "react-share"

export default function Post() {
    const { id } = useParams()
    const newCommentId = useSelector(store => store.blog.newAddedCommentId)
    const [blogPosts, setBlogData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/get-blog/${id}`);
                setBlogData(response.data.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch blog data.");
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [newCommentId, id]);

    const currentPageUrl = window.location.href;

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div className="p-4 text-red-600">{error}</div>;
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="space-y-5 py-4 sm:py-6 lg:py-8">
                <div className="grid grid-cols-12 gap-y-6 lg:gap-y-10 w-[95%] sm:w-[90%] mx-auto">
                    {/* Main Content */}
                    <div className="col-span-12 lg:col-span-8 space-y-6">
                        {/* Blog Header Image */}
                        <div className="space-y-4">
                            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden">
                                <img 
                                    src={blogPosts?.banner_image} 
                                    alt={blogPosts?._id} 
                                    className="h-full w-full object-cover"
                                />
                                <div className="border border-black rounded-lg sm:rounded-xl bg-[#ffde8b] absolute top-4 sm:top-6 left-4 sm:left-6 p-2 w-min text-center">
                                    <h4 className="text-xl sm:text-2xl font-semibold">
                                        {blogPosts?.createdAt ? moment(blogPosts?.createdAt).format("DD MMM") : null}
                                    </h4>
                                </div>
                            </div>
                            
                            {/* Blog Content */}
                            <div className="space-y-3 sm:space-y-4 py-4 sm:py-6 lg:py-8">
                                <p className="uppercase text-sm sm:text-base text-gray-600">
                                    ({blogPosts?.category?.name})
                                </p>
                                <h2 className="capitalize text-xl sm:text-2xl lg:text-2xl xl:text-5xl font-semibold leading-tight">
                                    {blogPosts?.title}
                                </h2>
                                <div className="prose prose-lg max-w-none [&_p>span:nth-of-type(2)]:!text-[24px] [&_p>span:nth-of-type(1)]:!text-[20px] [&_p>span:nth-of-type(2)]:!leading-normal [&_p>span:nth-of-type(1)]:!flex; [&_p>span:nth-of-type(1)]:!w-fit;">
                                    <p 
                                        dangerouslySetInnerHTML={{ __html: blogPosts?.content }}
                                        className="!text-[30px]  !leading-normal"
                                    ></p>
                                </div>
                            </div>
                        </div>

                        {/* Tags and Share Buttons */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {blogPosts?.tags?.map((item, index) => (
                                    <p 
                                        className="border border-black rounded-full px-3 sm:px-4 py-1 text-sm sm:text-base" 
                                        key={index}
                                    >
                                        {item}
                                    </p>
                                ))}
                            </div>
                            <div className="custom_tool_tip z-20 text-lg sm:text-xl px-4 sm:px-6 font-semibold relative border border-black p-2 bg-white rounded-lg shadow-lg">
                                <div className="flex items-center gap-4">
                                    <LinkedinShareButton url={currentPageUrl}>
                                        <div className="hover:text-[#ffde8b] cursor-pointer transition-colors">
                                            <FaLinkedin />
                                        </div>
                                    </LinkedinShareButton>
                                    <FacebookShareButton url={currentPageUrl} quote="Please share this post" hashtag='#codeyes'>
                                        <div className="hover:text-[#ffde8b] cursor-pointer transition-colors">
                                            <FaFacebook />
                                        </div>
                                    </FacebookShareButton>
                                    <TwitterShareButton url={currentPageUrl}>
                                        <div className="hover:text-[#ffde8b] cursor-pointer transition-colors">
                                            <FaTwitter />
                                        </div>
                                    </TwitterShareButton>
                                </div>
                            </div>
                        </div>

                        {/* Author Profile */}
                        <ProfileCard
                            name={blogPosts?.authorName || "Steven Zissou"}
                            role={blogPosts?.authorRole || "MARKETING"}
                            description={blogPosts?.authorDescription || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua."}
                            imageUrl={blogPosts?.authorProfile || "https://i.pravatar.cc/150?img=32"}
                        />

                        {/* Comments */}
                        <div className="mt-8">
                            <CommentSection blogPosts={blogPosts} />
                        </div>
                        <CommentForm />
                    </div>

                    {/* Spacing Column */}
                    <div className="col-span-12 lg:col-span-1 hidden lg:block"></div>

                    {/* Sidebar */}
                    <div className="col-span-12 md:col-span-4 lg:col-span-3 max-lg:order-1">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}


// import React, { useEffect, useState } from 'react';
// import Sidebar from '../Sidebar';
// import CommentForm from './CommentForm';
// import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import CommentSection from './Commnet';
// import ProfileCard from './ProfileCard';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import moment from 'moment';
// import Loader from '../../../component/layout/Loader';
// import { BASE_URL } from '../../../utils/config';
// import { useSelector } from 'react-redux';
// import {
//   LinkedinShareButton,
//   TwitterShareButton,
//   FacebookShareButton,
// } from 'react-share';

// export default function Post() {
//   const { id } = useParams();

//   const newCommentId = useSelector((store) => store.blog.newAddedCommentId);

//   const [blogPosts, setBlogData] = useState();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/get-blog/${id}`);
//         setBlogData(response.data.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch blog data.');
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, [newCommentId, id]);

//   const currentPageUrl = window.location.href;

//   if (loading) {
//     return <Loader />;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <>
//       <div className="space-y-5">
//         <div className="grid grid-cols-12 gap-y-10 w-[90%] xl:w-[85%] m-auto">
//           <div className="col-span-12 lg:col-span-8">
//             <div className="grid">
//               <div className="space-y-4">
//                 <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
//                   <img
//                     src={blogPosts?.banner_image}
//                     alt={blogPosts?._id}
//                     className="h-full object-cover w-full"
//                   />
//                   <div className="border border-black rounded-xl bg-[#ffde8b] absolute top-4 left-4 md:top-6 md:left-6 p-2 w-min text-center">
//                     <h4 className="text-xl md:text-2xl font-semibold">
//                       {blogPosts?.createdAt
//                         ? moment(blogPosts?.createdAt).format('DD MMM')
//                         : null}
//                     </h4>
//                   </div>
//                 </div>
//                 <div className="space-y-2 py-4 lg:py-8">
//                   <p className="uppercase text-sm md:text-base">
//                     ({blogPosts?.category?.name})
//                   </p>
//                   <h2 className="capitalize text-xl sm:text-3xl lg:text-4xl font-semibold">
//                     {blogPosts?.title}
//                   </h2>
//                   <p
//                     className="text-sm md:text-base"
//                     dangerouslySetInnerHTML={{ __html: blogPosts?.content }}
//                   ></p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-between flex-wrap gap-4 mt-6">
//               <div className="flex flex-wrap gap-3">
//                 {blogPosts &&
//                   blogPosts.tags &&
//                   blogPosts?.tags?.map((item, index) => {
//                     return (
//                       <p
//                         className="border border-black rounded-[50px] px-4 py-1 text-sm"
//                         key={index}
//                       >
//                         {item}
//                       </p>
//                     );
//                   })}
//               </div>
//               <div className="custom_tool_tip z-20 text-sm md:text-xl px-6 font-semibold relative border border-black p-2 w-fit whitespace-nowrap bg-white rounded-lg shadow-lg">
//                 <div className="flex gap-4">
//                   <LinkedinShareButton url={currentPageUrl}>
//                     <div
//                       className={`hover:text-[#ffde8b] text-sm cursor-pointer`}
//                     >
//                       <FaLinkedin />
//                     </div>
//                   </LinkedinShareButton>
//                   <FacebookShareButton
//                     url={currentPageUrl}
//                     quote="Please share this post"
//                     hashtag="#codeyes"
//                   >
//                     <div
//                       className={`hover:text-[#ffde8b] text-sm cursor-pointer`}
//                     >
//                       <FaFacebook />
//                     </div>
//                   </FacebookShareButton>
//                   <TwitterShareButton url={currentPageUrl}>
//                     <div
//                       className={`hover:text-[#ffde8b] text-sm cursor-pointer`}
//                     >
//                       <FaTwitter />
//                     </div>
//                   </TwitterShareButton>
//                 </div>
//               </div>
//             </div>
//             <ProfileCard
//               name={blogPosts?.authorName || 'Steven Zissou'}
//               role={blogPosts?.authorRole || 'MARKETING'}
//               description={
//                 blogPosts?.authorDescription ||
//                 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.'
//               }
//               imageUrl={
//                 blogPosts?.authorProfile ||
//                 'https://i.pravatar.cc/150?img=32'
//               }
//             />
//             <div>
//               <CommentSection blogPosts={blogPosts} />
//             </div>
//             <CommentForm />
//           </div>
//           <div className="col-span-12 lg:col-span-1 hidden lg:block"></div>
//           <div className="col-span-12 md:col-span-4 lg:col-span-3 max-lg:order-1">
//             <Sidebar />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

