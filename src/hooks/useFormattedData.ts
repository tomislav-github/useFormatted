import { useState } from "react";

type Data = { [key: string]: any };

const useFormattedData = (data: Data[]) => {

    const [formatted, setFormatted] = useState(data);

    const search = (searchInput: string) => {
        const filteredData = formatted.filter(
            (data) =>
                JSON.stringify(data)
                    .toLowerCase()
                    .indexOf(searchInput.toLowerCase()) !== -1
        );

        setFormatted([...filteredData]);
    };

    const filter = (filterFunc: (data: Data) => boolean) => {
        const filteredData = formatted.filter(filterFunc);

        setFormatted([...filteredData]);
    };

    const sortBy = (field: string) => {
        const sortedData = formatted.sort((a, b) => (a[field] > b[field] ? 1 : -1));

        setFormatted([...sortedData]);
    };

    return {
        formatted,
        search,
        filter,
        sortBy,
    };
};

export default useFormattedData;