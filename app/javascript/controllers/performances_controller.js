import { Controller } from "@hotwired/stimulus"
import { arrow } from "@popperjs/core";

export default class extends Controller {
  static targets = ["flipcards", "picturesgoright", "picturesgomoreright", "picturesgodown", "buttons", "picturegodowner", "picturesgodownerleft", "picturesgodownerright", "picturegodownertodowner", "picturesgoleft", "picturegolefter", "frameshootings", "picsconts"]

  openFlipTel(shootingNumber){
    const picsconts = this.picscontsTargets;
    const allchildren = [].slice.call(picsconts[shootingNumber].children);

    allchildren.shift();
    allchildren.forEach(child => {
      child.classList.add("chilren-class");
    });
  }

  openFlip(shootingNumber) {
    const buttons = this.buttonsTargets;
    const flipcards = this.flipcardsTargets;
    const frameshootings = this.frameshootingsTargets;

    const cards = flipcards.filter(flipcard => flipcard !== flipcards[shootingNumber]);

    setTimeout(() => {
      buttons.forEach(button => button.classList.toggle("fade"));
    }, 300);

      if(buttons[shootingNumber].style.bottom !== "-28px"){
        setTimeout(() => {
          buttons[shootingNumber].classList.toggle("fade");
          buttons[shootingNumber].style.bottom = "-28px";
          buttons[shootingNumber].innerHTML = "fermer";
        }, 700);
      } else {
        setTimeout(() => {
          buttons[shootingNumber].style.bottom = "55px";
          buttons[shootingNumber].innerHTML = "ouvrir";
          buttons[shootingNumber].classList.toggle("fade");
        }, 500);
      }

      flipcards[shootingNumber].classList.toggle("flip");

      if (frameshootings[shootingNumber].style.height == "555px") {
        cards.forEach(card => card.classList.toggle("fade"));
        setTimeout(() => {
          frameshootings[shootingNumber].style.height = "2954px";
        }, 800);
      } else {
        setTimeout(() => {
          cards.forEach(card => card.classList.toggle("fade"));
          frameshootings[shootingNumber].style.height = "555px";
        }, 200);
      }
  }

  show_shooting_one() {
    const picturesgoright = this.picturesgorightTargets;
    const picturesgomoreright = this.picturesgomorerightTargets;
    const picturesgodown = this.picturesgodownTargets;
    const flipcards = this.flipcardsTargets;

    this.openFlip(0);

    flipcards[0].addEventListener('transitionend', () => {
      if (window.matchMedia("(min-width: 1180px)").matches) {
        picturesgoright[0].classList.add("picture-to-right");
        picturesgomoreright[0].classList.add("picture-to-more-right-sauvage");
        picturesgodown[0].classList.add("picture-to-down");
      } else {
        this.openFlipTel(0);
      };
    });
  }

  show_shooting_two() {
    const flipcards = this.flipcardsTargets;
    const picturesgodown = this.picturesgodownTargets;

    this.openFlip(1);

    flipcards[1].addEventListener('transitionend', () => {
      if (window.matchMedia("(min-width: 1180px)").matches) {
        picturesgodown[1].classList.add("picture-to-down-svitlana");
      } else {
        this.openFlipTel(1);
      };
    });
  }

  show_shooting_three() {
    const flipcards = this.flipcardsTargets;
    const picturesgodown = this.picturesgodownTargets;

    this.openFlip(2);

    flipcards[2].addEventListener('transitionend', () => {
      if (window.matchMedia("(min-width: 1180px)").matches) {
        picturesgodown[2].classList.add("picture-to-down-dias");
      } else {
        this.openFlipTel(2);
      };
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
      if (window.matchMedia("(min-width: 1180px)").matches) {
        picturesgoright[1].classList.add("picture-to-right");
        picturesgomoreright[1].classList.add("picture-to-more-right");
        picturesgodown[3].classList.add("picture-to-down");
        picturesgodownerleft[0].classList.add("picture-to-down-left");
        picturesgodownerright[0].classList.add("picture-to-down-right");
      } else {
        this.openFlipTel(3);
      };
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
      if (window.matchMedia("(min-width: 1180px)").matches) {
        picturesgoright[2].classList.add("picture-to-right");
        picturesgoleft[0].classList.add("picture-to-left");
        picturesgodown[4].classList.add("picture-to-down-svitlana");
        picturegodowner.classList.add("picture-big-to-downer");
      } else {
        this.openFlipTel(4);
      };
    });
  }

  show_shooting_six() {
    const flipcards = this.flipcardsTargets;
    const picturesgoleft = this.picturesgoleftTargets;

    this.openFlip(5);

    flipcards[5].addEventListener('transitionend', () => {
      if (window.matchMedia("(min-width: 1180px)").matches) {
        picturesgoleft[1].classList.add("picture-to-left");
      } else {
        this.openFlipTel(5);
      };
    });
  }

  show_shooting_seven() {
    const flipcards = this.flipcardsTargets;
    const picturesgoright = this.picturesgorightTargets;

    this.openFlip(6);

    flipcards[6].addEventListener('transitionend', () => {
      if (window.matchMedia("(min-width: 1180px)").matches) {
        picturesgoright[3].classList.add("picture-to-right");
      } else {
        this.openFlipTel(6);
      };
    });
  }

  show_shooting_eight() {
    const flipcards = this.flipcardsTargets;
    const picturesgoright = this.picturesgorightTargets;

    this.openFlip(7);

    flipcards[7].addEventListener('transitionend', () => {
      if (window.matchMedia("(min-width: 1180px)").matches) {
        picturesgoright[4].classList.add("picture-to-right");
      } else {
        this.openFlipTel(7);
      };
    });
  }

  show_shooting_nine() {
    const flipcards = this.flipcardsTargets;
    const picturesgoleft = this.picturesgoleftTargets;
    const picturegolefter = this.picturegolefterTarget;

    this.openFlip(8);

    flipcards[8].addEventListener('transitionend', () => {
      if (window.matchMedia("(min-width: 1180px)").matches) {
        picturesgoleft[2].classList.add("picture-to-left");
        picturegolefter.classList.add("picture-to-lefter");
      } else {
        this.openFlipTel(8);
      };
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
      if (window.matchMedia("(min-width: 1180px)").matches) {
        picturesgoright[5].classList.add("picture-to-right");
        picturesgomoreright[2].classList.add("picture-to-more-right-bijoux");
        picturesgodown[5].classList.add("picture-to-down");
        picturesgodownerleft[1].classList.add("picture-to-down-left");
        picturesgodownerright[1].classList.add("picture-to-down-right");
        picturegodownertodowner.classList.add("picture-to-down-downer");
      } else {
        this.openFlipTel(9);
      };
    });
  }

  show_shooting_eleven() {
    const picturesgoright = this.picturesgorightTargets;
    const picturesgodown = this.picturesgodownTargets;
    const flipcards = this.flipcardsTargets;

    this.openFlip(10);

    flipcards[10].addEventListener('transitionend', () => {
      if (window.matchMedia("(min-width: 1180px)").matches) {
        picturesgoright[6].classList.add("picture-to-right");
        picturesgodown[6].classList.add("picture-to-down-svitlana");
      } else {
        this.openFlipTel(10);
      };
    });
  }
}
