import { useQuery } from "@tanstack/react-query";

export default function useSchoolService() {

    const fetchSchoolService = async () => {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}skoletjenesten?acf_format=standard&_fields=id,acf`
        );

        if (!response.ok) {
            console.error("API Error:", response.statusText);
            throw new Error("Failed to fetch information about the school service.");
        }

        const schoolServiceData = await response.json();

        schoolServiceData.forEach((museum) => {
            for (let i = 1; i <= 5; i++) {
                const imageKey = `billede_${i}`;
                const imagePath = museum.acf[imageKey];
                if (imagePath) {
                    museum.acf[imageKey] = `${import.meta.env.VITE_API_BASE}${imagePath}`;
                }
            }
        });

        return schoolServiceData;
    };

    const { data: schoolServiceData = [], isError, isLoading } = useQuery({
        queryKey: ["aboutMuseum"],
        queryFn: fetchSchoolService,
    });

    return { data: schoolServiceData, isLoading, isError };
}