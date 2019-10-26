class ElementManager {
  constructor() {
    this.blurClickListener = null;
    this.currentElement = null;
  }

  onNewHover(currentElement, previousElement) {
    if (previousElement) {
      previousElement.classList.remove("element-selector");
      previousElement.removeEventListener("click", this.blurClickListener);
    }
    this.blurClickListener = () => {
      this.blurElement(currentElement)
    };
    currentElement.classList.add("element-selector");
    currentElement.addEventListener("click", this.blurClickListener);
    this.currentElement = currentElement;
  }

  stop() {
    this.currentElement.classList.remove("element-selector");
    this.currentElement.removeEventListener("click", this.blurClickListener);
  }

  blurElement(element) {
    element.classList.add("blur-active")
  }
}
