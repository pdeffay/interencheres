import axios from 'axios'
const baseUrl = 'http://localhost:3000';

async function fetchItems() {
    let items = [];    
    items = await axios.get(`${baseUrl}/items`);
    return items.data;
}

async function fetchItemList(searchString) {
    let items = [];    
    items = await axios.get(`${baseUrl}/items?q=${searchString}`);
    return items.data;
}

async function fetchItemsBySaleId(saleId) {
    let items = [];    
    items = await axios.get(`${baseUrl}/items?sale_id=${saleId}`);
    return items.data;
}

async function fetchAvailableItems() {
    let items = [];
    let availableItems = [];
    
    items = await axios.get(`${baseUrl}/items`);
    if(items.data.length > 0) {
        availableItems = items.data.filter(item => {
            return item.sale_id === null;
        }) 
    }
    return availableItems;
}

export const itemsService = {
    fetchItems,
    fetchItemList,
    fetchItemsBySaleId,
    fetchAvailableItems
};