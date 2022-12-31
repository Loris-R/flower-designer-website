import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["flipcards", "sauvagethree", "sauvagefour", "sauvagefive", "losmuertosone", "losmuertostwo", "buttons", "conttwo"]

  show_shooting_one() {
    const sauvagethree = this.sauvagethreeTarget;
    const sauvagefour = this.sauvagefourTarget;
    const sauvagefive = this.sauvagefiveTarget;
    const flipcards = this.flipcardsTargets;
    const buttons = this.buttonsTargets;
    const conttwo = this.conttwoTarget;

    conttwo.classList.add("card-up-down");
    setTimeout(() => {
      flipcards[0].classList.add("flip");
    }, 1000);

    flipcards[0].addEventListener('transitionend', () => {
      sauvagethree.classList.add("picture-one");
      sauvagefour.classList.add("picture-two");
      sauvagefive.classList.add("picture-three");
      setTimeout(() => {
        buttons[0].style.visibility = "visible";
      }, 800);
    });
  }

  close() {
    const flipcards = this.flipcardsTargets;
    const conttwo = this.conttwoTarget;

    flipcards[0].classList.remove("flip");
    setTimeout(() => {
      conttwo.classList.remove("card-up-down");
    }, 500);
  }

  show_shooting_two() {
    const losmuertosone = this.losmuertosoneTarget;
    const losmuertostwo = this.losmuertostwoTarget;
    const flipcards = this.flipcardsTargets;
    const frames = this.framesTargets;

    flipcards[1].classList.toggle("flip");
    flipcards[1].addEventListener('transitionend', () => {
      frames[0].
      losmuertosone.classList.toggle("picture-one");
      losmuertostwo.classList.toggle("picture-two");
    });
  }
}
