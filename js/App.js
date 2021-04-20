import { Menu } from "./Menu";
import { Secciones } from "./Secciones";
import { Navegacion } from "./Navegacion";

const menu = new Menu();

menu.getMenu().addEventListener("click", () => {
  !menu.getEstado() ? menu.muestraMenu() : menu.ocultaMenu();
});
/*
const secciones = new Secciones();
const navegacion = new Navegacion();

navegacion
  .getItem_bienvenido()
  .addEventListener("click", (evento) =>
    secciones.scrollBienvenido(evento.layerY)
  );
navegacion
  .getItem_clientes()
  .addEventListener("click", (evento) => secciones.scrollEquipo(evento.layerY));
navegacion
  .getItem_contacto()
  .addEventListener("click", (evento) =>
    secciones.scrollFormulario(evento.layerY)
  );
navegacion
  .getItem_servicios()
  .addEventListener("click", (evento) =>
    secciones.scrollServicios(evento.layerY)
  );
navegacion
  .getItem_trabajos()
  .addEventListener("click", (evento) =>
    secciones.scrollHabilidades(evento.layerY)
  );
*/
