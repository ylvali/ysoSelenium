[![Build Status](https://app.travis-ci.com/ylvali/testSelenium.svg?token=zbGBcfgSpBchF7HShAt4&branch=main)](https://app.travis-ci.com/ylvali/testSelenium)

SELENIUM TESTS 
Runs 'headless' tests. That is testing the GUI - graphical user interface interaction.

Note: do not run on WSL. 
On windows, use cygwin. 

Runs the Selenium startup webpage tests
https://www.selenium.dev/documentation/

And tests me-api 
https://jsframeworks.ysojs.se/

Node.js package manager npm:
(package.json file configuration)
-- npm install
-- npm test

If enabled it also runs the test in bthSelenium folder (BTH Blekinge Technical Institute)
Then first start the app (bthSelemnium & npm start).
And enable the // marked tests in runningTestsDbWebb.spec.js