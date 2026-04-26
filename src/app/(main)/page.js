// import LeftSidebar from "@/components/Homepage/news/LeftSidebar";
// import RightSidebar from "@/components/Homepage/news/RightSidebar";
// import Image from "next/image";

// // async function getCategories() {
// //   const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
// //   const data = await res.json();
// //   return data.data;
// // }

// async function getCategories() {
//   const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
//   if (!res.ok) throw new Error("Failed to fetch News data");
//   const data = await res.json();
//   return data.data;
// }

// async function getNewsByCategoryId(category_id) {
//   const res = await fetch(`https://openapi.programming-hero.com/api/news/${category_id}`);
//   if (!res.ok) throw new Error("Failed to fetch News data");
//   const data = await res.json();
//   return data.data;
// }


// export default async function Home() {
//   const categories = await getCategories();
//   console.log(categories.news_category, "categories");
//   const news = await getNewsByCategoryId("03");
//   console.log(news, "news")
//   return <div className="container mx-auto grid grid-cols-12 gap-4 my-15">
//     <div className="col-span-3">
//       {/* <h2 className="font-bold text-lg">
//         All Categories
//       </h2>

//       <ul className="flex flex-col gap-3 mt-6">
//         {
//           categories.news_category.map(category => {
//             return <li key={category.category_id}
//               className="bg-slate-100 p-2 rounded-md font-bd text-center text-md"
//             >{category.category_name}</li>

//           })
//         }
//       </ul> */}
//       <LeftSidebar categories={categories} activeId="" />
//     </div>
//     <div className="font-bold text-2xl bg-purple-100 col-span-6">
//       All News
//       {
//         news.map((n) => {
//           return <div key={n._id}>{n.title}</div>
//         })}
//     </div>
//     <div className="col-span-3">
//       <RightSidebar />
//     </div>
//   </div>


// }
// import LeftSidebar from "@/components/Homepage/news/LeftSidebar";
// import RightSidebar from "@/components/Homepage/news/RightSidebar";

// async function getCategories() {
//   const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
//   if (!res.ok) throw new Error("Failed to fetch categories");
//   const data = await res.json();
//   return data.data;
// }

// export default async function Home() {
//   const categories = await getCategories();

//   return (
//     <div className="container mx-auto grid grid-cols-12 gap-4 my-15">
//       <div className="col-span-3">
//         <LeftSidebar categories={categories} activeId="" />
//       </div>
//       <div className="col-span-6">
//         All News
//       </div>
//       <div className="col-span-3">
//         <RightSidebar />
//       </div>
//     </div>
//   );
// }


import LeftSidebar from "@/components/Homepage/news/LeftSidebar";
import RightSidebar from "@/components/Homepage/news/RightSidebar";

async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  if (!res.ok) throw new Error("Failed to fetch categories");
  const data = await res.json();
  return data.data;
}

async function getNewsByCategoryId(category_id) {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
  if (!res.ok) throw new Error("Failed to fetch news");
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const categories = await getCategories();
  const news = await getNewsByCategoryId("01");
  console.log(news[0]);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-15">
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={"01"} />
      </div>
      <div className="col-span-6">
        All News
        {news.map((n) => (
          <div key={n._id} className="p-6 rounded-md border">{n.title}</div>
        ))}
      </div>
      <div className="col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
}