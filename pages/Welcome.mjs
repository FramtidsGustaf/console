'use strict';

export default class Welcome {
  static show() {
    console.clear();
    console.log(
      'Hello and welcome to this odd experience!',
      '\nThis webpage is, in its entirety, based in the console.',
      '\nType %cGoTo.mainMenu() %cand press enter to get to the menu.',
      'color: lime;',
      'color: inherit;'
    );
  }
}

window.Welcome = Welcome;
