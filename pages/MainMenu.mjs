'use strict';

import MenuAlternative from '../utils/MenuAlternative.mjs';
import { formatMenu } from '../utils/format.mjs';

export default class MainMenu {
  static title = '-------------------- Main Menu --------------------';
  static desc = '\nType the command and press enter to go to desired place';
  static menuAlternatives = [
    new MenuAlternative('About Me', 'GoTo.about()'),
    new MenuAlternative('Contact Me', 'GoTo.contact()'),
  ];
  static style = [
    'color: cyan;',
    'color: coral;',
    'color: black; background-image: linear-gradient(75deg, coral, cyan);',
  ];

  static show() {
    console.clear();
    console.log(
      `%c${this.title}%c${this.desc}%c${formatMenu(this.menuAlternatives)}`,
      ...this.style
    );
  }
}

window.MainMenu = MainMenu;
