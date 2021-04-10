'use strict';

/*
  Vamos a crear un ecommerce

  Por un lado tenemos los usuarios, que van a estar representados por una clase
  Solo voy a necesitar una instancia de un usuario.
  El usuario tiene un carrito que es privado, el carrito es un array.
  En el array el usuario va metiendo items
  El usuario va a tener un metodo de añadir al carrito, porque no puedo modificarlo desde fuera,
  añadir al carrito recibe un item como parametro.
  Tambien tiene un metodo pagar que devuelve el carrito para poder pasarlo a la tienda y que emita la
  factura

  Voy a tener una clase Item. Los items los voy a generar a partir de los datos de abajo.

  Voy a tener una tienda representada con su clase.
  Va a tener un metodo comprar, que recibe el carrito de usuario
  El metodo de comprar saca por la consola la factura
  cada linea de la factura tiene el nombre del articulo, las unidades, el precio por unidad y el 
  precio de las unidades de esa linea.
  La ultima linea saca el total de todo el carrito
*/

class User {
  #cart = [];

  add2Cart(product, quantity = 1) {
    const itemOfCart = this.#cart.find((item) => item.itemName === product);
    if (itemOfCart) {
      this.updateCart(itemOfCart, quantity);
    } else {
      this.insertCart(product, quantity);
    }
  }

  updateCart(itemOfCart, quantity) {
    itemOfCart.quantity += quantity;
    itemOfCart.total = itemOfCart.quantity * itemOfCart.itemPrice;
  }

  insertCart(product, quantity) {
    const itemPrice = products.returnPrice(product);
    this.#cart.push({ itemName: product, itemPrice: itemPrice, quantity: quantity, total: itemPrice * quantity });
  }

  checkOut() {
    Shop.pay(this.#cart);
  }
}

class CreateItems {
  names;
  prices;
  constructor(names, prices) {
    this.names = names;
    this.prices = prices;
  }

  returnPrice(item) {
    return this.prices[this.names.indexOf(item)];
  }
}

const itemNames = ['Camisa', 'Pantalon', 'Calcetines'];
const itemPrices = [13, 27, 100];
const products = new CreateItems(itemNames, itemPrices);

class Shop {
  static pay(cart) {
    for (let i = 0; i < cart.length; i++) {
      console.log(
        `Artículo ${cart[i].itemName}, Cantidad ${cart[i].quantity}, Precio ${cart[i].itemPrice} €, Total ${cart[i].total} €`
      );
    }
    const total = cart.reduce((accumulator, item) => accumulator + item.total, 0);
    console.log(`Total ${total} €`);
  }
}

const javi = new User([]);

javi.add2Cart('Pantalon', 1);
javi.add2Cart('Camisa', 2);
javi.add2Cart('Pantalon', 3);
javi.add2Cart('Calcetines', 4);
javi.add2Cart('Camisa');
javi.checkOut();
