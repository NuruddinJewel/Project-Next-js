// import Image from 'next/image';
// import React from 'react';
// import { FaBookmark, FaShareAlt } from 'react-icons/fa';

// const NewsCard = ({ news }) => {
//     console.log(news, "news")
//     return (
//         <div className="card bg-base-100 w-96 shadow-sm">
//             <div className="card-body">
//                 {/* {Author Info} */}
//                 <div className='flex justify-between items-center bg-slate-200 p-4'>
//                     <div className='flex gap-1 items-center'>
//                         {/* <Image
//                             src={news.author?.img} alt={news.author?.name}
//                             height={40}
//                             width={40}
//                             className='rounded-full'
//                         /> */}
//                         {news.author?.img && (
//                             <Image
//                                 src={news.author.img}
//                                 alt={news.author?.name || 'Author'}
//                                 height={40}
//                                 width={40}
//                                 className='rounded-full'
//                             />
//                         )}
//                         <div>
//                             <h2 className='font-semibold'>{news.author?.name}</h2>
//                             <p className='text-xs'>{news.author?.published_date}</p>
//                         </div>
//                     </div>
//                     <div className='flex justify-between items-center'>
//                         <FaShareAlt className='text-xl' />
//                         <FaBookmark className='text-xl' />
//                     </div>
//                 </div>
//                 <h2 className="card-title">{news.title}</h2>
//                 <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//             </div>
//             <figure>
//                 <Image
//                     src={news.image_url}
//                     alt={news.title}
//                     width={300}
//                     height={300} className='w-full' />
//             </figure>
//             <p>{news.details}</p>
//         </div>
//     )
// };

// export default NewsCard;


import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaBookmark, FaEye, FaShareAlt } from 'react-icons/fa';
import { IoStarSharp } from "react-icons/io5";
const NewsCard = ({ news }) => {
    return (
        <div className="card bg-base-100 w-full shadow-sm border rounded-lg">
            {/* Author Info */}
            <div className='flex justify-between items-center bg-slate-200 p-4 rounded-t-lg'>
                <div className='flex gap-2 items-center'>
                    {news.author?.img && (
                        <Image
                            src={news.author.img}
                            alt={news.author?.name || 'Author'}
                            height={40}
                            width={40}
                            className='rounded-full'
                        />
                    )}
                    <div>
                        <h2 className='font-semibold'>{news.author?.name}</h2>
                        <p className='text-xs text-gray-500'>{news.author?.published_date}</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <FaShareAlt className='text-xl cursor-pointer' />
                    <FaBookmark className='text-xl cursor-pointer' />
                </div>
            </div>

            {/* Thumbnail */}
            <figure>
                <Image
                    src={news.image_url}
                    alt={news.title}
                    width={800}
                    height={400}
                    className='w-full object-cover' />
            </figure>

            {/* Body */}
            <div className="card-body p-4">
                <h2 className="card-title text-lg font-bold">{news.title}</h2>
                <p className='text-sm text-gray-600 line-clamp-3'>{news.details}</p>
                {/* truncate or line-clamp-3 */}

                <div className='flex items-center justify-between gap-2'>
                    <div className='flex items-center gap-2'>
                        <h2 className='flex items-center gap-2'>
                            <IoStarSharp className='text-lg text-amber-400' />  {news.rating.number}

                        </h2>
                        <h2 className='flex items-center gap-2'>
                            <FaEye />  {news.total_view}
                        </h2>
                    </div>
                    <Link href={`/news/${news._id}`}>
                        {/* <button className='btn'>See details</button> */}
                        See details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;