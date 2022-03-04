'use strict';

import MenuAlternative from '../utils/MenuAlternative.mjs';
import { formatMenu } from '../utils/format.mjs';

export default class Contact {
  static title = '-------------------- Contact --------------------';
  static desc =
    '\nGet to the places where you can find me by typing the command and press enter';
  static MenuAlternatives = [
    new MenuAlternative('   LinkedIn', 'Contact.linkedIn()'),
    new MenuAlternative('   GitHub', 'Contact.gitHub()'),
  ];

  static show() {
    console.clear();
    console.log(
      `%c${this.title}%c${this.desc}${formatMenu(this.MenuAlternatives, true)}`,
      'color: lime;',
      'color: white;',
      "background: url( 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png' ) no-repeat; background-size: contain;",
      "background: white url( 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/900px-Octicons-mark-github.svg.png' ) no-repeat; background-size: contain; color: black;"
    );
  }

  static linkedIn() {
    open('https://www.linkedin.com/in/gustaf-johnsson-814664134/', '_blank');
  }

  static gitHub() {
    open('https://github.com/FramtidsGustaf', '_blank');
  }
}

window.Contact = Contact;
