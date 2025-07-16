import { fetchProducts } from './modules/network.js';
import { renderProductCard } from './modules/ui.js';

const productContainer = document.getElementById('products');

fetchProducts().then((products) => {
  products.forEach((product) => {
    const card = renderProductCard(product);
    productContainer.append(card);
  });
});
