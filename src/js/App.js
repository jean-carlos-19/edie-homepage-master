(() => {
  'use strict';
  const e = new (class {
    constructor() {
      (this.abrir_menu = document.getElementById('cabecera_icono_menu')),
        (this.menu_movil = document.getElementById('navegacion_movil')),
        (this.activado_menu = !1);
    }
    obtener_abrir_menu() {
      return this.abrir_menu;
    }
    obtener_cerrar_menu() {
      return this.cerrar_menu;
    }
    cambiar_estado_menu() {
      this.activado_menu = !this.activado_menu;
    }
    icono_menu() {
      this.abrir_menu.innerHTML = 'menu';
    }
    icono_cerrar() {
      this.abrir_menu.innerHTML = 'close';
    }
    estado_menu() {
      return this.activado_menu;
    }
    accion_menu() {
      this.estado_menu() ? this.cerrar() : this.abrir(),
        this.cambiar_estado_menu();
    }
    abrir() {
      this.icono_cerrar();
      let e = this.menu_movil.getAttribute('class');
      (e += ' navegacion_movil_activo'),
        this.menu_movil.setAttribute('class', e);
    }
    cerrar() {
      this.icono_menu();
      let e = this.menu_movil.getAttribute('class').split(' '),
        t = '';
      e.forEach((e) => {
        'navegacion_movil_activo' !== e && (t += e + ' ');
      }),
        this.menu_movil.setAttribute('class', t);
    }
  })();
  e.obtener_abrir_menu().addEventListener('click', () => {
    e.accion_menu();
  });
})();
