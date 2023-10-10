const product = {
  type: "pen",
  price: 10,
  color: "black",
  name: "i teen",
  qty: 50,
  forSale: true
}

const item = document.getElementById('product')

function showProduct(name) {
  return item.innerHTML = `
    <div class="card">
                    <div class="card-header">
                        ${name}
                    </div>
                    <div class="card-body">
                        <p>${product.type}</p>
                        <p>${product.color}</p>
                    </div>
                </div>
    `
}



