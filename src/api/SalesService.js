import axios from 'axios'
import { itemsService } from './ItemsService';
const baseUrl = 'http://localhost:3000';

async function fetchSales() {
    let sales = [];    
    sales = await axios.get(`${baseUrl}/sales`);
    return sales.data;
}

async function fetchSaleList(searchString) {
    let sales = [];    
    sales = await axios.get(`${baseUrl}/sales?q=${searchString}`);
    return sales.data;
}

async function fetchSale(saleId) {
    let sale = {};    
    sale = await axios.get(`${baseUrl}/sales?id=${saleId}`);

    if (sale.data.length > 0 && sale.data.length < 2){
        return sale.data[0];
    }
}

async function deleteSale(saleId) {
    await axios.delete(`${baseUrl}/sales/${saleId}`);
}

async function postSale(sale) {
    const addedSale = await axios.post(`${baseUrl}/sales`, sale);
    if (addedSale.status === 201) {
        for (let i = 0; i < sale.item_ids.length; i++) {
            console.log(addedSale.data.id);
            itemsService.patchItem(sale.item_ids[i], addedSale.data.id);
        }
    } else {
        deleteSale(sale.id);
    }
}

async function fetchSalesByCategoryId(categoryId) {
    let sales = [];     
    sales = await axios.get(`${baseUrl}/sales?category_id=${categoryId}`);
    return sales.data;
}

export const salesService = {
    fetchSales,
    fetchSaleList,
    fetchSalesByCategoryId,
    fetchSale,
    postSale
};