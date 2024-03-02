// Sample product data
const products = [
  { name: 'electronics', size: 'small', price: 'low', quality: 'low', category: 'electronics', color: 'red', image: 'https://www.shutterstock.com/image-illustration/collection-consumer-electronics-flying-air-260nw-738107467.jpg' },
  { name: 'clothing', size: 'medium', price: 'medium', quality: 'medium', category: 'clothing', color: 'blue', image: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448749.jpg' },
  { name: 'books', size: 'large', price: 'high', quality: 'high', category: 'books', color: 'green', image: 'https://makeheadway.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F181188%2F5598837b59%2F8280cc7c530544e6969f-15cc2ba78107d8.jpg&w=750&q=75' },
  { name: 'furniture', size: 'medium', price: 'low', quality: 'high', category: 'furniture', color: 'black', image: 'https://img.freepik.com/free-photo/picture-frame-by-velvet-armchair_53876-132788.jpg' },
  { name: 'electronics-2', size: 'small', price: 'low', quality: 'low', category: 'electronics', color: 'red', image: 'https://www.shutterstock.com/image-illustration/collection-consumer-electronics-flying-air-260nw-738107467.jpg' },
  { name: 'clothing-2', size: 'medium', price: 'medium', quality: 'medium', category: 'clothing', color: 'blue', image: 'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448749.jpg' },
  { name: 'books-2', size: 'large', price: 'high', quality: 'high', category: 'books', color: 'green', image: 'https://makeheadway.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F181188%2F5598837b59%2F8280cc7c530544e6969f-15cc2ba78107d8.jpg&w=750&q=75' },
  { name: 'furniture-2', size: 'medium', price: 'low', quality: 'high', category: 'furniture', color: 'black', image: 'https://img.freepik.com/free-photo/picture-frame-by-velvet-armchair_53876-132788.jpg' },
];


// Display initial product list
displayProducts(products);
function displayProducts(productsToShow) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  productsToShow.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Size: ${product.size}</p>
          <p>Price: ${product.price}</p>
          <p>Quality: ${product.quality}</p>
          <p>Category: ${product.category}</p>
          <p>Color: ${product.color}</p>
          <button class="add-to-cart-button" onclick="addToCart('${product.name}', '${product.price}', '${product.size}', '${product.quality}', '${product.category}', '${product.color}', '${product.image}')">Add to Cart</button>`;
      productList.appendChild(productElement);
  });
}

function addToCart(name, price, size, quality, category, color, image) {
  const cartItemsList = document.getElementById('cart-items-modal');
  const cartItem = document.createElement('li');
  cartItem.classList.add('cart-item');
  cartItem.innerHTML = `
  <img src="${image}" alt="${name}">
      <span>Name: ${name}</span>
      <span>Size: ${size}</span>
      <span>Price: ${price}</span>
      <span>Quality: ${quality}</span>
      <span>Category: ${category}</span>
      <span>Color: ${color}</span>

  `;
  cartItemsList.appendChild(cartItem);

  // Show the cart modal
  openCartModal();
}

function openCartModal() {
  const modal = document.getElementById('cart-modal');
  modal.style.display = 'block';
}

function closeCartModal() {
  const modal = document.getElementById('cart-modal');
  modal.style.display = 'none';

  // Clear the cart modal content when closed
  const cartItemsList = document.getElementById('cart-items-modal');
  cartItemsList.innerHTML = '';
}

function filterProducts() {
  const searchValue = document.getElementById('search').value.toLowerCase();
  const sizeFilter = document.getElementById('size').value;
  const priceFilter = document.getElementById('price').value;
  const qualityFilter = document.getElementById('quality').value;

  const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(searchValue) &&
      (sizeFilter === '' || product.size === sizeFilter) &&
      (priceFilter === '' || product.price === priceFilter) &&
      (qualityFilter === '' || product.quality === qualityFilter)
  );

  displayProducts(filteredProducts);
}

function sortProducts() {
  const sortKey = document.getElementById('sort').value;

  if (sortKey) {
      products.sort((a, b) => {
          if (a[sortKey] < b[sortKey]) return -1;
          if (a[sortKey] > b[sortKey]) return 1;
          return 0;
      });

      displayProducts(products);
  }
}
