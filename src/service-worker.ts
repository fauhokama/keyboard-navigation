importScripts("util/constants.js");

const getActiveTab = async () => {
  const query = { active: true, currentWindow: true };
  const tabs = await chrome.tabs.query(query);

  return tabs[0];
};

chrome.commands.onCommand.addListener(async (command) => {
  console.log(command);

  const tab = await getActiveTab();
  chrome.tabs.sendMessage(tab.id, { command });
});
