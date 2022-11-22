import axios from 'axios'
const baseUrl = 'http://localhost:3000';

async function fetchCategories() {
    let categories = [];    
    categories = await axios.get(`${baseUrl}/categories`);
    return categories.data;
}

async function fetchCategoryBySlug(categorySlug) {
    let category = {};    
    category = await axios.get(`${baseUrl}/categories?slug=${categorySlug}`);

    if (category.data.length > 0 && category.data.length < 2){
        return category.data[0];
    }
}

export const categoriesService = {
    fetchCategories,
    fetchCategoryBySlug
};