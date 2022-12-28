import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["flipedcardone", "sauvagethree", "sauvagefour", "flipedcardtwo", "losmuertosone", "losmuertostwo"]

  translate() {
    const flipedcardone = this.flipedcardoneTarget;
    const sauvagethree = this.sauvagethreeTarget;
    const sauvagefour = this.sauvagefourTarget;

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
