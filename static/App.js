/**
 * @module App
 */
export default class App {
  static main() {
  
  }

  static init() {
    window.addEventListener("load", () => {
      this.main();
    });
  }
}

App.init();