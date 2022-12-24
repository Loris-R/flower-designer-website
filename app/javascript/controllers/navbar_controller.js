import { Controller } from "@hotwired/stimulus"
import { bottom } from "@popperjs/core";

export default class extends Controller {
  static targets = ["icon", "optionshome", "tophome", "bottomhome"]

  connect() {
    const icon = this.iconTarget;

    function fadeOutDelay(tophome) {
      function fadeOut() {
        tophome.classList.add('visuallyhidden');
      };
      setTimeout(fadeOut, 1200);
    };

    function showUpDelay(bottomhome) {
      function showUp() {
        bottomhome.classList.add('visuallyshow');
        icon.classList.add('visuallyshow');
      }
      setTimeout(showUp, 1000);
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

    icon.classList.toggle("move");
    optionshome.classList.toggle("open");

    if(optionshome.classList.contains("open")){
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
