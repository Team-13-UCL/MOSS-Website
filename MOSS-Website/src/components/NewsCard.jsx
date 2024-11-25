import React from "react";
import { NavLink } from "react-router-dom";

const NewsCard = ({ news }) => {
    const {
        id,
        title: { rendered },
    } = news;

    return (
        <div className="news-card group relative border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-200 ease-in-out flex flex-col items-center justify-center">
            <h3 className="font-bold text-lg text-6 mb-4 group-hover:text-dorf text-center">
                {rendered}
            </h3>
            <NavLink
                to={`/om-museet/nyheder/${id}`}
                state={{ news }}
                className="inline-block px-4 py-2 text-white bg-vild rounded-md text-sm font-regular transition-all duration-200 ease-in-out hover:bg-vild-dark-100"
            >
                Læs mere
            </NavLink>
        </div>
    );
};

export default NewsCard;
