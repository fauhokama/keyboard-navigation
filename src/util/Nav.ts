class Nav {
  private index = 0;
  private selector: string;
  private elements: NodeListOf<HTMLElement>;
  element: HTMLElement;

  constructor(selector: string) {
    this.selector = selector;
    this.updateElements();
  }

  resetSelector(selector: string) {
  updateElements() {
    this.elements = document.querySelectorAll(this.selector);
    this.element = this.elements[this.index];
  }

  listener(request: Command) {
    this.updateElements(); // Needed for lazyloading or resizing

    switch (request) {
      case Command.Left:
        this.left();
        break;
      case Command.Right:
        this.right();
        break;
      case Command.Up:
        this.up();
        this.clickElement();
        break;
      default:
        break;
    }

    this.element = this.elements[this.index];
    this.selectedElement();
  }

  clickElement() {}

  selectedElement() {}

  up() {
    this.element.click();
  }
  left() {
    if (this.index > 0) this.index--;
  }
  right() {
    this.index++;
  }
}
