import axios from 'axios'
const baseUrl = 'http://localhost:3000';

export async function fetchItems() {
    let items = [];    
    items = await axios.get(`${baseUrl}/items`);
    return items;
}

export async function fetchItemsFromSale(saleId) {
    let items = [];    
    items = await axios.get(`${baseUrl}/items?sale_id=${saleId}`);
    return items;
}
