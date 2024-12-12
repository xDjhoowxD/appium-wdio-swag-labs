import { remote } from 'webdriverio';
import appiumCapabilities from '../../config/Config.js'; // Correct relative path
import { expect } from 'expect-webdriverio';
import LoginPage from '../pages/LoginPage.js';
import ProductPage from '../pages/ProductPage.js';

describe('Product Page Tests', function () {
    this.timeout(20000);

    let driver, loginPage, productPage;

    before(async () => {
        driver = await remote(appiumCapabilities);
        loginPage = new LoginPage(driver);
        productPage = new ProductPage(driver);

        await loginPage.performLogin("standard_user", "secret_sauce");
    });

    // after(async () => {
    //     if (driver) {
    //         await driver.deleteSession();
    //     }
    // });

    it('should add backpack to basket', async () => {
        await productPage.backpackItem().waitForDisplayed({ timeout: 5000 });
        await productPage.backpackItem().click();
        await driver.pause(5000);

        await productPage.addToCartCtaButton().scrollIntoView({ direction: 'down', maxScrolls: 2 });
        await productPage.addToCartCtaButton().waitForDisplayed({ timeout: 5000 });
        await productPage.addToCartCtaButton().click();
    });
});