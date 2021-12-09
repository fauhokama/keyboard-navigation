class Youtube extends Nav {
  selectedElement() {
    this.element.animate(
      [{ transform: "scale(1.1)" }, { easing: "ease-out" }],
      200
    );
  }
}

const youtube = new Youtube("#thumbnail");

chrome.runtime.onMessage.addListener((request) => {
  youtube.listener(request.command);
});
