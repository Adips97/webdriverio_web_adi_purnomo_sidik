## Overview
This project automates key eBay search and filter functionalities using `webdriver.io` with a `BDD` framework and the `Page Object Model`. The project consists of two scenarios:
1. Success login
2. Invalid login
3. Add product to cart

## Setup Instructions

### Prerequisites
1. Node.js installed
2. WebdriverIO installed
3. A web browser Chrome.
4. Run 
    ```
    npm install
    ```

### Running
Execute the following command to running automation:
1. Running entire file under folder test `without` generate and open Allure-Report automatically
   ```
   npm run wdio
   ```
2. Running specific file `without` generate and open Allure-Report automatically
   ```
   npx wdio run wdio.conf.js --spec "file destionation with extention"
   ```
   example: <br/>
   ```
   npx wdio run wdio.conf.js --spec ./test/specs/search.product.feature
   ```
3. Step to execute Allure-Report manually
    - Clear directory `allure-results` (to clean all allure-results file)
      ```
      npm run clean:allure
      ```
    - Generate new `allure-results`
      ```
      npm run allure:generate
      ```
    - Open `allure-reports`
      ```
      npm run allure:open
      ```
4. Running entire file under folder test generate and open Allure-Report automatically
   ```
   npm run prepare:allure
   ```
