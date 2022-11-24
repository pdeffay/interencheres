import axios from 'axios'
const baseUrl = 'http://localhost:3000';

async function fetchItems() {
    let items = [];    
    items = await axios.get(`${baseUrl}/items`);
    return items.data;
}

async function fetchItem(id) {
    let items = [];    
    items = await axios.get(`${baseUrl}/items?id=${id}`);
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

async function patchItem(itemId, saleId) {
    const item = await fetchItem(itemId);
    axios.put(`${baseUrl}/items/${itemId}`, {
        title: item.title,
        description:item.description,
        sale_id: saleId,
      }).then(resp => {

    console.log(resp.data);
}).catch(error => {

    console.log(error);
});
}

export const itemsService = {
    fetchItems,
    fetchItemList,
    fetchItemsBySaleId,
    fetchAvailableItems,
    patchItem
};