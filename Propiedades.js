
// EJERCICIO 1
// function Libro(titulo, autor) {
//   this.titulo = titulo;
//   this.autor = autor;
//   this.prestado = false; 
// Libro.prototype.prestar = function() {
//   if (!this.prestado) {     
//     this.prestado = true;
//     console.log("El libro '" + this.titulo + "' ha sido prestado.");
//   } else {
//     console.log("Error: El libro '" + this.titulo + "' ya está prestado.");
//   }
// };  

// const libro1 = new Libro("1984", "George Orwell");
// libro1.prestar(); 
// libro1.prestar(); r     
// // EJERCICIO 2

// function ListaCompras() {
//   this.productos = [];
// }
// ListaCompras.prototype.agregar = function(producto) {
//     this.productos.push(producto);
//     console.log("Producto agregado: " + producto);
//     }
// ListaCompras.prototype.mostrar = function() {
//   console.log("Lista de compras:");
//   for (let i = 0; i < this.productos.length; i++) {
//     console.log((i + 1) + ". " + this.productos[i]);
//     }
// };

// const miLista = new ListaCompras();
// miLista.agregar("Manzanas");
// miLista.agregar("Pan");
// miLista.agregar("Leche");
// miLista.mostrar(); 

// //EJERCICIO 3

// function Reproductor() {
//   this.estado = "detenido"; // Valor inicial
// }
// Reproductor.prototype.reproducir = function() {
//   this.estado = "reproduciendo";
//   console.log("El reproductor está reproduciendo.");
// };

// Reproductor.prototype.pausar = function() {
//   if (this.estado === "reproduciendo") {
//     this.estado = "pausado";
//     console.log("El reproductor está pausado.");
//   } else {
//     console.log("No se puede pausar, el reproductor no está reproduciendo.");
//   }
// }
// Reproductor.prototype.detener = function() {
//   this.estado = "detenido";
//   console.log("El reproductor está detenido.");
// };
// Reproductor.prototype.estadoActual = function() {
//   console.log("Estado actual del reproductor:", this.estado);
// };

// const miReproductor = new Reproductor();    

// miReproductor.estadoActual();
// miReproductor.reproducir(); 
// miReproductor.estadoActual();
// miReproductor.pausar();
// miReproductor.estadoActual();
// miReproductor.detener(); 


//EJERCICIO 4

// function Carrito() {
//   this.productos = [];
//   this.total = 0;

//   this.agregarProducto = function(nombre, precio) {
//     this.productos.push({ nombre: nombre, precio: precio });
//     this.total += precio;
//     console.log("Producto agregado: " + nombre + ", Precio: $" + precio);
//   }

//   this.calcularDescuento = function() {
//     if (this.total > 100) {
//       var descuento = this.total * 0.10;
//       var totalConDescuento = this.total - descuento;
//       console.log("Total: $" + this.total);
//       console.log("Descuento del 10%: $" + descuento);
//       console.log("Total con descuento: $" + totalConDescuento);
//     } else if (this.total > 50) {
//       var descuento = this.total * 0.05;
//       var totalConDescuento = this.total - descuento;
//       console.log("Total: $" + this.total);
//       console.log("Descuento del 5%: $" + descuento);
//       console.log("Total con descuento: $" + totalConDescuento);
//     } else {
//       console.log("Total: $" + this.total + " (sin descuento)");
//     }
//   }
// }
