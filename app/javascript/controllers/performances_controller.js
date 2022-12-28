import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["flipedcardone", "sauvagethree", "sauvagefour", "frontcardone", "flipedcardtwo", "losmuertosone", "losmuertostwo"]

  translate() {
    const flipedcardone = this.flipedcardoneTarget;
    const frontcardone = this.frontcardoneTarget;
    const sauvagethree = this.sauvagethreeTarget;
    const sauvagefour = this.sauvagefourTarget;

    frontcardone.classList.toggle("flip");
    flipedcardone.classList.toggle("visibility");
    flipedcardone.addEventListener('transitionend', () => {
      sauvagethree.classList.toggle("sauvage-three");
      sauvagefour.classList.toggle("sauvage-four");
    });

    const flipedcardtwo = this.flipedcardtwoTarget;
    const losmuertosone = this.losmuertosoneTarget;
    const losmuertostwo = this.losmuertostwoTarget;

    flipedcardtwo.addEventListener('transitionend', () => {
      losmuertosone.classList.toggle("losmuertos-one");
      losmuertostwo.classList.toggle("losmuertos-two");
    });
  }
}
