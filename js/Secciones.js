class Secciones {
  constructor() {
    this.bienvenido = document.getElementById("bienvenido");
    this.servicios = document.getElementById("servicios");
    this.trabajos = document.getElementById("habilidades");
    this.clientes = document.getElementById("equipo");
    this.contacto = document.getElementById("formulario");
  }
  scrollBienvenido(y) {
    const { top } = this.bienvenido.getBoundingClientRect();

    this.eventoScroll(y - Math.abs(top));
  }
  scrollServicios(y) {
    const { top } = this.servicios.getBoundingClientRect();
    this.eventoScroll(y - Math.abs(top));
  }
  scrollHabilidades(y) {
    const { top } = this.trabajos.getBoundingClientRect();
    this.eventoScroll(y - Math.abs(top));
  }
  scrollEquipo(y) {
    const { top } = this.clientes.getBoundingClientRect();
    this.eventoScroll(y - Math.abs(top));
  }
  scrollFormulario(y) {
    const { top } = this.contacto.getBoundingClientRect();
    this.eventoScroll(y - Math.abs(top));
  }
  eventoScroll(top) {
    window.scroll({
      top: top,
    });
  }
}

export { Secciones };
