import { useQuery } from "@tanstack/react-query";

export function useActivities(museum) {
    const { data: aktiviteter = [], isError, isLoading } = useQuery({
        queryKey: ["aktiviteter"],
        queryFn: fetchAktiviteter,
    });

    async function fetchAktiviteter() {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}aktiviteter?acf_format=standard&_fields=acf,id,title&per_page=10`
        );

        const aktiviteter = await response.json();

        aktiviteter.forEach(aktivitet => {
            const imgUrl = aktivitet.acf.billede;
            if (imgUrl) {
                aktivitet.acf.billede = `${import.meta.env.VITE_API_BASE}${imgUrl}`;
                aktivitet.title = aktivitet.title.rendered;
            }
        });

        aktiviteter.sort((a, b) => {
            const dateA = new Date(a.acf.starttidspunkt);
            const dateB = new Date(b.acf.starttidspunkt);
            return dateB - dateA;
        });

        return aktiviteter;
    }

    let filteredAktiviteter = aktiviteter;

    if (museum !== '') {
        filteredAktiviteter = aktiviteter.filter(a => {
            switch (museum) {
                case "Dorf":
                    return a.acf.arrangor === "Dorf Møllegård";
                case "Vild":
                    return a.acf.arrangor === "Vildmosemuseet";
                case "Moss":
                    return a.acf.arrangor === "Museum Moss";
                default:
                    return true;
            }
        });
    }

    return { aktiviteter: filteredAktiviteter, isLoading, isError };
}
