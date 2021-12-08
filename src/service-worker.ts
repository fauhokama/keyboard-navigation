const getActiveTab = async () => {
  const query = { active: true, currentWindow: true };
  const [tab] = await chrome.tabs.query(query);

  return tab;
};

chrome.commands.onCommand.addListener(async (command) => {
  const tab = await getActiveTab();
  chrome.tabs.sendMessage(tab.id, { command });
});
