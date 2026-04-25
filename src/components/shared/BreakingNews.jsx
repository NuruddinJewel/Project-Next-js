import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        "id": 1,
        "title": "Global Leaders Gather for Climate Summit in Geneva",
        "category": "World",
        "author": "Sarah Mitchell",
        "publishedAt": "2026-04-26T08:30:00Z",
        "source": "Global Times",
        "summary": "Representatives from over 190 nations convene to discuss binding emissions targets and renewable energy commitments for the next decade.",
        "imageUrl": "https://example.com/images/climate-summit.jpg",
        "tags": ["climate", "environment", "politics"],
        "readTimeMinutes": 5,
        "views": 42300
    },
    {
        "id": 2,
        "title": "Breakthrough in Quantum Computing Achieved by MIT Researchers",
        "category": "Technology",
        "author": "James Okafor",
        "publishedAt": "2026-04-26T07:15:00Z",
        "source": "Tech Insider",
        "summary": "MIT scientists demonstrate a 1,000-qubit processor capable of solving complex optimization problems 10,000 times faster than classical supercomputers.",
        "imageUrl": "https://example.com/images/quantum-computing.jpg",
        "tags": ["quantum", "MIT", "computing", "science"],
        "readTimeMinutes": 7,
        "views": 89500
    },
    {
        "id": 3,
        "title": "Stock Markets Rally as Inflation Data Comes in Below Expectations",
        "category": "Finance",
        "author": "Elena Vasquez",
        "publishedAt": "2026-04-26T06:45:00Z",
        "source": "Market Watch Daily",
        "summary": "The S&P 500 surged 2.3% after April's CPI report showed inflation cooling to 2.1%, boosting investor confidence in a potential rate cut.",
        "imageUrl": "https://example.com/images/stock-market.jpg",
        "tags": ["stocks", "inflation", "economy", "Fed"],
        "readTimeMinutes": 4,
        "views": 61200
    },
    {
        "id": 4,
        "title": "NASA Confirms Evidence of Ancient Water on Mars",
        "category": "Science",
        "author": "Dr. Priya Nair",
        "publishedAt": "2026-04-25T22:00:00Z",
        "source": "Space & Beyond",
        "summary": "New data from the Perseverance rover reveals ancient lake beds containing minerals that could only form in the presence of liquid water billions of years ago.",
        "imageUrl": "https://example.com/images/mars-water.jpg",
        "tags": ["NASA", "Mars", "space", "science"],
        "readTimeMinutes": 6,
        "views": 134800
    },
    {
        "id": 5,
        "title": "World Cup 2026 Ticket Sales Shatter All Previous Records",
        "category": "Sports",
        "author": "Carlos Mendes",
        "publishedAt": "2026-04-25T18:30:00Z",
        "source": "SportsPulse",
        "summary": "FIFA reports that over 12 million ticket applications were received in the first 48 hours, making it the highest demand in World Cup history.",
        "imageUrl": "https://example.com/images/world-cup.jpg",
        "tags": ["FIFA", "World Cup", "football", "sports"],
        "readTimeMinutes": 3,
        "views": 215600
    },
    {
        "id": 6,
        "title": "New AI Model Can Detect Alzheimer's 10 Years Before Symptoms Appear",
        "category": "Health",
        "author": "Dr. Lisa Chen",
        "publishedAt": "2026-04-25T14:00:00Z",
        "source": "MedNews Today",
        "summary": "A team of neurologists and AI researchers develop a deep learning model that analyzes retinal scans to predict early-stage Alzheimer's with 94% accuracy.",
        "imageUrl": "https://example.com/images/alzheimers-ai.jpg",
        "tags": ["AI", "health", "Alzheimers", "medicine"],
        "readTimeMinutes": 8,
        "views": 98700
    },
    {
        "id": 7,
        "title": "Electric Vehicle Sales Surpass Gasoline Cars for First Time in Europe",
        "category": "Business",
        "author": "Anna Bergström",
        "publishedAt": "2026-04-25T11:20:00Z",
        "source": "AutoWorld",
        "summary": "Q1 2026 data reveals EVs accounted for 51% of new car registrations across the EU, marking a historic turning point in the automotive industry.",
        "imageUrl": "https://example.com/images/ev-sales.jpg",
        "tags": ["EV", "electric vehicles", "Europe", "automotive"],
        "readTimeMinutes": 5,
        "views": 74300
    },
    {
        "id": 8,
        "title": "Iconic Cannes Film Festival Celebrates 80th Anniversary with Record Submissions",
        "category": "Entertainment",
        "author": "Marie Dupont",
        "publishedAt": "2026-04-25T09:00:00Z",
        "source": "CineWorld",
        "summary": "This year's Cannes festival received over 3,800 film submissions from 145 countries, reflecting a global surge in independent filmmaking.",
        "imageUrl": "https://example.com/images/cannes-2026.jpg",
        "tags": ["Cannes", "film", "cinema", "entertainment"],
        "readTimeMinutes": 4,
        "views": 53100
    },
    {
        "id": 9,
        "title": "Major Earthquake Strikes Southern Japan, Tsunami Warning Issued",
        "category": "World",
        "author": "Kenji Tanaka",
        "publishedAt": "2026-04-24T03:47:00Z",
        "source": "Asia Pacific News",
        "summary": "A 7.4 magnitude earthquake off the coast of Kyushu triggers a tsunami warning for coastal regions. Evacuation orders are in effect for over 200,000 residents.",
        "imageUrl": "https://example.com/images/japan-earthquake.jpg",
        "tags": ["earthquake", "Japan", "natural disaster", "tsunami"],
        "readTimeMinutes": 6,
        "views": 302400
    },
    {
        "id": 10,
        "title": "OpenAI Announces Claude-Rivaling Model with Real-Time Reasoning",
        "category": "Technology",
        "author": "Ben Hartley",
        "publishedAt": "2026-04-24T16:00:00Z",
        "source": "AI Chronicle",
        "summary": "OpenAI unveils its latest flagship model featuring real-time chain-of-thought reasoning and multimodal capabilities, set to launch publicly next month.",
        "imageUrl": "https://example.com/images/openai-model.jpg",
        "tags": ["OpenAI", "AI", "LLM", "technology"],
        "readTimeMinutes": 5,
        "views": 187900
    }
]



const BreakingNews = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-200 py-4 px-2 container mx-auto'>
            <button className='btn bg-red-500 text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={80}>
                {/* {news.map(n => {
                    return <span key={n.id}>{n.title}</span>
                })} */}
                {news.map(n => <span key={n.id}>
                    {n.title}
                </span>)
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;