chrome.webRequest.onBeforeSendHeaders.addListener((stuff) => {
      const useragent = stuff.requestHeaders.find((header) => header.name.toLowerCase() === "user-agent");
      useragent.value = "Mozilla/5.0 (X11; CrOS x86_64 13099.85.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.110 Safari/537.36";
      return { requestHeaders: stuff.requestHeaders }; }, {urls: ["https://play.geforcenow.com/*"]}, ["blocking", "requestHeaders"]);
