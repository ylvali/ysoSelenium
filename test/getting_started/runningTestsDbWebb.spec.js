// const {By, Builder} = require('selenium-webdriver');
// const assert = require("assert");

//   describe('Test index', function () {
//     let driver;
    
//     before(async function () {
//       driver = await new Builder().forBrowser('chrome').build();
//     });
    
//     it('First Selenium script with mocha', async function () {
//       await driver.get('http://localhost:8082/multipage/#!/');
      
//       // Title
//       let title = await driver.getTitle();
//       assert.equal("Multipage", title);
      
//       // Set timeout for loading the page
//       await driver.manage().setTimeouts({implicit: 500});

  
//       // let textBox = await driver.findElement(By.name('my-text'));
//       // let submitButton = await driver.findElement(By.css('button'));
      
//       // await textBox.sendKeys('Selenium');
//       // await submitButton.click();
      
//       // let message = await driver.findElement(By.id('message'));
//       // let value = await message.getText();
//       // assert.equal("Received!", value);
//     });
  
//     after(async () => await driver.quit());
//   });


//   describe('Go to About', function () {
//     let driver;
    
//     before(async function () {
//       driver = await new Builder().forBrowser('chrome').build();
//     });
    
//     it('Check the about', async function () {
//       await driver.get('http://localhost:8082/multipage/#!/');
      
//       // Title
//       let title = await driver.getTitle();
//       assert.equal("Multipage", title);
      
//       // Set timeout for loading the page
//       await driver.manage().setTimeouts({implicit: 2000});

//       // Check a navigation link
//       target = 'About'
//       let navLink = await driver.findElement(By.linkText(target)).then(function(element) {
//         return element;
//       });
//       await navLink.click();
  
//       // Check the title 
//       let h1 = await driver.findElement(By.css('h1')).then(function(element){ return element.getText()} );
//       assert.equal(h1, 'About');
//       console.log(h1);
  
//       // Check the URL 
//       target = '#!/about';
//       let url = await driver.getCurrentUrl().then(function(url){ return url });
//       console.log(url)
//       assert.ok(url.endsWith("multipage/" + target));
//     });
  
//     after(async () => await driver.quit());
//   });


  
//   describe('Test calculator', function () {
//     let driver;
    
//     before(async function () {
//       driver = await new Builder().forBrowser('chrome').build();
//     });
    
//     it('Check the calculator', async function () {
//       await driver.get('http://localhost:8082/multipage/#!/');
      
//       // Title
//       let title = await driver.getTitle();
//       assert.equal("Multipage", title);
      
//       // Set timeout for loading the page
//       await driver.manage().setTimeouts({implicit: 2000});

//          // Calculator test
//     // Go to calculator 
//     target = 'Calculator'
//     let navLink2 = await driver.findElement(By.linkText(target)).then(function(element) {
//       return element;
//     });
//     await navLink2.click();

//     // Test background color
//     let displayElem = await driver.findElement(By.id("display")).then(function(displayElement) {
//       return displayElement
//     });

//     await displayElem.getCssValue("background-color").then(function(bgColor) {
//       console.log(bgColor)
//       assert.equal(bgColor, "rgba(221, 221, 221, 1)");
//     });

//     // Addition calculation 
//     let promiseNumbers = await driver.findElements(By.className("number"));

//     // Check sum 
//     let display = await driver.findElement(By.id("display")).then(function(displayElement){
//       return displayElement;
//     });

//     // Check sum
//     async function checkDisplay() {
//       return await display.getText().then(function(value) {
//         // console.log(value);
//         return value;
//       });
//     }
//       // click 1
//     await promiseNumbers[6].click();
//     await checkDisplay();

//       // click +
//     let operatorElems = await driver.findElements(By.className("operator")).then(function(operatorElements) {
//       return operatorElements;
//     });
//     await operatorElems[3].click();
//     // console.log('+');

//     // press number 5
//     await promiseNumbers[4].click();
//     await checkDisplay();

//     // press =
//     await operatorElems[4].click();
//     // console.log('=');
//     let sum = await checkDisplay();
//     await assert.equal(sum, "6");
//   });
  
//     after(async () => await driver.quit());
//   });
  