import axios from 'axios'
const baseUrl = 'http://localhost:3000';

async function fetchItems() {
    let items = [];    
    items = await axios.get(`${baseUrl}/items`);
    return items.data;
}

async function fetchItemsFromSale(saleId) {
    let items = [];    
    items = await axios.get(`${baseUrl}/items?sale_id=${saleId}`);
    return items.data;
}

export const itemsService = {
    fetchItems,
    fetchItemsFromSale
};