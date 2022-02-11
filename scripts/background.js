let toggle = false;

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(){

  if (toggle == false){
    toggle = true;
    chrome.browserAction.setIcon({path: "icons/19_on.png"});
  }else{
    toggle = false;
    chrome.browserAction.setIcon({path: "icons/19_off.png"});
  }

  blocker(toggle);
}

function blocker(){
  chrome.webRequest.onBeforeRequest.addListener(function (e){
    return {cancel: toggle};
  }, {
    types: ["xmlhttprequest"],
    urls: ["https://i.instagram.com/api/v1/stories/reel/seen"],
  },["blocking"]);
}
