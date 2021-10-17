import { Navegacion_movil } from './_Navegacion_movil';

const navegacion_movil = new Navegacion_movil();
navegacion_movil.obtener_abrir_menu().addEventListener('click', () => {
  navegacion_movil.accion_menu();
});
