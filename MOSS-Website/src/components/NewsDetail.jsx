import React from "react";
import { useLocation } from "react-router-dom";

const NewsDetail = () => {
    const location = useLocation();
    const news = location.state?.news;

    if (!news) {
        return <div className="text-center mt-10 text-9">Nyheden kunne ikke indlæses.</div>;
    }

    const {
        title: { rendered },
        acf: { introtekst, beskrivelse },
    } = news;

    return (
        <div className="news-detail p-8 max-w-3xl mx-auto mt-8">
            <h2 className="font-area text-4 text-2xl mb-6 text-center">{rendered}</h2>
            <p className="font-bold text-6 text-lg mb-4 text-center">{introtekst}</p>
            <div
                className="text-9 leading-relaxed"
                dangerouslySetInnerHTML={{
                    __html: beskrivelse.replace(/\r?\n/g, "<br />"),
                }}
            ></div>
        </div>
    );
};

export default NewsDetail;
