const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $, browser } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page');
const InvetoryPage = require('../pageobjects/inventory.page');

Given(/^I open the saucedemo website$/, async () => {
	await browser.url('https://www.saucedemo.com/');
});

When(/^I enter valid username (.*) and password (.*)$/, async (username, password) => {
	await LoginPage.login(username, password);
});

Then(/^I should be redirected to the products page$/, async () => {
	await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
});

Then(/^I should see the "([^"]*)" title$/, async (title) => {
	await LoginPage.getTitle(title);
});

Then(/^I should see the Logout button$/, async () => {
	await LoginPage.findLogoutButton();
});

Then(/^I should see an error message (.*)$/, async (errorMessage) => {
    await LoginPage.verifyErrorMessage(errorMessage);
});




When(/^I select a product and click the "Add to cart" button$/, async () => {
	await InvetoryPage.addProducttoCart();
});

Then(/^the show button Remove on product added to cart$/, async () => {
	await InvetoryPage.verifyShowRemoveButton();
});

Then(/^the cart icon should display "([^"]*)"$/, async (itemCount) => {
	await InvetoryPage.verifyBadgeCart(itemCount);
});

Then(/^the product should be visible in the cart$/, async () => {
	await InvetoryPage.verifyProductonCart();
});

