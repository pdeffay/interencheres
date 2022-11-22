import axios from 'axios'
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

async function postSale(sale) {
    await axios.post(`${baseUrl}/sales`, sale);
}

async function fetchSalesByCategoryId(categoryId) {
    let sales = [];     
    console.log(categoryId);
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