const selector = "#contents #thumbnail";
class Youtube extends Nav {
  selectedElement() {
    this.element.animate(
      [{ transform: "scale(1.1)" }, { easing: "ease-out" }],
      200
    );
  }
}

const youtube = new Youtube(selector);

chrome.runtime.onMessage.addListener(({ command, message, url }) => {
  if (message === update) {
    if (url.includes("watch")) {
      youtube.resetSelector(`ytd-watch-flexy ${selector}`);
    } else {
      youtube.resetSelector(selector);
    }
  }

  if (command) {
    youtube.listener(command);
  }
});
