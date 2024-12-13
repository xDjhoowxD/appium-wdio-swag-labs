import { remote } from 'webdriverio';
import appiumCapabilitiesIOS from '../../config/ConfigIOS.js';
import { expect } from 'expect-webdriverio';
import LoginPage from '../pages/LoginPage.js';

describe('Login Page Tests', function () {
    this.timeout(20000);

    let driver, loginPage;

    before(async () => {
        driver = await remote(appiumCapabilitiesIOS);
        loginPage = new LoginPage(driver);
    });

    // after(async () => {
    //     if (driver) {
    //         await driver.deleteSession();
    //     }
    // });

    it('should not login with blank credentials', async () => {
        const user = "";
        const password = "";
        const message = "Username is required";

        await loginPage.performLogin(user, password);
        await expect(await loginPage.errorMessage()).toBeDisplayed();
        await expect(await loginPage.errorMessage()).toHaveText(message);
    });

    it('should not login with invalid credentials', async () => {
        const user = "standard_user2";
        const password = "secret_sauce2";
        const message = "Username and password do not match any user in this service.";

        await loginPage.performLogin(user, password);
        await expect(await loginPage.errorMessage()).toBeDisplayed();
        await expect(await loginPage.errorMessage()).toHaveText(message);
    });

    it('should login with success', async () => {
        const user = "standard_user";
        const password = "secret_sauce";

        await loginPage.performLogin(user, password);
    });
});