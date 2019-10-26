class HoverManager {
  constructor() {
    this.originalOnMouseOver = null;
    this.previousElement = null;
    this.callbacks = [];
  }

  register(callback) {
    this.callbacks.push(callback)
  }

  getCustomMouseHover() {
    const customMouseOver = function (event) {
      const currentElement = event.target;
      this.callbacks.forEach(callback => callback(currentElement, this.previousElement));
      this.previousElement = currentElement
    };
    return customMouseOver.bind(this)
  }

  start() {
    this.originalOnMouseOver = window.onmouseover;
    window.onmouseover = this.getCustomMouseHover()
  }

  stop() {
    window.onmouseover = this.originalOnMouseOver;
    this.callbacks = [];
  }
}
