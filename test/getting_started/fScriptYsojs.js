const {By, Builder, Browser} = require('selenium-webdriver');
const assert = require("assert");

//https://www.selenium.dev/documentation/webdriver/getting_started/first_script/

(async function firstTest() {
  let driver;
  
  try {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://jsframeworks.ysojs.se/');
  
    let title = await driver.getTitle();
    assert.equal("Yso App", title);
    console.log(title);
  
    await driver.manage().setTimeouts({implicit: 500});

    // 3 easy test cases
    // Check a navigation link
    target = 'API'
    let navLink = await driver.findElement(By.linkText(target)).then(function(element) {
      return element;
    });
      await navLink.click();
    
    // Check the URL 
    target = '/api';
    let url = await driver.getCurrentUrl().then(function(url){ return url });
    console.log(url)
    assert.ok(url.endsWith(target));

    // Find the token text
    let btns = await driver.findElements(By.className("submitBtn")).then(function(element){return element} );
    let text =  await btns[0].getText();
    assert.equal(text, 'TOKEN');

    let response = await driver.findElements(By.className("response")).then(function(element){return element[0].getText()} );
    console.log(response);
    // let text2 =  await btns[0].getText();


  } catch (e) {
    console.log(e)
  } finally {
    await driver.quit();
  }
}())