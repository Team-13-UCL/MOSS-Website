import { useQuery } from "@tanstack/react-query";

export default function useSchoolService() {

    const fetchAboutMuseum = async () => {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}skoletjenesten?acf_format=standard&_fields=id,acf`
        );

        if (!response.ok) {
            console.error("API Error:", response.statusText);
            throw new Error("Failed to fetch information about the school service.");
        }

        const museumData = await response.json();
        console.log(museumData);
        const beskrivelse = museum.acf['beskrivelse'];
        const imagePath = museum.acf[`billede_1`];

        if (imagePath) {
            museum.acf[imageKey] = `${import.meta.env.VITE_API_BASE}${imagePath}`;
        }
        ;

        return museumData;
    };

    const { data: aboutMuseum = [], isError, isLoading } = useQuery({
        queryKey: ["aboutMuseum", slug],
        queryFn: fetchAboutMuseum,
    });

    return { data: aboutMuseum, isLoading, isError };
}