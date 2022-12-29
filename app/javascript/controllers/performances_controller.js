import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["flipcardone", "sauvagethree", "sauvagefour", "flipedcardtwo", "losmuertosone", "losmuertostwo"]

  translate() {
    const sauvagethree = this.sauvagethreeTarget;
    const sauvagefour = this.sauvagefourTarget;
    const flipcardone = this.flipcardoneTarget;

    flipcardone.classList.toggle("flip");

    flipcardone.addEventListener('transitionend', () => {
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
