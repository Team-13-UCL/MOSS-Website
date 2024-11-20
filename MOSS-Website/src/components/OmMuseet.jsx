import React from "react";
import useAboutMuseum from "../hooks/useAboutMuseum";

function convertNewlinesToHTML(str) {
    return str.replace(/\r?\n/g, "<br />");
}

const OmMuseet = ({ museum }) => {
    const { data: aboutMuseum, isLoading, isError } = useAboutMuseum(museum);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading information about the museum.</div>;

    return (
        <div>
            {aboutMuseum.map((museum) => (
                <div key={museum.id}>
                    <h1 className="font-area text-2xl">{museum.title.rendered}</h1>
                    <p className="font-bold">{museum.acf.introtekst}</p>
                    <div
                        className="font-regular"
                        dangerouslySetInnerHTML={{
                            __html: convertNewlinesToHTML(museum.acf.beskrivelse) || "",
                        }}
                    />
                    {Array.from({ length: 5 }).map((_, i) => {
                        const imgKey = `billede_${i + 1}`;
                        const imgUrl = museum.acf[imgKey];
                        return imgUrl ? (
                            <img key={imgKey} src={imgUrl} alt={`Image ${i + 1}`} />
                        ) : null;
                    })}
                    {museum.acf.undertitel_1 && (
                        <div>
                            <h2 className="font-bold">{museum.acf.undertitel_1}</h2>
                            <div
                                className="font-regular"
                                dangerouslySetInnerHTML={{
                                    __html: convertNewlinesToHTML(museum.acf.undertitel_1_beskrivelse) || "",
                                }}
                            />
                        </div>
                    )}
                    {museum.acf.undertitel_2 && (
                        <div>
                            <h2 className="font-bold">{museum.acf.undertitel_2}</h2>
                            <div
                                className="font-regular"
                                dangerouslySetInnerHTML={{
                                    __html: convertNewlinesToHTML(museum.acf.undertitel_2_beskrivelse) || "",
                                }}
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default OmMuseet;
