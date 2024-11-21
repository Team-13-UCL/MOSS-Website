import { useQuery } from "@tanstack/react-query";

export default function useAboutMuseum(museum)
{
    const slugMap = {
        Dorf: "dorf-moellegaard",
        Vild: "vildmosemuseet",
        Moss: "museum-moss",
    };

    const slug = slugMap[museum] || "";

    const fetchAboutMuseum = async () => {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}om-museet?acf_format=standard&slug=${slug}&_fields=id,title,slug,acf`
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

    const { data: aboutMuseum = [], isError, isLoading } = useQuery({
        queryKey: ["aboutMuseum", slug],
        queryFn: fetchAboutMuseum,
    });

    return { data: aboutMuseum, isLoading, isError };
}