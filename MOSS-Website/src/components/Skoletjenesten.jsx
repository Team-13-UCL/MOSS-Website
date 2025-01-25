import React from "react";
import useSchoolService from "../hooks/useSchoolService";

function convertNewlinesToHTML(str) {
    return str.replace(/\r?\n/g, "<br />");
}

const Skoletjenesten = ({ museum }) => {
    const { data, isLoading, isError } = useSchoolService();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading Skoletjenesten information.</div>;

    return (
        <div>
            {data && data.map((item) => (
                <div key={item.id}>
                    <div
                        className="font-regular"
                        dangerouslySetInnerHTML={{
                            __html: convertNewlinesToHTML(item.acf.beskrivelse) || "",
                        }}
                    />
                    {item.acf.billede_1 && (
                        <img src={item.acf.billede_1.url} alt={item.acf.billede_1.alt} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default Skoletjenesten;