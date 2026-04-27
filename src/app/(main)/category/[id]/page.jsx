// import LeftSidebar from '@/components/Homepage/news/LeftSidebar';
// import RightSidebar from '@/components/Homepage/news/RightSidebar';
// import React from 'react';

// async function getCategories() {
//     const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
//     if (!res.ok) throw new Error("Failed to fetch categories");
//     const data = await res.json();
//     return data.data;
// }

// async function getNewsByCategoryId(category_id) {
//     const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
//     if (!res.ok) throw new Error("Failed to fetch news");
//     const data = await res.json();
//     return data.data;



//     const NewsCategoryPage = async ({ params }) => {

//         const { id } = await params;
//         console.log(id, "paramsRes")
//         const categories = await getCategories();
//         const news = await getNewsByCategoryId("01")

//         return (
//             <div className="container mx-auto grid grid-cols-12 gap-4 my-15">
//                 <div className="col-span-3">
//                     <LeftSidebar categories={categories} activeId="" />
//                 </div>
//                 <div className="col-span-6">
//                     All News
//                     {news.map((n) => (
//                         <div key={n._id} className="p-6 rounded-md border">{n.title}</div>
//                     ))}
//                 </div>
//                 <div className="col-span-3">
//                     <RightSidebar />
//                 </div>
//             </div>
//         );
//     };

//     export default NewsCategoryPage;

// import LeftSidebar from '@/components/Homepage/news/LeftSidebar';
// import NewsCard from '@/components/Homepage/news/NewsCard';
// import RightSidebar from '@/components/Homepage/news/RightSidebar';
// import { getCategories, getNewsByCategoryId } from '@/lib/data';
// import React from 'react';

// // async function getCategories() {
// //     const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
// //     if (!res.ok) throw new Error("Failed to fetch categories");
// //     const data = await res.json();
// //     return data.data;
// // }

// // async function getNewsByCategoryId(category_id) {
// //     const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
// //     if (!res.ok) throw new Error("Failed to fetch news");
// //     const data = await res.json();
// //     return data.data;
// // }

// const NewsCategoryPage = async ({ params }) => {
//     const { id } = await params;
//     console.log(id, "paramsRes")
//     const categories = await getCategories();
//     const news = await getNewsByCategoryId(id)

//     return (
//         <div className="container mx-auto grid grid-cols-12 gap-4 my-15">
//             <div className="col-span-3">
//                 <LeftSidebar categories={categories} activeId={id} />
//             </div>
//             {/* <div className="col-span-6">
//                 <h2 className='font-bold text-lg'>
//                     News by Category
//                 </h2>
//                 <NewsCard className='space-y-4 mt-6'>
//                     {news.length > 0 ? news.map((n) => (
//                         <div key={n._id}
//                             news={n}></div>
//                     )) : <h2 className='font-bold text-xl text-center my-7'>No news Found!!</h2>}
//                 </NewsCard>
//             </div> */}
//             {/* <div className="col-span-6">
//   <h2 className='font-bold text-lg'>
//     News by Category
//   </h2>
//   <NewsCard className='space-y-4 mt-6'>
//     {news.length > 0 ? (
//       news.map((n) => (
//         <NewsItem key={n._id} news={n} />
//       ))
//     ) : (
//       <h2 className='font-bold text-xl text-center my-7'>No news Found!!</h2>
//     )}
//   </NewsCard>
// </div> */}
//             <div className='space-y-4 mt-6'>
//                 {news.length > 0 ? (
//                     news.map((n) => (
//                         <NewsCard key={n._id} news={n} />
//                     ))
//                 ) : (
//                     <h2 className='font-bold text-xl text-center my-7'>No news Found!!</h2>
//                 )}
//             </div>
//             <div className="col-span-3">
//                 <RightSidebar />
//             </div>
//         </div>
//     );
// };

// export default NewsCategoryPage;



// import { redirect } from "next/navigation";

// const default_category_id = "04";

// const Home = () => {
//     console.log("Home page rendering, redirecting...");
//     redirect(`/category/${default_category_id}`);
// };

// export default Home;

import LeftSidebar from '@/components/Homepage/news/LeftSidebar';
import NewsCard from '@/components/Homepage/news/NewsCard';
import RightSidebar from '@/components/Homepage/news/RightSidebar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';

const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;
    console.log(id, "paramsRes")
    const categories = await getCategories();
    const news = await getNewsByCategoryId(id)

    return (
        <div className="container mx-auto grid grid-cols-12 gap-4 my-15">
            <div className="col-span-3">
                <LeftSidebar categories={categories} activeId={id} />
            </div>

            <div className="col-span-6 space-y-4 mt-6">
                <h2 className='font-bold text-lg'>News by Category</h2>
                {news.length > 0 ? (
                    news.map((n) => (
                        <NewsCard key={n._id} news={n} />
                    ))
                ) : (
                    <h2 className='font-bold text-xl text-center my-7'>No news Found!!</h2>
                )}
            </div>

            <div className="col-span-3">
                <RightSidebar />
            </div>
        </div>
    );
};

export default NewsCategoryPage;