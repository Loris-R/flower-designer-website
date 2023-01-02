import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["flipcards", "picturesgoright", "picturesgoleft", "picturesgodown", "buttons", "frames", "picturegodowner", "picturegodownerleft", "picturegodownerright"]

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

    setTimeout(() => {
      buttons[shootingNumber].style.visibility = "visible";
    }, 800);
  }

  show_shooting_one() {
    const picturesgoright = this.picturesgorightTargets;
    const picturesgoleft = this.picturesgoleftTargets;
    const picturesgodown = this.picturesgodownTargets;
    const flipcards = this.flipcardsTargets;

    this.openFlip(0);

    flipcards[0].addEventListener('transitionend', () => {
      picturesgoright[0].classList.add("picture-to-right");
      picturesgoleft[0].classList.add("picture-to-left");
      picturesgodown[0].classList.add("picture-to-down");
    });
  }

  show_shooting_two() {
    const flipcards = this.flipcardsTargets;
    const picturesgodown = this.picturesgodownTargets;

    flipcards[0].style.top = "4.1rem";

    this.openFlip(1);

    flipcards[1].addEventListener('transitionend', () => {
      picturesgodown[1].classList.add("picture-to-down");
    });
  }

  show_shooting_three() {
    const flipcards = this.flipcardsTargets;
    const picturesgodown = this.picturesgodownTargets;
    flipcards[0].style.top = "8.2rem";
    flipcards[1].style.top = "4.1rem";
    this.openFlip(2);

    flipcards[2].addEventListener('transitionend', () => {
      picturesgodown[2].classList.add("picture-to-down");
    });
  }

  show_shooting_four() {
    const flipcards = this.flipcardsTargets;
    const picturesgoright = this.picturesgorightTargets;
    const picturesgoleft = this.picturesgoleftTargets;
    const picturegodowner = this.picturegodownerTarget;
    const picturesgodown = this.picturesgodownTargets;

    flipcards[0].style.top = "12.3rem";
    flipcards[1].style.top = "8.2rem";
    flipcards[2].style.top = "4.1rem";

    this.openFlip(3);

    flipcards[3].addEventListener('transitionend', () => {
      picturesgoright[1].classList.add("picture-to-right");
      picturesgoleft[1].classList.add("picture-to-left");
      picturesgodown[3].classList.add("picture-to-down");
      picturegodowner.classList.add("picture-big-to-downer");
    });
  }

  show_shooting_five() {
    const flipcards = this.flipcardsTargets;
    const picturesgoright = this.picturesgorightTargets;
    const picturesgoleft = this.picturesgoleftTargets;
    const picturegodownerleft = this.picturegodownerleftTarget;
    const picturegodownerright = this.picturegodownerrightTarget;
    const picturesgodown = this.picturesgodownTargets;

    flipcards[0].style.top = "16.6rem";
    flipcards[1].style.top = "12.3rem";
    flipcards[2].style.top = "8.2rem";
    flipcards[3].style.top = "4.1rem";

    this.openFlip(4);

    flipcards[4].addEventListener('transitionend', () => {
      picturesgoright[2].classList.add("picture-to-right");
      picturesgoleft[2].classList.add("picture-to-left");
      picturesgodown[4].classList.add("picture-to-down");
      picturegodownerleft.classList.add("picture-to-down-left");
      picturegodownerright.classList.add("picture-to-down-right");
    });
  }

  show_shooting_six() {
    const flipcards = this.flipcardsTargets;
    const picturesgoright = this.picturesgorightTargets;

    flipcards[0].style.top = "21rem";
    flipcards[1].style.top = "16.6rem";
    flipcards[2].style.top = "12.3rem";
    flipcards[3].style.top = "8.2rem";
    flipcards[4].style.top = "4.1rem";

    this.openFlip(5);

    flipcards[5].addEventListener('transitionend', () => {
      picturesgoright[3].classList.add("picture-to-right");
    });
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

  close_three() {
    const flipcards = this.flipcardsTargets;
    this.flipBack(2);

    setTimeout(() => {
      flipcards[0].style.top = "0rem";
      flipcards[1].style.top = "0rem";
    }, 1000);
  }

  close_four() {
    const flipcards = this.flipcardsTargets;
    this.flipBack(3);

    setTimeout(() => {
      flipcards[0].style.top = "0rem";
      flipcards[1].style.top = "0rem";
      flipcards[2].style.top = "0rem";
    }, 1000);
  }

  close_five() {
    const flipcards = this.flipcardsTargets;
    this.flipBack(4);

    setTimeout(() => {
      flipcards[0].style.top = "0rem";
      flipcards[1].style.top = "0rem";
      flipcards[2].style.top = "0rem";
      flipcards[3].style.top = "0rem";
    }, 1000);
  }

}
