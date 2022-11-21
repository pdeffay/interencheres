import axios from 'axios'
const baseUrl = 'http://localhost:3000';

async function fetchSales() {
    let sales = [];    
    sales = await axios.get(`${baseUrl}/sales`);
    return sales.data;
}

async function fetchSaleFromId(saleId) {
    let sale = {};    
    sale = await axios.get(`${baseUrl}/sales?id=${saleId}`);
    return sale.data;
}

async function postSale(sale) {
    await axios.post(`${baseUrl}/sales`, sale);
}

export const salesService = {
    fetchSales,
    fetchSaleFromId,
    postSale
};