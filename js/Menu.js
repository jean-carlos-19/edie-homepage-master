class Menu {
  constructor() {
    this.btn_incono_menu = document.getElementById("abrir_menu");
    this.nav_movil = document.getElementById("nav_movil");
    this.estado = false;
  }
  getMenu() {
    return this.btn_incono_menu;
  }
  getEstado() {
    return this.estado;
  }
  ocultaMenu() {
    this.btn_incono_menu.innerHTML = "menu";
    let att_original = this.nav_movil.getAttribute("class");
    this.nav_movil.setAttribute("class", att_original.split(" ")[0]);
    this.estado = !this.estado;
  }
  muestraMenu() {
    this.btn_incono_menu.innerHTML = "close";
    let att_original = this.nav_movil.getAttribute("class");
    this.nav_movil.setAttribute("class", att_original + " aparece");
    this.estado = !this.estado;
  }
}
export { Menu };
