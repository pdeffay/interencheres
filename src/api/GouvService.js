import axios from 'axios'
const baseUrl = 'https://geo.api.gouv.fr';

async function fetchCities(searchString) {
    let cities = await axios.get(`${baseUrl}/communes?nom=${searchString}`);
    return cities;
}

export const gouvService = {
    fetchCities
};