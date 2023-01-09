import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["flipcards", "picturesgoright", "picturesgomoreright", "picturesgodown", "buttons", "picturegodowner", "picturesgodownerleft", "picturesgodownerright", "picturegodownertodowner", "picturesgoleft", "picturegolefter", "frameshootings"]

  openFlip(shootingNumber) {
    const buttons = this.buttonsTargets;
    const flipcards = this.flipcardsTargets;
    const frameshootings = this.frameshootingsTargets;

    const cards = flipcards.filter(flipcard => flipcard !== flipcards[shootingNumber]);
    const buttonsfade = buttons.filter(button => button !== buttons[shootingNumber]);

    buttonsfade.forEach(button => button.classList.toggle("fade"));
    cards.forEach(card => card.classList.toggle("fade"));

    flipcards[shootingNumber].classList.toggle("flip");

    setTimeout(() => {
      frameshootings.forEach(frame => frame.style.height = "780px");
    }, 1700);
  }


  show_shooting_one() {
    const picturesgoright = this.picturesgorightTargets;
    const picturesgomoreright = this.picturesgomorerightTargets;
    const picturesgodown = this.picturesgodownTargets;
    const flipcards = this.flipcardsTargets;

    this.openFlip(0);

    flipcards[0].addEventListener('transitionend', () => {
      picturesgoright[0].classList.add("picture-to-right");
      picturesgomoreright[0].classList.add("picture-to-more-right-sauvage");
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
    const picturesgomoreright = this.picturesgomorerightTargets;
    const picturesgodown = this.picturesgodownTargets;
    const picturesgodownerleft = this.picturesgodownerleftTargets;
    const picturesgodownerright = this.picturesgodownerrightTargets;

    this.openFlip(3);

    flipcards[3].addEventListener('transitionend', () => {
      picturesgoright[1].classList.add("picture-to-right");
      picturesgomoreright[1].classList.add("picture-to-more-right");
      picturesgodown[3].classList.add("picture-to-down");
      picturesgodownerleft[0].classList.add("picture-to-down-left");
      picturesgodownerright[0].classList.add("picture-to-down-right");
    });
  }

  show_shooting_five() {
    const flipcards = this.flipcardsTargets;
    const picturesgoright = this.picturesgorightTargets;
    const picturesgoleft = this.picturesgoleftTargets;
    const picturesgodown = this.picturesgodownTargets;
    const picturegodowner = this.picturegodownerTarget;

    this.openFlip(4);

    flipcards[4].addEventListener('transitionend', () => {
      picturesgoright[2].classList.add("picture-to-right");
      picturesgoleft[0].classList.add("picture-to-left");
      picturesgodown[4].classList.add("picture-to-down-svitlana");
      picturegodowner.classList.add("picture-big-to-downer");
    });
  }

  show_shooting_six() {
    const flipcards = this.flipcardsTargets;
    const picturesgoleft = this.picturesgoleftTargets;

    this.openFlip(5);

    flipcards[5].addEventListener('transitionend', () => {
      picturesgoleft[1].classList.add("picture-to-left");
    });
  }

  show_shooting_seven() {
    const flipcards = this.flipcardsTargets;
    const picturesgoright = this.picturesgorightTargets;

    this.openFlip(6);

    flipcards[6].addEventListener('transitionend', () => {
      picturesgoright[3].classList.add("picture-to-right");
    });
  }

  show_shooting_eight() {
    const flipcards = this.flipcardsTargets;
    const picturesgoright = this.picturesgorightTargets;

    this.openFlip(7);

    flipcards[7].addEventListener('transitionend', () => {
      picturesgoright[4].classList.add("picture-to-right");
    });
  }

  show_shooting_nine() {
    const flipcards = this.flipcardsTargets;
    const picturesgoleft = this.picturesgoleftTargets;
    const picturegolefter = this.picturegolefterTarget;

    this.openFlip(8);

    flipcards[8].addEventListener('transitionend', () => {
      picturesgoleft[2].classList.add("picture-to-left");
      picturegolefter.classList.add("picture-to-lefter");
    });
  }

  show_shooting_ten() {
    const flipcards = this.flipcardsTargets;
    const picturesgomoreright = this.picturesgomorerightTargets;
    const picturesgoright = this.picturesgorightTargets;
    const picturesgodownerleft = this.picturesgodownerleftTargets;
    const picturesgodownerright = this.picturesgodownerrightTargets;
    const picturesgodown = this.picturesgodownTargets;
    const picturegodownertodowner = this.picturegodownertodownerTarget;

    this.openFlip(9);

    flipcards[9].addEventListener('transitionend', () => {
      picturesgoright[5].classList.add("picture-to-right");
      picturesgomoreright[2].classList.add("picture-to-more-right-bijoux");
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
      picturesgoright[6].classList.add("picture-to-right");
      picturesgodown[6].classList.add("picture-to-down-svitlana");
    });
  }
}
