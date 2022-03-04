'use strict';

export default class Welcome {

  static title = '-------------------- Hello and welcome to this odd experience! --------------------';
  static desc = '\nThis webpage is, in its entirety, based in the console. \nType %cGoTo.mainMenu() %cand press enter to get to the menu.';
  static style = [
    'color: lime;',
    'color: inherit;'
  ]

  static show() {
    console.clear();
    console.log( 
      `${this.title} ${this.desc}`,
      ...this.style
    );
  }
}

window.Welcome = Welcome;
