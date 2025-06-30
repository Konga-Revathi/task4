const products = [
  { name: "Smartphone", category: "electronics", price: 699 },
  { name: "Laptop", category: "electronics", price: 999 },
  { name: "Jeans", category: "clothing", price: 40 },
  { name: "T-Shirt", category: "clothing", price: 20 },
  { name: "Headphones", category: "electronics", price: 150 },
  { name: "Jacket", category: "clothing", price: 80 }
];

function displayProducts(productList) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  if (productList.length === 0) {
    container.innerHTML = "<p>No products found.</p>";
    return;
  }

  productList.forEach(product => {
    container.innerHTML += `
      <div class="product">
        <h3>${product.name}</h3>
        <p>Category: ${product.category}</p>
        <p>Price: $${product.price}</p>
      </div>
    `;
  });
}

function filterAndSort() {
  const category = document.getElementById("category").value;
  const sort = document.getElementById("sort").value;

  let filtered = category === "all"
    ? [...products]
    : products.filter(p => p.category === category);

  if (sort === "price") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  displayProducts(filtered);
}

window.onload = () => filterAndSort();
