import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function useAbout() {
    const { sectionSlug } = useParams(); 

    const fetchAbout = async () => {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}${sectionSlug}?acf_format=standard&_fields=id,title,acf`
        );

        if (!response.ok) {
            console.error("API Error:", response.statusText);
            throw new Error("Failed to fetch information about the museum.");
        }

        const museumData = await response.json();

        museumData.forEach((museum) => {
            for (let i = 1; i <= 5; i++) {
                const imageKey = `billede_${i}`;
                const imagePath = museum.acf[imageKey];

                if (imagePath) {
                    museum.acf[imageKey] = `${import.meta.env.VITE_API_BASE}${imagePath}`;
                }
            }
        });

        return museumData;
    };

    const { data: about, isError, isLoading } = useQuery({
        queryKey: ["about", sectionSlug], 
        queryFn: fetchAbout,
    });

    return { about, isLoading, isError };
}
