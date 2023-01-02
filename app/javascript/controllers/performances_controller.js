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

  show_shooting_one() {
    const picturesgoright = this.picturesgorightTargets;
    const picturegoleft = this.picturegoleftTarget;
    const picturesgodown = this.picturesgodownTargets;
    const flipcards = this.flipcardsTargets;
    const buttons = this.buttonsTargets;
    const frames = this.framesTargets;

    frames.forEach(frame =>
      frame.classList.add("card-menu-down")
      );

    setTimeout(() => {
      flipcards[0].classList.add("flip");
    }, 1500);

    flipcards[0].addEventListener('transitionend', () => {
      picturesgoright[0].classList.add("picture-to-right");
      picturegoleft.classList.add("picture-to-left");
      picturesgodown[0].classList.add("picture-to-down");
      setTimeout(() => {
        buttons[0].style.visibility = "visible";
      }, 800);
    });
  }

  close_one() {
    this.flipBack(0);
  }

  close_two(){
    const flipcards = this.flipcardsTargets;
    this.flipBack(1);

    setTimeout(() => {
      flipcards[0].style.top = "0rem";
    }, 1000);
  }

  show_shooting_two() {
    const picturesgodown = this.picturesgodownTargets;
    const flipcards = this.flipcardsTargets;
    const buttons = this.buttonsTargets;
    const frames = this.framesTargets;

    flipcards[0].style.top = "4.1rem";
    frames.splice(0, 1);
    frames.forEach(frame =>
      frame.classList.add("card-menu-down")
    );

    setTimeout(() => {
      flipcards[1].classList.add("flip");
    }, 1500);

    flipcards[1].addEventListener('transitionend', () => {
      picturesgodown[1].classList.add("picture-to-down");
      setTimeout(() => {
        buttons[1].style.visibility = "visible";
      }, 800);
    });
  }
}
