import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["icon", "optionshome", "tophome", "bottomhome"]

  connect() {
    const icon = this.iconTarget;
    const optionshome = this.optionshomeTarget;

    if (window.matchMedia("(max-width:1420px)").matches) {
      optionshome.classList.remove("open-menu-on-pages");
    };

    function fadeOutDelay(tophome) {
      function fadeOut() {
        tophome.classList.add('visuallyhidden');
        tophome.style.display = "none"
      };
      setTimeout(fadeOut, 2400);
    };

    function showUpDelay(bottomhome) {
      function showUp() {
        bottomhome.classList.add('visuallyshow');
        icon.classList.add('visuallyshow');
      }
      setTimeout(showUp, 1800);
    };

    function makeAction(tophome, bottomhome) {
      fadeOutDelay(tophome);
      showUpDelay(bottomhome);
    }

    if (this.hasTophomeTarget && this.hasBottomhomeTarget) {
      const tophome = this.tophomeTarget;
      const bottomhome = this.bottomhomeTarget;
      window.addEventListener("load", makeAction(tophome, bottomhome));
    }
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
