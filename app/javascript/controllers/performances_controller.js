import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["flipcards", "picturesgoright", "picturegoleft", "picturesgodown", "buttons", "frames"]

  flipBack(shootingNumber) {
    const flipcards = this.flipcardsTargets;
    const frames = this.framesTargets;

    flipcards[shootingNumber].classList.remove("flip");
    setTimeout(() => {
      frames.forEach(frame =>
        frame.classList.remove("card-menu-down")
      );
    }, 1000);
  }

  openFlip(shootingNumber) {
    const frames = this.framesTargets;
    const picturesgodown = this.picturesgodownTargets;
    const buttons = this.buttonsTargets;
    const flipcards = this.flipcardsTargets;

    if(shootingNumber !== 0) {
      frames.splice(0, shootingNumber);
    }

    frames.forEach(frame =>
      frame.classList.add("card-menu-down")
    );

    setTimeout(() => {
      flipcards[shootingNumber].classList.add("flip");
    }, 1500);

    flipcards[shootingNumber].addEventListener('transitionend', () => {
      picturesgodown[shootingNumber].classList.add("picture-to-down");
      setTimeout(() => {
        buttons[shootingNumber].style.visibility = "visible";
      }, 800);
    });
  }

  show_shooting_one() {
    const picturesgoright = this.picturesgorightTargets;
    const picturegoleft = this.picturegoleftTarget;
    const flipcards = this.flipcardsTargets;

    this.openFlip(0);

    flipcards[0].addEventListener('transitionend', () => {
      picturesgoright[0].classList.add("picture-to-right");
      picturegoleft.classList.add("picture-to-left");
    });
  }

  show_shooting_two() {
    const flipcards = this.flipcardsTargets;
    const frames = this.framesTargets;

    flipcards[0].style.top = "4.1rem";

    this.openFlip(1);
  }

  close_one() {
    this.flipBack(0);
  }

  close_two() {
    const flipcards = this.flipcardsTargets;
    this.flipBack(1);

    setTimeout(() => {
      flipcards[0].style.top = "0rem";
    }, 1000);
  }

}
