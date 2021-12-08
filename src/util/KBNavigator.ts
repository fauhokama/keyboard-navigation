class KBNavigator {
  private readonly index = 0;
  private readonly selector: string;

  constructor({ selector }) {
    this.selector = selector;
  }

  listenCommand(request) {
    console.log(this.selector);
  }
}

// const doc = document.querySelectorAll("#contents > ytd-rich-item-renderer");
// console.log(doc[1]);
// const clickable = doc[1].querySelector("a");
// clickable.click();
