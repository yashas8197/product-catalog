const products = [
  { id: 1, name: "Laptop", price: 19990 },
  { id: 2, name: "Samrtphone", price: 29990 },
  { id: 3, name: "Headphone", price: 5990 },
  { id: 4, name: "Tablet", price: 9990 },
]

const productList = document.querySelector('#product-list');

const productListDiv = products.map((product) => `
  <div
    <strong>ID: </strong>${product.id}
    <strong>Name: </strong>${product.name}
    <strong>Price: </strong>${product.price}
    <hr>
  </div>
`)

productList.innerHTML = productListDiv.join(" ")