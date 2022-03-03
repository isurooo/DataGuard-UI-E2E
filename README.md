# DataGuard-UI-E2E
UI end to end with Cypress and cucumber

* Prerequisites 
  *  Open the `dg_todo_list_challenge` project and run 
  *  Make sure the DataGuard TODO list challenge running on http://0.0.0.0:8080

* How do I use the repo
    * Clone a copy of the `DataGuard-UI-E2E` repo locally
    * Open the project using IDE
    * Navigate to the ` DataGuard_ui_e2e` folder in terminal
    * Run `nvm` use command
    * Run `npm i` command
    * Run `npm run cy:open` command to run the Cypress
    * Select the `TODO.feature` from the `Cypress Test Runner` to run the automation

* How to check the test coverage report
  * Run the test `npm run cy:open`
  * Close the `Cypress Test Runner` 
  * Run `npm run cy:report`
  * Go to the `cypress > cucumber-report >` directory
  * Right click the `index.html` file and open in with chrome browser
