const youtubeSelector = "#contents #thumbnail";
class Youtube extends Nav {
  selectedElement() {
    this.element.animate(
      [{ transform: "scale(1.1)" }, { easing: "ease-out" }],
      200
    );
  }
}

const youtube = new Youtube(youtubeSelector);

chrome.runtime.onMessage.addListener(({ command, message, url }) => {
  if (message === update) {
    if (url.includes("watch")) {
      youtube.resetSelector(`ytd-watch-flexy ${youtubeSelector}`);
    } else {
      youtube.resetSelector(youtubeSelector);
    }
  }

  if (command) {
    youtube.listener(command);
  }
});
