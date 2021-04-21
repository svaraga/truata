import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../pages/HomePage';
import ProductsListPage from '../pages/ProductsListPage';
import ProductPage from '../pages/ProductPage';
import BasketPage from '../pages/BasketPage';
import CheckoutPage from '../pages/CheckoutPage';

/**
 *   Step Definition file for @Search.feature
 */
const homePage = new HomePage();
const productsListPage = new ProductsListPage();
const productPage = new ProductPage();
const basketPage = new BasketPage();
const checkoutPage = new CheckoutPage();


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Given('user is on homepage', function ()  {
    homePage.loadHomePage()
    homePage.closeSignupPopUp()
})

When('user search for {string}', function(searchItem) {
    homePage.searchForItem(searchItem)
})

Then('the first item returned should be marked as {string}', function(productsash) {
    productsListPage.validateFirstProductSash(productsash);
})

Then('the name should be {string}', function(searchitem) {
    productsListPage.validateFirstProductTitle(searchitem);
})

Then('price should be {string}', function(price)  {
    productsListPage.validateFirstProductPrice(price);
})

When('user click on search item {string}', function(searchitem) {
    productsListPage.clickProductItem(searchitem);
})

When('user click on {string}', function(button) {
    productPage.clickOnBuyNow();
})

Then('the product name should be {string}', function(searchitem) {
    productPage.validateProductTitle(searchitem);
})

Then('product price should be {string}', function(price)  {
    productPage.validateProductPrice(price);
})

Then('payment total should be {string}', function(total) {
    basketPage.validateBasketPage();
    basketPage.validateTotal(total);
})

When('user goes to checkout page', function() {
    basketPage.goToCheckOut();
})

Then('order total should be {string}', function(ordertotal) {
    checkoutPage.validateCheckoutPage();
    checkoutPage.validateTotal(ordertotal);
})


