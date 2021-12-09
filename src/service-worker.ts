const getActiveTab = async () => {
  const query = { active: true, currentWindow: true };
  const [tab] = await chrome.tabs.query(query);

  return tab;
};

chrome.commands.onCommand.addListener(async (command) => {
  const tab = await getActiveTab();
  chrome.tabs.sendMessage(tab.id, { command });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.url) {
    chrome.tabs.sendMessage(tabId, {
      message: "Update!",
      url: changeInfo.url,
    });
  }
});
