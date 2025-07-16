import { addToCart } from './storage.js';

export function renderProductCard(product) {
  const card = document.createElement('div');
  card.classList.add(
    'border',
    'rounded-lg',
    'p-4',
    'shadow',
    'hover:shadow-lg',
    'transition'
  );

  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}" class="h-48 w-full object-contain mb-4" />
    <h2 class="text-lg font-semibold mb-2">${product.title}</h2>
    <p class="text-gray-700 mb-2">$${product.price}</p>
  `;

  const button = document.createElement('button');
  button.textContent = 'Add to Cart';
  button.className = 'bg-blue-500 text-white px-4 py-2 rounded mt-2';

  button.addEventListener('click', () => {
    addToCart(product);
    alert(`Added to cart: ${product.title}`);
  });

  card.append(button);

  return card;
}
