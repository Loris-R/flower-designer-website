import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["tophome", "bottomhome"]

  connect() {
    const tophome = this.tophomeTarget;
    const bottomhome = this.bottomhomeTarget;

    function fadeOutDelay(tophome) {
      function fadeOut() {
        tophome.classList.add('visuallyhidden');
      };
      setTimeout(fadeOut, 2400);
    };

    function showUpDelay(bottomhome) {
      function showUp() {
        bottomhome.classList.add('visuallyshow');
        tophome.classList.add("hidden");
      }
      setTimeout(showUp, 1800);
    };

    function makeAction(tophome, bottomhome) {
      fadeOutDelay(tophome);
      showUpDelay(bottomhome);
    }

    if (this.hasTophomeTarget && this.hasBottomhomeTarget) {
      window.addEventListener("load", makeAction(tophome, bottomhome));
    }
  }
}
