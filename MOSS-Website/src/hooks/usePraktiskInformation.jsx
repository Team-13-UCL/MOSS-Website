import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function useSkoletjenesten() {
    const { sectionSlug } = useParams(); 

    const fetchSkoletjenesten = async () => {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}${sectionSlug}?acf_format=standard&_fields=id,title,acf`
        );

        if (!response.ok) {
            console.error("API Error:", response.statusText);
            throw new Error("Failed to fetch information about Skoletjenesten.");
        }

        const skoletjenestenData = await response.json();

        skoletjenestenData.forEach((item) => {
            for (let i = 1; i <= 5; i++) {
                const imageKey = `billede_${i}`;
                const imagePath = item.acf[imageKey];

                if (imagePath) {
                    item.acf[imageKey] = `${import.meta.env.VITE_API_BASE}${imagePath}`;
                }
            }
        });

        return skoletjenestenData;
    };

    const { data: skoletjenesten, isError, isLoading } = useQuery({
        queryKey: ["skoletjenesten", sectionSlug], 
        queryFn: fetchSkoletjenesten,
    });

    return { skoletjenesten, isLoading, isError };
}