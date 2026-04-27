// import Image from "next/image";

// async function getNewsById(id) {
//     const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`);
//     if (!res.ok) throw new Error("Failed to fetch news");
//     const data = await res.json();
//     return data.data[0];
// }

// const NewsDetailsPage = async ({ params }) => {
//     const { id } = await params;
//     const news = await getNewsById(id);

//     return (
//         <div className="container mx-auto my-15">
//             <h1 className="font-bold text-2xl">{news.title}</h1>
//             <Image src={news.image_url} alt={news.title} width={600}
//                 height={300}
//                 className="w-full rounded-md" />
//             <p>{news.details}</p>
//         </div>
//     );
// };

// export default NewsDetailsPage;
import Image from "next/image";

async function getNewsById(id) {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`);
    if (!res.ok) throw new Error("Failed to fetch news");
    const data = await res.json();
    return data.data[0];
}

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const news = await getNewsById(id);

    return (
        <div className="container mx-auto my-10 max-w-3xl px-4">

            {/* Title */}
            <h1 className="font-bold text-3xl leading-snug text-gray-800 mb-4">
                {news.title}
            </h1>

            {/* Image */}
            <div className="relative w-full h-100 mb-6">
                <Image
                    src={news.image_url}
                    alt={news.title}
                    fill
                    className="object-cover rounded-xl"
                />
            </div>

            {/* Details */}
            <p className="text-gray-600 text-base leading-relaxed">
                {news.details}
            </p>

        </div>
    );
};

export default NewsDetailsPage;