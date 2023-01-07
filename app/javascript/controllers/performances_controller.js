import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["flipcards", "picturesgoright", "picturesgomoreright", "picturesgodown", "buttons", "frames", "picturegodowner", "picturesgodownerleft", "picturesgodownerright", "picturegodownertodowner"]

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
    const buttons = this.buttonsTargets;
    const flipcards = this.flipcardsTargets;

    const cards = flipcards.filter(flipcard => flipcard !== flipcards[shootingNumber]);

    cards.forEach(card => card.classList.add("fade"));

    flipcards[shootingNumber].classList.add("flip");

    buttons[shootingNumber].style.visibility = "visible";
  }


  show_shooting_one() {
    const picturesgoright = this.picturesgorightTargets;
    const picturesgomoreright = this.picturesgomorerightTargets;
    const picturesgodown = this.picturesgodownTargets;
    const flipcards = this.flipcardsTargets;

    this.openFlip(0);

    flipcards[0].addEventListener('transitionend', () => {
      picturesgoright[0].classList.add("picture-to-right");
      picturesgomoreright[0].classList.add("picture-to-more-right");
      picturesgodown[0].classList.add("picture-to-down");
    });
  }

  show_shooting_two() {
    const flipcards = this.flipcardsTargets;
    const picturesgodown = this.picturesgodownTargets;

    this.openFlip(1);

    flipcards[1].addEventListener('transitionend', () => {
      picturesgodown[1].classList.add("picture-to-down-svitlana");
    });
  }

  show_shooting_three() {
    const flipcards = this.flipcardsTargets;
    const picturesgodown = this.picturesgodownTargets;

    this.openFlip(2);

    flipcards[2].addEventListener('transitionend', () => {
      picturesgodown[2].classList.add("picture-to-down-dias");
    });
  }

  show_shooting_four() {
    const flipcards = this.flipcardsTargets;
    const picturesgoright = this.picturesgorightTargets;
    const picturesgoleft = this.picturesgoleftTargets;
    const picturegodowner = this.picturegodownerTarget;
    const picturesgodown = this.picturesgodownTargets;

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

    this.openFlip(5);

    flipcards[5].addEventListener('transitionend', () => {
      picturesgoright[3].classList.add("picture-to-right");
    });
  }

  show_shooting_seven() {
    const flipcards = this.flipcardsTargets;
    const picturesgoright = this.picturesgorightTargets;

    this.openFlip(6);

    flipcards[6].addEventListener('transitionend', () => {
      picturesgoright[4].classList.add("picture-to-right");
    });
  }

  show_shooting_eight() {
    const flipcards = this.flipcardsTargets;
    const picturesgoright = this.picturesgorightTargets;

    this.openFlip(7);

    flipcards[7].addEventListener('transitionend', () => {
      picturesgoright[5].classList.add("picture-to-right");
    });
  }

  show_shooting_nine() {
    const flipcards = this.flipcardsTargets;
    const picturesgoright = this.picturesgorightTargets;
    const picturesgoleft = this.picturesgoleftTargets;

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
