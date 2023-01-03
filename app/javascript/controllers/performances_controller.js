import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["flipcards", "picturesgoright", "picturesgoleft", "picturesgodown", "buttons", "frames", "picturegodowner", "picturesgodownerleft", "picturesgodownerright", "allframe", "picturegodownertodowner"]

  flipBack(shootingNumber, cardsNumber) {
    const flipcards = this.flipcardsTargets;
    const frames = this.framesTargets;

    flipcards[shootingNumber].classList.remove("flip");
    setTimeout(() => {
      frames.forEach(frame =>
        frame.classList.remove("card-menu-down")
      );
    }, 1000);

    if(shootingNumber !== 0) {
      setTimeout(() => {
        cardsNumber.forEach(number =>
        flipcards[number].style.top = "0rem"
        )
      }, 1000);
    }
  }

  openFlip(shootingNumber) {
    const frames = this.framesTargets;
    const buttons = this.buttonsTargets;
    const flipcards = this.flipcardsTargets;
    const allframe = this.allframeTarget;

    if(shootingNumber !== 0) {
      frames.splice(0, shootingNumber);
    };

    frames.forEach(frame =>
      frame.classList.add("card-menu-down")
    );

   setTimeout(() => {
     allframe.scrollIntoView({behavior: "smooth"});
   }, 1000);

    setTimeout(() => {
      flipcards[shootingNumber].classList.add("flip");
    }, 2500);

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

    flipcards[0].style.top = "3.1rem";

    this.openFlip(1);

    flipcards[1].addEventListener('transitionend', () => {
      picturesgodown[1].classList.add("picture-to-down");
    });
  }

  show_shooting_three() {
    const flipcards = this.flipcardsTargets;
    const picturesgodown = this.picturesgodownTargets;
    flipcards[0].style.top = "6.2rem";
    flipcards[1].style.top = "3.1rem";
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

    flipcards[0].style.top = "9.3rem";
    flipcards[1].style.top = "6.2rem";
    flipcards[2].style.top = "3.1rem";

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
    const picturesgodownerleft = this.picturesgodownerleftTargets;
    const picturesgodownerright = this.picturesgodownerrightTargets;
    const picturesgodown = this.picturesgodownTargets;

    flipcards[0].style.top = "12.6rem";
    flipcards[1].style.top = "9.3rem";
    flipcards[2].style.top = "6.2rem";
    flipcards[3].style.top = "3.1rem";

    this.openFlip(4);

    flipcards[4].addEventListener('transitionend', () => {
      picturesgoright[2].classList.add("picture-to-right");
      picturesgoleft[2].classList.add("picture-to-left");
      picturesgodown[4].classList.add("picture-to-down");
      picturesgodownerleft[0].classList.add("picture-to-down-left");
      picturesgodownerright[0].classList.add("picture-to-down-right");
    });
  }

  show_shooting_six() {
    const flipcards = this.flipcardsTargets;
    const picturesgoright = this.picturesgorightTargets;

    flipcards[0].style.top = "16rem";
    flipcards[1].style.top = "12.6rem";
    flipcards[2].style.top = "9.3rem";
    flipcards[3].style.top = "6.2rem";
    flipcards[4].style.top = "3.1rem";

    this.openFlip(5);

    flipcards[5].addEventListener('transitionend', () => {
      picturesgoright[3].classList.add("picture-to-right");
    });
  }

  show_shooting_seven() {
    const flipcards = this.flipcardsTargets;
    const picturesgoright = this.picturesgorightTargets;

    flipcards[0].style.top = "19rem";
    flipcards[1].style.top = "16rem";
    flipcards[2].style.top = "12.6rem";
    flipcards[3].style.top = "9.3rem";
    flipcards[4].style.top = "6.2rem";
    flipcards[5].style.top = "3.1rem";

    this.openFlip(6);

    flipcards[6].addEventListener('transitionend', () => {
      picturesgoright[4].classList.add("picture-to-right");
    });
  }

  show_shooting_eight() {
    const flipcards = this.flipcardsTargets;
    const picturesgoright = this.picturesgorightTargets;

    flipcards[0].style.top = "22rem";
    flipcards[1].style.top = "19rem";
    flipcards[2].style.top = "16rem";
    flipcards[3].style.top = "12.6rem";
    flipcards[4].style.top = "9.3rem";
    flipcards[5].style.top = "6.2rem";
    flipcards[6].style.top = "3.1rem";

    this.openFlip(7);

    flipcards[7].addEventListener('transitionend', () => {
      picturesgoright[5].classList.add("picture-to-right");
    });
  }

  show_shooting_nine() {
    const flipcards = this.flipcardsTargets;
    const picturesgoright = this.picturesgorightTargets;
    const picturesgoleft = this.picturesgoleftTargets;

    flipcards[0].style.top = "25rem";
    flipcards[1].style.top = "22rem";
    flipcards[2].style.top = "19rem";
    flipcards[3].style.top = "16rem";
    flipcards[4].style.top = "12.6rem";
    flipcards[5].style.top = "9.3rem";
    flipcards[6].style.top = "6.2rem";
    flipcards[7].style.top = "3.1rem";

    this.openFlip(8);

    flipcards[8].addEventListener('transitionend', () => {
      picturesgoright[6].classList.add("picture-to-right");
      picturesgoleft[3].classList.add("picture-to-left");
    });
  }

  show_shooting_ten() {
    const flipcards = this.flipcardsTargets;
    const picturesgoright = this.picturesgorightTargets;
    const picturesgoleft = this.picturesgoleftTargets;
    const picturesgodownerleft = this.picturesgodownerleftTargets;
    const picturesgodownerright = this.picturesgodownerrightTargets;
    const picturesgodown = this.picturesgodownTargets;
    const picturegodownertodowner = this.picturegodownertodownerTarget;

    flipcards[0].style.top = "28rem";
    flipcards[1].style.top = "25rem";
    flipcards[2].style.top = "22rem";
    flipcards[3].style.top = "19rem";
    flipcards[4].style.top = "16rem";
    flipcards[5].style.top = "12.6rem";
    flipcards[6].style.top = "9.3rem";
    flipcards[7].style.top = "6.2rem";
    flipcards[8].style.top = "3.1rem";

    this.openFlip(9);

    flipcards[9].addEventListener('transitionend', () => {
      picturesgoright[7].classList.add("picture-to-right");
      picturesgoleft[4].classList.add("picture-to-left");
      picturesgodown[5].classList.add("picture-to-down");
      picturesgodownerleft[1].classList.add("picture-to-down-left");
      picturesgodownerright[1].classList.add("picture-to-down-right");
      picturegodownertodowner.classList.add("picture-to-down-downer");
    });
  }

  show_shooting_eleven() {
    const picturesgoright = this.picturesgorightTargets;
    const picturesgodown = this.picturesgodownTargets;
    const flipcards = this.flipcardsTargets;

    flipcards[0].style.top = "31.5rem";
    flipcards[1].style.top = "28rem";
    flipcards[2].style.top = "25rem";
    flipcards[3].style.top = "22rem";
    flipcards[4].style.top = "19rem";
    flipcards[5].style.top = "16rem";
    flipcards[6].style.top = "12.6rem";
    flipcards[7].style.top = "9.3rem";
    flipcards[8].style.top = "6.2rem";
    flipcards[9].style.top = "3.1rem";

    this.openFlip(10);

    flipcards[10].addEventListener('transitionend', () => {
      picturesgoright[8].classList.add("picture-to-right");
      picturesgodown[6].classList.add("picture-to-down");
    });
  }

  close_one() {
    this.flipBack(0);
  }

  close_two() {
    const flipcardnumbers = [0];
    this.flipBack(1, flipcardnumbers);
  }

  close_three() {
    const flipcardnumbers = [0, 1];
    this.flipBack(2, flipcardnumbers);
  }

  close_four() {
    const flipcardnumbers = [0,1,2];
    this.flipBack(3, flipcardnumbers);
  }

  close_five() {
    const flipcardnumbers = [0, 1, 2, 3];
    this.flipBack(4, flipcardnumbers);
  }

  close_six() {
    const flipcardnumbers = [0, 1, 2, 3, 4];
    this.flipBack(5, flipcardnumbers);
  }

  close_seven() {
    const flipcardnumbers = [0, 1, 2, 3, 4, 5];
    this.flipBack(6, flipcardnumbers);
  }

  close_eight() {
    const flipcardnumbers = [0, 1, 2, 3, 4, 5, 6];
    this.flipBack(7, flipcardnumbers);
  }

  close_nine() {
    const flipcardnumbers = [0, 1, 2, 3, 4, 5, 6, 7];
    this.flipBack(8, flipcardnumbers);
  }

  close_ten() {
    const flipcardnumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.flipBack(9, flipcardnumbers);
  }

  close_eleven() {
    const flipcardnumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.flipBack(10, flipcardnumbers);
  }

}
