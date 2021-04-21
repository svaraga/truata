### SmartBox Assessment 

#### Tools used

- JavaScript
- Cypress
-	Page Object Model
-	Cucumber
-	GitHub

#### Features

- Screenshots are stored on failure in the folder './cypress/screenshots'
- Videos are also recorded for the tests and stored in the folder './cypress/videos'
- Can change the tests to run on specific browser.
    - Run command ***npm run cypress:edge*** to execute on edge browser

#### Pre-requisites
> Node, IntelliJ Idea, Git

Clone or download the project to your local.

- Run ***npm install*** to install the dependencies.
- Url can be configured in file cypress.json
- To execute tests using the cypress test runner, use the command ***npm run test***
- To execute tests on commandline (headless mode), use the command ***npm run cypress:cucumber***
