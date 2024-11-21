import { useQuery } from "@tanstack/react-query";

export function useHoursAndPrices(museum) {

    const { data, isError, isLoading } = useQuery({
        queryKey: ['openingHoursAndPrices'],
        queryFn: fetchOpeningHoursAndPrices,
    });

    let slug = '';

    if (museum !== '') {
        switch (museum) {
            case "Dorf":
                slug = "dorf-moellegaard";
                break;
            case "Vild":
                slug = "vildmosemuseet";
                break;
            case "Moss":
                slug = "museum-moss";
                break;
            default:
                slug = "";
        }
    }

    async function fetchOpeningHoursAndPrices() {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}hours-and-prices?slug=${slug}&_fields=acf`
        );

        if (!response.ok) {
            console.error("API Error:", response.statusText);
            throw new Error("Failed to fetch opening hours and prices");
        }

        const result = await response.json();

        return result[0].acf;
    }

    return { data, isError, isLoading };
}
