enum Command {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}

class KBNavigator {
  private readonly selector: string;
  private index = 0;
  private element: HTMLElement;
  private readonly selectedAnimation: Keyframe[];

  constructor({ selector, selectedAnimation }) {
    this.selectedAnimation = selectedAnimation;
    this.selector = selector;
  }

  init() {
    const elements = document.querySelectorAll(
      this.selector
    ) as NodeListOf<HTMLElement>;
    this.element = elements[this.index];
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

    const elements = document.querySelectorAll(
      this.selector
    ) as NodeListOf<HTMLElement>;
    this.element = elements[this.index];
    this.animate();
  }

  animate() {
    this.element.animate(this.selectedAnimation, 300);
  }
}
