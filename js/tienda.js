function addToCart(id) {
  if (cart[id]) {
    cart[id]++;
  } else {
    cart[id] = 1;
  }
  paintCart()
}

function removeToCart(id) {
  if (cart[id] == 1) {
    delete cart[id];
  } else {
    cart[id]--;
  }
  paintCart()
}

function paintCart() {

  $('#carrito').fadeOut(0);
  $('#notItem').fadeOut(0);

  localStorage.setItem("cart", JSON.stringify(cart));
  let html = "";
  let total = 0;
  for (const key in cart) {
    if (cart.hasOwnProperty(key)) {
      const element = cart[key];
      let item = data[key];
      total += item.price * element;
      html += `<tr>
        <td>${item.name}</td>
        <td class="text-center">${element} x ${item.price}</td>
        <td class="text-center">$${item.price * element}</td>
        <td>
          <buttom class="myButton2" onclick="addToCart(${key})">+</buttom>
          <buttom class="myButton2" onclick="removeToCart(${key})">-</buttom>
        </td>
      </tr>`;
    }
  }

  html += `<tr class="trTotal">
        <td></td>
        <td></td>
        <td class="text-center">Total:</td>
        <td class="text-center">$${total}</td>
        <td></td>
      </tr>`;

  $('#lista-carrito tbody').html(html);
  $("#lista-carrito2 tbody").html(html)

  $('#loading').fadeOut(250);

  setTimeout(() => {
    if (total == 0) {
      $('#notItem').fadeIn();
    } else {
      $('#carrito').fadeIn();
    }
  }, 250)
}

let store = localStorage.getItem("cart")
if (store == null) {
  var cart = {};
} else {
  var cart = JSON.parse(store);
}
paintCart();