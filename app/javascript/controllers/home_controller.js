import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["tophome", "bottomhome"];

  connect() {
    const tophome = this.tophomeTarget;
    const bottomhome = this.bottomhomeTarget;

    function fadeOutDelay() {
      function fadeOut() {
        tophome.classList.add('visuallyhidden');
      };
      setTimeout(fadeOut, 1200);
    };

    function showUpDelay() {
      function showUp() {
          bottomhome.classList.add('visuallyshow');
        }
      setTimeout(showUp, 1000);
    };

    const ready = function makeAction() {
      fadeOutDelay();
      showUpDelay();
    }

    window.addEventListener("load", ready)
  }

}
