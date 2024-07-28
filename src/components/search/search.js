import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { geoApiOptions, GEO_API_URL } from "../../api";

const Search = ({ onsearchchange }) => {

    const [search, setsearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
            geoApiOptions
        )
            .then((response) => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        };
                    }),
                };
            });
    };

    const handleonchange = (searchData) => {
        setsearch(searchData);
        onsearchchange(searchData);
    }

    return (

        <AsyncPaginate

            placeholder="Search The City"
            debounceTimeout={600}
            value={search}
            onChange={handleonchange}
            loadOptions={loadOptions}

        />

    )
}


export default Search