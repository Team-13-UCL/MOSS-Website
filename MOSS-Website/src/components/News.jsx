import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import useAbout from "../hooks/useAbout";
import NewsCard from "../components/NewsCard";
import NewsDetail from "../components/NewsDetail";

const News = () => {
    const { about, isError, isLoading } = useAbout();
    const navigate = useNavigate();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Kunne ikke indlæse nyheder...</div>;

    const handleNewsClick = (news) => {
        navigate(`/om-museet/nyheder/${news.id}`, { state: { news } });
    };

    return (
        <div className="news-page" style={{ padding: "24px" }}>
            <h2>Nyheder</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {about.map((news) => (
                    <NewsCard key={news.id} news={news} onClick={() => handleNewsClick(news)} />
                ))}
            </div>

            <Routes>
                <Route path=":id" element={<NewsDetail />} />
            </Routes>
        </div>
    );
};

export default News;
