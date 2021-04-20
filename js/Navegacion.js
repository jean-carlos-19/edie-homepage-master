class Navegacion {
  constructor() {
    this.item_bienvenido = document.getElementById("item_bienvenido");
    this.item_servicios = document.getElementById("item_servicios");
    this.item_trabajos = document.getElementById("item_trabajos");
    this.item_clientes = document.getElementById("item_cliente");
    this.item_contacto = document.getElementById("item_contacto");
  }
  getItem_bienvenido() {
    return this.item_bienvenido;
  }
  getItem_servicios() {
    return this.item_servicios;
  }
  getItem_trabajos() {
    return this.item_trabajos;
  }
  getItem_clientes() {
    return this.item_clientes;
  }
  getItem_contacto() {
    return this.item_contacto;
  }
}

export { Navegacion };
