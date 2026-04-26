import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({ categories, activeId }) => {
    return (
        <div>
            <h2 className="font-bold text-lg">
                All Categories
            </h2>

            {/* <ul className="flex flex-col gap-3 mt-6">
                {
                    categories.news_category.map(category => {
                        return <li key={category.category_id}
                            className={`
                              
                                ${activeId === category.category_id && "bg-slate-100"}
                                p-2 rounded-md font-bold text-center text-md`}
                        ><Link href={`/category/${category.category_id}`}>
                                {category.category_name}
                            </Link>

                        </li>
                        //   ${activeId === category.category_id ? "bg-slate-100" : ""}
                    })
                }
            </ul> */}

            <ul className="flex flex-col gap-3 mt-6">
                {categories.news_category.map(category => (
                    <li
                        key={category.category_id}
                        className={`${activeId === category.category_id ? "bg-violet-600 text-white" : ""} p-2 rounded-md font-bold text-center text-md`}
                    >
                        <Link href={`/category/${category.category_id}`}

                        >
                            {category.category_name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeftSidebar;