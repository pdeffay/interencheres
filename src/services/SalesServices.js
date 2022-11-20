import axios from 'axios'
const baseUrl = 'http://localhost:3000';

export async function fetchSales() {
    let sales = [];    
    sales = await axios.get(`${baseUrl}/sales`);
    return sales;
}

export async function fetchSaleFromId(saleId) {
    let sale = {};    
    sale = await axios.get(`${baseUrl}/sales?id=${saleId}`);
    return sale;
}

export async function postSale(sale) {
    await axios.post(`${baseUrl}/sales`, sale);
}