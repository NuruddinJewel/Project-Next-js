// import { redirect } from "next/navigation";
// // import About from "../../about/page";

// const default_category_id = "04";

// const Home = () => {
//     redirect(`/category/${default_category_id}`);
//     // redirect(`/news/category/${About}`);

// };

// export default Home;

import { redirect } from "next/navigation";

const default_category_id = "01";

const Home = () => {

    // console.log("Home page rendering, redirecting...");
    redirect(`/category/${default_category_id}`);
};

export default Home;
// https://nextjs.org/docs/app/api-reference/functions/redirect