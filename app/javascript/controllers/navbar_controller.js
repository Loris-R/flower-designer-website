import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["icon", "optionshome"]

  connect() {
    const optionshome = this.optionshomeTarget;

    if (window.matchMedia("(max-width:1420px)").matches) {
      optionshome.classList.remove("open-menu-on-pages");
    };
  }


  translate(event) {
    event.preventDefault();
    const icon = this.iconTarget;
    const optionshome = this.optionshomeTarget;

    const path = window.location.pathname;

    if(path != "/"){
      optionshome.classList.toggle("open-menu-on-pages");
      optionshome.classList.toggle("hidemenu");
      icon.classList.toggle("move");
    } else {
      icon.classList.toggle("move");
      optionshome.classList.toggle("open");
    };

    if (optionshome.classList.contains("open")){
      optionshome.ontransitionend = () => {
        optionshome.style.position = "absolute";
      }
    } else {
      optionshome.style.position = "fixed";
      optionshome.ontransitionend = () => {
        optionshome.style.position = "fixed";
      }
    };
  }
}
