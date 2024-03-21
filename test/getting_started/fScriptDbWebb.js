const {By, Builder, Browser} = require('selenium-webdriver');
const assert = require("assert");

//https://www.selenium.dev/documentation/webdriver/getting_started/first_script/

(async function firstTest() {
  let driver;
  
  try {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('http://localhost:8082/multipage/#!/');
  
    let title = await driver.getTitle();
    assert.equal("Multipage", title);
    console.log(title);
  
    await driver.manage().setTimeouts({implicit: 500});

    // Check a navigation link
    target = 'About'
    let navLink = await driver.findElement(By.linkText(target)).then(function(element) {
      return element;
    });
    await navLink.click();

    // Check the title 
    let h1 = await driver.findElement(By.css('h1')).then(function(element){ return element.getText()} );
    assert.equal(h1, 'About');
    console.log(h1);

    // Check the URL 
    target = '#!/about';
    let url = await driver.getCurrentUrl().then(function(url){ return url });
    console.log(url)
    assert.ok(url.endsWith("multipage/" + target));


    // Calculator test
    // Go to calculator 
    target = 'Calculator'
    let navLink2 = await driver.findElement(By.linkText(target)).then(function(element) {
      return element;
    });
    await navLink2.click();

    // Test background color
    let displayElem = await driver.findElement(By.id("display")).then(function(displayElement) {
      return displayElement
    });

    await displayElem.getCssValue("background-color").then(function(bgColor) {
      console.log(bgColor)
      assert.equal(bgColor, "rgba(221, 221, 221, 1)");
    });

    // Addition calculation 
    let promiseNumbers = await driver.findElements(By.className("number"));

    // Check sum 
    let display = await driver.findElement(By.id("display")).then(function(displayElement){
      return displayElement;
    });

    // Check sum
    async function checkDisplay() {
      return await display.getText().then(function(value) {
        console.log(value);
        return value;
      });
    }
      // click 1
    await promiseNumbers[6].click();
    await checkDisplay();

      // click +
    let operatorElems = await driver.findElements(By.className("operator")).then(function(operatorElements) {
      return operatorElements;
    });
    await operatorElems[3].click();
    // console.log('+');

    // press number 5
    await promiseNumbers[4].click();
    await checkDisplay();

    // press =
    await operatorElems[4].click();
    // console.log('=');
    let sum = await checkDisplay();
    await assert.equal(sum, "6");

  } catch (e) {
    // console.log(e)
  } finally {
    await driver.quit();
  }
}())