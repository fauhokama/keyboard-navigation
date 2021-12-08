const selectedAnimation = [
  { opacity: 1, easing: "ease-out" },
  { opacity: 0.5, easing: "ease-in" },
  { opacity: 1, easing: "ease-out" },
];

const youtubeNav = new KBNavigator({
  // selector: "#contents > ytd-rich-item-renderer",
  selector: "#thumbnail",
  selectedAnimation,
});

chrome.runtime.onMessage.addListener((request) => {
  youtubeNav.listener(request.command);
});
