enum Command {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}

class KBNavigator {
  private readonly selector: string;
  private index = 0;
  private elements: NodeListOf<HTMLElement>;
  private element: HTMLElement;
  private readonly selectedAnimation: Keyframe[];

  constructor({ selector, selectedAnimation }) {
    this.selectedAnimation = selectedAnimation;
    this.selector = selector;
    this.elements = document.querySelectorAll(this.selector);
    this.element = this.elements[this.index];
    this.animate();
  }

  listener(request: Command) {
    switch (request) {
      case Command.Left:
        this.index--;
        break;
      case Command.Right:
        this.index++;
        break;
      case Command.Up:
        this.element.click();
        break;
      default:
        break;
    }

    this.element = this.elements[this.index];
    this.animate();
  }

  animate() {
    this.element.animate(this.selectedAnimation, 300);
  }
}
