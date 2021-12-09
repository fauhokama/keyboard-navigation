// TODO !!! Choose proper selectors.
const googleSelectors = {
  title: "",
  sublink: ".l",
};

const googleSelector = Object.values(googleSelectors).join(", ");

class Google extends Nav {
  selectedElement() {
    this.element.animate([{ color: "red" }, { easing: "ease-out" }], 200);
  }
}

const google = new Google(googleSelector);

chrome.runtime.onMessage.addListener(({ command, message, url }) => {
  if (command) {
    google.listener(command);
  }
});
