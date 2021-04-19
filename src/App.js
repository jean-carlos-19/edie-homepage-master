const BTN_ICONO_MENU = document.getElementById("abrir_menu");
const NAV_NAV_MOVIL = document.getElementById("nav_movil");
let estado = false;
BTN_ICONO_MENU.addEventListener("click", () => {
  if (!estado) {
    BTN_ICONO_MENU.innerHTML = "close";
    let att_original = NAV_NAV_MOVIL.getAttribute("class");
    NAV_NAV_MOVIL.setAttribute("class", att_original + " aparece");
    estado = !estado;
  } else {
    BTN_ICONO_MENU.innerHTML = "menu";
    let att_original = NAV_NAV_MOVIL.getAttribute("class");
    NAV_NAV_MOVIL.setAttribute("class", att_original.split(" ")[0]);
    estado = !estado;
  }
});
