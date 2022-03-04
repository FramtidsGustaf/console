'use strict';

import MainMenu from '../pages/MainMenu.mjs';
import Welcome from '../pages/Welcome.mjs';
import Contact from '../pages/Contact.mjs';

export default class GoTo {
  static welcome() {
    Welcome.show();
  }

  static mainMenu() {
    MainMenu.show();
  }

  static contact() {
    Contact.show();
  }
}

window.GoTo = GoTo;
