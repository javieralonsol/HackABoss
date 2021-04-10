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
    // ¿está ese producto ya en el carrito?
    const itemOfCart = this.#cart.find((item) => item.itemName === product);
    if (itemOfCart) {
      itemOfCart.quantity += quantity;
      itemOfCart.total = itemOfCart.quantity * itemOfCart.itemPrice;
    } else {
      const itemPrice = products.find((item) => item.name === product).price;
      this.#cart.push({ itemName: product, itemPrice: itemPrice, quantity: quantity, total: itemPrice * quantity });
    }
  }

  checkOut() {
    Shop.pay(this.#cart);
  }
}

class Item {
  name;
  price;
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Shop {
  static pay(cart) {
    // cada línea a la consola
    for (let i = 0; i < cart.length; i++) {
      console.log(
        `Artículo ${cart[i].itemName}, Cantidad ${cart[i].quantity}, Precio ${cart[i].itemPrice} €, SubTotal ${cart[i].total} €`
      );
    }

    // precio total
    const total = cart.reduce((accumulator, item) => accumulator + item.total, 0);
    console.log(`Total ${total} €`);
  }
}

// crear el array de productos
const itemNames = ['Camisa', 'Pantalon', 'Calcetines'];
const itemPrices = [13, 27, 100];
const products = [];

for (let i = 0; i < itemNames.length; i++) {
  products.push(new Item(itemNames[i], itemPrices[i]));
}

// crear el usuario Javi
const javi = new User([]);

// añadir al carrito 10 productos y cantidades aleatorias
for (let f = 0; f < 10; f++) {
  const randName = itemNames[Math.floor(Math.random() * itemNames.length)],
    randQuantity = Math.floor(Math.random() * 10 + 1);
  console.log(`Añadimos ${randQuantity} ${randName}(s)`);
  javi.add2Cart(randName, randQuantity);
}

javi.checkOut();
