const {Builder, Browser} = require('selenium-webdriver');

(async function helloSelenium() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();

  await driver.get('http://localhost:8082/multipage/#!/');

  await driver.quit();
})();