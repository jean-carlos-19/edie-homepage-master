class Navegacion_movil {
  constructor() {
    this.abrir_menu = document.getElementById('cabecera_icono_menu');
    this.menu_movil = document.getElementById('navegacion_movil');
    this.activado_menu = false;
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
    if (!this.estado_menu()) this.abrir();
    else this.cerrar();
    this.cambiar_estado_menu();
  }
  abrir() {
    this.icono_cerrar();
    let css_aparece_menu = this.menu_movil.getAttribute('class');
    css_aparece_menu += ' navegacion_movil_activo';
    this.menu_movil.setAttribute('class', css_aparece_menu);
  }

  cerrar() {
    this.icono_menu();
    let css_menu_movil = this.menu_movil.getAttribute('class');
    let css_actual = css_menu_movil.split(' ');
    let classNames = '';
    css_actual.forEach((className) => {
      if (className !== 'navegacion_movil_activo')
        classNames += className + ' ';
    });
    this.menu_movil.setAttribute('class', classNames);
  }
}

export { Navegacion_movil };
