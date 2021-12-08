const youtubeNav = new KBNavigator({
  selector: "#contents > ytd-rich-item-renderer",
});

chrome.runtime.onMessage.addListener((request) => {
  youtubeNav.listenCommand(request);
});
