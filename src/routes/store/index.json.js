import * as api from '@/utils/api.js';

const productLimit = 24;


export async function get(req, res, next) {
  const products = await api.get(`/products?limit=${productLimit}`);
  const colors = await api.get('/colors');

  const respObject = {
    products: products,
    colors: colors,
  };

  if (products) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(respObject));
  } else {
    next();
  }
}
